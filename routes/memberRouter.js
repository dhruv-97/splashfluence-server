var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var members = require('../models/member');
var shortid = require('shortid');
const aws = require('aws-sdk');
aws.config.update({region: 'ap-south-1'});
const S3_BUCKET = process.env.S3_BUCKET_NAME;
var Verify=require('./verify');

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
    members.create(req.body, function (err, member) {
        if (err) next(err);
        console.log('member created!');
        var id = member._id;
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end('Added the member with id: ' + id);
    });
})
.delete(function (req, res, next) {
    members.remove(req.query, function (err, resp) {
        if (err) next(err);
        res.json(resp);
    });
});
memberRouter.route('/sign-s3')
.get(function (req, res, next) {
    const s3 = new aws.S3({signatureVersion: 'v4'});
  const fileName = shortid.generate();
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    res.write(JSON.stringify(returnData));
    res.end();
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
        const s3 = new aws.S3({signatureVersion: 'v4'});
        let key = resp.image.substr(resp.image.lastIndexOf('/') + 1)+'.jpg';
        var params = {Bucket: S3_BUCKET, Key: key};  
        s3.deleteObject(params, function(err, data) {
            res.json(resp);
        });
    });
});
module.exports=memberRouter;