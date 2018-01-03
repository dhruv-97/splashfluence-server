var express = require('express');
var async = require('async');
var passport = require('passport');
var bodyParser = require('body-parser');
var User = require('../models/user'),
TempUser = require('../models/tempUser'),
mongoose = require('mongoose'),
nev = require('email-verification')(mongoose);
var Brand = require('../models/brand');
var Influencer = require('../models/influencer');
var Verify    = require('./verify');
var nodemailer = require('nodemailer');
var crypto = require('crypto');
nev.configure({
  verificationURL: 'http://splashfluence.com/users/email/${URL}',
  persistentUserModel: User,
  tempUserModel: TempUser,
  tempUserCollection: 'splash_tempusers',
  transportOptions: {
      service: 'Gmail',
      auth: {
          user: 'splashfluence@gmail.com',
          pass: 'lvksleoskqdptqbm'
      }
  },
  verifyMailOptions: {
      from: 'SplashFluence <splashfluence@gmail.com>',
      subject: 'Please verify account',
      html: 'Click the following link to verify your account:</p><p>${URL}</p>',
      text: 'Please verify your account by clicking the following link: ${URL}'
  }
}, function(error, options){
});

var myHasher = function(password, tempUserData, insertTempUser, callback) {
  var hash = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  return insertTempUser(hash, tempUserData, callback);
};

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
router.get('/redirect',Verify.verifyOrdinaryUser, function(req, res, next) {
  res.send('Authenticated');
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
      var newUser= User(req.body);
      nev.createTempUser(newUser, function(err, existingPersistentUser, newTempUser) {
        // some sort of error
        if (err)
          return res.status(500).json({status: 'Registration Unsuccessful!'});  
    
        // user already exists in persistent collection...
        if (existingPersistentUser)
          return res.status(409).json({status: 'User already exists!'});    
    
        // a new user
        if (newTempUser) {
            var URL = newTempUser[nev.options.URLFieldName];
            nev.sendVerificationEmail(req.body.email, URL, function(err, info) {
                if (err)
                  return res.status(419).json({status: 'Could not send verification email!'}); 
    
                return res.status(200).json({status: 'Registration Successful!'});
            });
    
        // user already exists in temporary collection...
        } else {
            return res.status(429).json({status: 'Registration Unsuccessful!'});
        }
    });
    })
    .catch(function(err){
      res.status(500).json({staus: "This user already exists"});
    });
    
});
router.get('/email/:url', function(req, res, next) {
  let url  = req.params.url;
  nev.confirmTempUser(url, function(err, user) {
    if (err)
        throw(err);

    // user was found!
    if (user) {
        // optional
        nev.sendConfirmationEmail(user['email_field_name'], function(err, info) {
          res.send("Email was verified. You can now login");    
        });
    }

    // user's data probably expired...
    else
      res.send("Please signup again");
  });
});
router.post('/login', function(req, res, next) {
  User.findOne({username:req.body.username},function(err,user){
    if(user==null)
      res.status(500).json({status:"Username doesnt exist"});
    if(user.password == req.body.password){
      var token = Verify.getToken(user);
      res.status(200).json({
        status: 'Login successful!',
        success: true,
        token: token,
        username: user.username,
        brand: user.brand,
        brandRef: user.brandRef,
        influencerRef: user.influencerRef
      });
    }
    else
      res.status(500).json({status:"Incorrect password"});
  })
});
router.post('/update', function(req, res, next) {
  User.findOneAndUpdate({username:req.body.username},
    req.body,function(err,user){
      if(err) throw(err);
      res.json(user);
  })
});

router.post('/send', function(req,res,next){
  var smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'Gmail',
    auth: {
      user: 'splashfluence@gmail.com',
      pass: 'lvksleoskqdptqbm'
    }
  });
  var mailOptions = {
    to: 'splashfluence@gmail.com',
    from: 'splashfluence@gmail.com',
    subject: 'Splashfluence Password Reset',
    text: req.body.name + 'contacted SplashFluence with the following message:-\n' + req.body.message
    + '\nHis email is:-' +req.body.email
  };
  smtpTransport.sendMail(mailOptions, function(err) {
    res.send('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
  });  
});
router.post('/contact', function(req,res,next){
  var smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'Gmail',
    auth: {
      user: 'splashfluence@gmail.com',
      pass: 'lvksleoskqdptqbm'
    }
  });
  var mailOptions = {
    to: 'splashfluence@gmail.com',
    from: 'splashfluence@gmail.com',
    subject: 'Splashfluence Influencer Inquiry',
    text: req.body.name + 'contacted SplashFluence with the following message:-\n' + req.body.message
    + '\nHis email is:-' +req.body.email
  };
  smtpTransport.sendMail(mailOptions, function(err) {
    res.status(200).json({success:true});
  });  
});
router.post('/resetpass/:token', function(req,res,next){
  User.findOneAndUpdate({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } },
    {password:req.body.password},function(err,user){
      if (!user) {
        res.status(500).json({message: 'User does not exist'});
      }
      if(err) throw(err);
      res.status(200).json({successful:true});
  });
});
router.post('/forgot', function(req,res,next){
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      User.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
          req.flash('error', 'No account with that email address exists.');
          return res.redirect('http://localhost:4200/brandlogin');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
      var smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'Gmail',
        auth: {
          user: 'splashfluence@gmail.com',
          pass: 'lvksleoskqdptqbm'
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'splashfluence@gmail.com',
        subject: 'SplashFluence Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://splashfluence.com/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        res.status(200).json({success:"Successful"});
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) return next(err);
    res.redirect('http://localhost:4200/brandlogin');
  })
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