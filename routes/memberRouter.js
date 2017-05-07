var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var members = require('../models/member');
var Verify=require('./verify');
var images = require('images');
var memberRouter = express.Router();

memberRouter.use(bodyParser.json());

memberRouter.route('/')
.get(function (req, res, next) {
    members.find({}, function (err, member) {
        if (err) throw err;
        res.json(member);
    });
})
.post(function (req, res, next) {
    if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
    let image = req.files.image;
    members.nextCount(function(err, count){
        req.body.image="public/assets/img/people/"+count+".jpg";
        image.mv(req.body.image, function(err) {
            if (err)
              return res.status(500).send(err);
            req.body._id=count;
            images(req.body.image).resize(400,400)
            .save(req.body.image,{
                quality:100
            });
            req.body.image=req.body.image.substring(7);
            members.create(req.body, function (err, member) {
                console.log(req.body);
                if (err) next(err);
                console.log('member created!');
                var id = member._id;
                res.setHeader("Access-Control-Allow-Origin", 'http://localhost');
                res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
                res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                });

                res.end('Added the member with id: ' + id);
            });
        });
    });
})
.delete(function (req, res, next) {
    members.remove({}, function (err, resp) {
        if (err) next(err);
        res.json(resp);
    });
});
memberRouter.route('/:memberId')
.get(function (req, res, next) {
    members.findById(req.params.memberId,function (err, member) {
        if (err) next(err);
        res.json(member);
        });
})


.put(function (req, res, next) {
    members.findByIdAndUpdate(req.params.memberId, {
        $set: req.body
    }, {
        new: true
    }, function (err, member) {
        if (err) next(err);
        res.json(member);
    });
})

.delete(function (req, res, next) {
        members.findByIdAndRemove(req.params.memberId, function (err, resp) {
        if (err) next(err);
        fs.unlink('public/'+resp.image);
        res.json(resp);
    });
});
module.exports=memberRouter;