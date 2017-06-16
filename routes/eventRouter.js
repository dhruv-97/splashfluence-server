var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var events = require('../models/event');
var Verify=require('./verify');
const aws = require('aws-sdk');
aws.config.update({region: 'ap-south-1'});
const S3_BUCKET = process.env.S3_BUCKET_NAME;
var eventRouter = express.Router();

eventRouter.use(bodyParser.json());

eventRouter.route('/')
.get(function (req, res, next) {
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
})
.post(function(req, res, next) {
  events.nextCount(function(err, count){
      console.log(req.body);
    let bg= count%4;
    if(bg==0)
        req.body.bg='assets/img/portfolio/bg-1.jpg';
    else if(bg==1)
        req.body.bg='assets/img/portfolio/bg-2.jpg';
    else if(bg==2)
        req.body.bg='assets/img/portfolio/bg-3.jpg';
    else
        req.body.bg='assets/img/portfolio/bg-4.jpg';
    events.create(req.body, function (err, event) {
        console.log(req.body);
        if (err) next(err);
        console.log('event created!');
        var id = event._id;
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the event with id: ' + id);
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
    delete req.body._id;
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
        const s3 = new aws.S3({signatureVersion: 'v4'});
        let keys=[];
        resp.images.forEach(function(element){
            let Key = element.substr(element.lastIndexOf('/') + 1)+'.jpg';
            keys.push({Key});
        })
        let params = {Bucket: S3_BUCKET, Delete: {
                Objects: keys
                }};  
            s3.deleteObjects(params, function(err, data) {
                console.log(data);
            });
    });
});
module.exports=eventRouter;