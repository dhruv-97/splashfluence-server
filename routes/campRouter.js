var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var camps = require('../models/camp');
var shortid = require('shortid');
const aws = require('aws-sdk');
aws.config.update({region: 'ap-south-1'});
const S3_BUCKET = process.env.S3_BUCKET_NAME;
var Verify=require('./verify');

var campRouter = express.Router();

campRouter.use(bodyParser.json());

campRouter.route('/')
.get(function (req, res, next) {
    camps.find({}, function (err, camp) {
        if (err) throw err;
        res.json(camp);
    });
})
.post(function (req, res, next) {
    camps.create(req.body, function (err, camp) {
        if (err) next(err);
        console.log('camp created!');
        var id = camp._id;
        res.json({id});
    });
})
.delete(function (req, res, next) {
    camps.remove(req.query, function (err, resp) {
        if (err) next(err);
        res.json(resp);
    });
});
campRouter.route('/sign-s3')
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
campRouter.route('/:campId')
.get(function (req, res, next) {
    camps.findById(req.params.campId,function (err, camp) {
        if (err) next(err);
        res.json(camp);
        });
})


.put(function (req, res, next) {
    console.log(req.body);
    let influencers =  req.body.influencerId;
    camps.findByIdAndUpdate(req.params.campId, {
        $push: {
            influencers: influencers
        }
    }, {
        new: true
    }, function (err, camp) {
        if (err) throw(err);
        res.json(camp);
    });
})

.delete(function (req, res, next) {
        camps.findByIdAndRemove(req.params.campId, function (err, resp) {
        if (err) next(err);
        const s3 = new aws.S3({signatureVersion: 'v4'});
        let key = resp.image.substr(resp.image.lastIndexOf('/') + 1)+'.jpg';
        var params = {Bucket: S3_BUCKET, Key: key};  
        s3.deleteObject(params, function(err, data) {
            res.json(resp);
        });
    });
});
module.exports=campRouter;