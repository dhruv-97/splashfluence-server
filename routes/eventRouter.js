var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var events = require('../models/event');
var Verify=require('./verify');
var images = require('images');
var multer = require('multer');
var upload = multer({ dest: 'public/assets/img/processing/' })
var eventRouter = express.Router();

eventRouter.use(bodyParser.json());

eventRouter.route('/')
.get(function (req, res, next) {
    console.log(req.query);
    if(req.query!='{}'){
        events.find(req.query).sort('_id').limit(4).exec(function (err, event) {
            if (err) throw err;
            res.json(event);
        });
    }
    else{
        events.find().sort('_id').exec(function (err, event) {
        if (err) throw err;
        res.json(event);
        });
    }
})
.delete(function (req, res, next) {
    events.remove({}, function (err, resp) {
        if (err) next(err);
        res.json(resp);
    });
});
eventRouter.route('/upload')
.post(function(req, res, next) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
  
  //let image2 = req.files.image2;
  events.nextCount(function(err, count){
    req.body.image1="public/assets/img/portfolio/grid/"+req.body.category+"/"+count+"1.jpg";
    req.body.image2="public/assets/img/portfolio/grid/"+req.body.category+"/"+count+"2.jpg"; 
    let bg= count%4;
    if(bg==0)
        req.body.bg='assets/img/portfolio/bg-1.jpg';
    else if(bg==1)
        req.body.bg='assets/img/portfolio/bg-2.jpg';
    else if(bg==2)
        req.body.bg='assets/img/portfolio/bg-3.jpg';
    else
        req.body.bg='assets/img/portfolio/bg-4.jpg';
    if(req.body.featured=='true')
        req.body.featured=true;
    else
        req.body.featured=false;
    let image1 = req.files.image1;
  // Use the mv() method to place the file somewhere on your server 
  image1.mv(req.body.image1, function(err) {
    if (err){
      return res.status(500).send(err);
      console.log("Got fucked here");
    }
    let image2 = req.files.image2;
    image2.mv(req.body.image2, function(err) {
        if (err){
          return res.status(500).send(err);
          console.log("Got fucked here too");
        }
        let s1=images(req.body.image1).size();
        let s2=images(req.body.image2).size();
        if(s1.width>s2.width){
            images(req.body.image1).resize(s2.width)
            .save(req.body.image1,{
                quality:100
            });
        }
        else{
            images(req.body.image2).resize(s1.width)
            .save(req.body.image2,{
                quality:100
            });
        }
        let criticalw=s1.width*0.7;
        let criticalh=s1.height*0.7;
        req.body.combinedImage="public/assets/img/portfolio/combo"+count+".png";
        images(criticalw+s2.width, s2.height+criticalh)
            .draw(images(req.body.image1), 0, 0)
            .draw(images(req.body.image2),criticalw,criticalh)
            .save(req.body.combinedImage, {               //Save the image to a file,whih quality 50 
                quality : 1                    //保存图片到文件,图片质量为50 
            });
            images(req.body.image1).resize(400,300)
            .save(req.body.image1,{
                quality:100
            });
            req.body.image1=req.body.image1.substring(7);
            req.body.image2=req.body.image2.substring(7);
            req.body.combinedImage=req.body.combinedImage.substring(7);

            events.create(req.body, function (err, event) {
                console.log(req.body);
                if (err) next(err);
                console.log('event created!');
                var id = event._id;
                res.setHeader("Access-Control-Allow-Origin", 'http://localhost');
                res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
                res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                });

                res.end('Added the event with id: ' + id);
            });
        });
      });
  });

});

eventRouter.route('/:eventId')
.get(function (req, res, next) {
    events.findById(req.params.eventId,function (err, event) {
        if (err) next(err);
        res.json(event);
        });
})


.put(function (req, res, next) {
    events.findByIdAndUpdate(req.params.eventId, {
        $set: req.body
    }, {
        new: true
    }, function (err, event) {
        if (err) next(err);
        res.json(event);
    });
})

.delete(function (req, res, next) {
        events.findByIdAndRemove(req.params.eventId, function (err, resp) {
        if (err) next(err);
        fs.unlink('public/'+resp.image1);
        fs.unlink('public/'+resp.image2);
        fs.unlink('public/'+resp.combinedImage);
        res.json(resp);
    });
});
module.exports=eventRouter;