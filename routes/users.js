var express = require('express');

var passport = require('passport');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('../models/user');
var Brand = require('../models/brand');
var Influencer = require('../models/influencer');
var Verify    = require('./verify');

var router = express.Router();
router.use(bodyParser.json());

/* GET users listing. 
router.get('/', Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next) {
  if(err) {
  	return res.status(403).json({message: 'You are not authorized to perform this operation'});
  }
  else{
  	Users.find({}, function (err, users) {
        if (err) throw err;
        res.json(users);
    });
  }

}); */
router.get('/', function(req, res, next) {
  User.find({})
  .populate('influencerRef')
  .populate('brandRef')
  .exec(function (err, users) {
    if (err) next(err);
    res.json(users);
  })
});


router.post('/register', function(req, res) {
  console.log(req.body);
  let promise = new Promise(function(resolve,reject){
    if(req.body.brand==true){
      Brand.create({brand_name:req.body.brand_name, brand_url:req.body.brand_name}, function(err, brand){
        if(err) reject(err);
        else{
          console.log("Brand created");
          resolve(brand);
        }
      })      
    }
    else {
      Influencer.create({facebook: req.body.username, twitter: req.body.twitter, instagram: req.body.instagram,
      youtube:req.body.youtube, blog: req.body.blog, category: req.body.category,
      location: req.body.location}, function(err, influencer){
        if(err) reject(err);
        else{
          console.log("Influencer created");
          resolve(influencer);
        }  
      })
    }
  })
    promise.then(function(result){
      if(req.body.brand == true)
        req.body.brandRef = result._id;
      else
        req.body.influencerRef = result._id;
      User.register(new User({ username : req.body.username, phone: req.body.phone,
      email: req.body.email, brand: req.body.brand,
      brandRef: req.body.brandRef, influencerRef: req.body.influencerRef}),
        req.body.password, function(err, user) {
        if (err) {
            return res.status(500).json({err: err});
        }
                if(req.body.firstname) {
            user.firstname = req.body.firstname;
        }
        if(req.body.lastname) {
            user.lastname = req.body.lastname;
        }
                user.save(function(err,user) {
            passport.authenticate('local')(req, res, function () {
                return res.status(200).json({status: 'Registration Successful!'});
            });
        });
    });
    })
    .catch(function(err){
      console.log(err);
    });
    
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
      //console.log(user);  
      var token = Verify.getToken(user);
              res.status(200).json({
        status: 'Login successful!',
        success: true,
        token: token,
        username: user.username,
        brand: user.brand
      });
    });
  })(req,res,next);
});

router.get('/logout', function(req, res) {
    req.logout();
  res.status(200).json({
    status: 'Bye!'
  });
});
router.get('/facebook', passport.authenticate('facebook'),
  function(req, res){});

router.get('/facebook/callback', function(req,res,next){
  passport.authenticate('facebook', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
              var token = Verify.getToken({"username":user.username, "_id":user._id, "admin":user.admin});
              res.status(200).json({
        status: 'Login successful!',
        success: true,
        token: token
      });
    });
  })(req,res,next);
});

module.exports = router;