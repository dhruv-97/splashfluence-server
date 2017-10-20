var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var influencers = require('../models/influencer');
var camps = require('../models/camp');
var Users = require('../models/user');
var shortid = require('shortid');
const aws = require('aws-sdk');
aws.config.update({region: 'ap-south-1'});
const S3_BUCKET = process.env.S3_BUCKET_NAME;
var Verify=require('./verify');
var nodemailer = require('nodemailer');

var influencerRouter = express.Router();

influencerRouter.use(bodyParser.json());

influencerRouter.route('/')
.get(function (req, res, next) {
    influencers.find({})
    .populate('camp')
    .exec(function (err, influencer) {
        if (err) throw err;
        res.json(influencer);
    })

})
.post(function (req, res, next) {
    influencers.create(req.body, function (err, influencer) {
        if (err) next(err);
        console.log('influencer created!');
        var id = influencer._id;
        res.json({id: id});
    });
})
.delete(function (req, res, next) {
    influencers.remove(req.query, function (err, resp) {
        if (err) next(err);
        res.json(resp);
    });
});
influencerRouter.route('/:influencerId')
.get(function (req, res, next) {
    influencers.findById(req.params.influencerId)
    .populate('applied')
    .exec(function (err, influencer) {
        if (err) throw err;
        res.json(influencer);
    })
})


.put(function (req, res, next) {
    console.log(req.body);
    let camp = req.body.campId;
    influencers.findByIdAndUpdate(req.params.influencerId, {
        $push:  {
            applied: camp
        }
    }, {
        new: true
    }, function (err, influencer) {
        if (err) next(err);
        camps.findById(camp,function(err,campaign){
            Users.findOne({influencerRef:influencer._id},function(err,user){
                var smtpTransport = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    service: 'Gmail',
                    auth: {
                      user: 'abhishekmishra6000@gmail.com',
                      pass: '6000mishra'
                    }
                  });
                  console.log(camp.email);
                  var mailOptions = {
                    to: campaign.email,
                    from: 'abhishekmishra6000@gmail.com',
                    subject: 'Congratulations!! A new Influencer has applied',
                    text: user.username + 'has applied for the campaign ' + campaign.name
                    + '\nName:-' +user.username
                    +'\nInstagram-'+influencer.instagram
                    +'\nLocation-'+influencer.location
                    +'\nCategory-'+influencer.category
                    +'\nEmail-'+user.email
                  };
                  smtpTransport.sendMail(mailOptions, function(err) {
                    res.status(200).json({success:true});
                  });
            })
            
        })
    });
})

.delete(function (req, res, next) {
        influencers.findByIdAndRemove(req.params.influencerId, function (err, resp) {
        if (err) next(err);
        const s3 = new aws.S3({signatureVersion: 'v4'});
        let key = resp.image.substr(resp.image.lastIndexOf('/') + 1)+'.jpg';
        var params = {Bucket: S3_BUCKET, Key: key};  
        s3.deleteObject(params, function(err, data) {
            res.json(resp);
        });
    });
});
module.exports=influencerRouter;