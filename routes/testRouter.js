var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var tests = require('../models/test');
var Verify=require('./verify');
var images = require('images');
var testRouter = express.Router();

testRouter.use(bodyParser.json());

testRouter.route('/')
.get(function (req, res, next) {
    tests.find({}).sort('_id').exec( function (err, test) {
        if (err) throw err;
        res.json(test);
    });
})
.post(function (req, res, next) {
    if (!req.files){
        tests.create(req.body, function (err, test) {
                console.log(req.body);
                if (err) next(err);
                console.log('test created!');
                var id = test._id;
                res.setHeader("Access-Control-Allow-Origin", 'http://localhost');
                res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
                res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                });

                res.end('Added the test with id: ' + id);
            });

    }
    else{
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
    let image = req.files.image;
    tests.nextCount(function(err, count){
        req.body.image="public/assets/img/testimonials/"+count+".jpg";
        image.mv(req.body.image, function(err) {
            if (err)
              return res.status(500).send(err);
            req.body._id=count;
            images(req.body.image).resize(400,400)
            .save(req.body.image,{
                quality:50
            });
            req.body.image=req.body.image.substring(7);
            tests.create(req.body, function (err, test) {
                console.log(req.body);
                if (err) next(err);
                console.log('test created!');
                var id = test._id;
                res.setHeader("Access-Control-Allow-Origin", 'http://localhost');
                res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
                res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                });

                res.end('Added the test with id: ' + id);
            });
        });
    });
    }
})
.delete(function (req, res, next) {
    tests.remove({}, function (err, resp) {
        if (err) next(err);
        res.json(resp);
    });
});
testRouter.route('/:testId')
.get(function (req, res, next) {
    tests.findById(req.params.testId,function (err, test) {
        if (err) next(err);
        res.json(test);
        });
})


.put(function (req, res, next) {
    tests.findByIdAndUpdate(req.params.testId, {
        $set: req.body
    }, {
        new: true
    }, function (err, test) {
        if (err) next(err);
        res.json(test);
    });
})

.delete(function (req, res, next) {
        tests.findByIdAndRemove(req.params.testId, function (err, resp) {
        if (err) next(err);
        fs.unlink('public/'+resp.image);
        res.json(resp);
    });
});
module.exports=testRouter;