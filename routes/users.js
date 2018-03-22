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
var smtpTransport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  service: 'Gmail',
  auth: {
    user: 'splashfluence@gmail.com',
    pass: 'lvksleoskqdptqbm'
  }
});
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
router.post('/new', function(req,res) {
  var mailOptions = {
    to: 'akshaykhatter97@gmail.com',
    from: 'splashfluence@gmail.com',
    subject: 'Invitation to join SplashFluence',
    html: `<!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
        <!-- NAME: MEMBER WELCOME -->
        <!--[if gte mso 15]>
        <xml>
          <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>*|MC:SUBJECT|*</title>
            
        <style type="text/css">
        p{
          margin:10px 0;
          padding:0;
        }
        table{
          border-collapse:collapse;
        }
        h1,h2,h3,h4,h5,h6{
          display:block;
          margin:0;
          padding:0;
        }
        img,a img{
          border:0;
          height:auto;
          outline:none;
          text-decoration:none;
        }
        body,#bodyTable,#bodyCell{
          height:100%;
          margin:0;
          padding:0;
          width:100%;
        }
        .mcnPreviewText{
          display:none !important;
        }
        #outlook a{
          padding:0;
        }
        img{
          -ms-interpolation-mode:bicubic;
        }
        table{
          mso-table-lspace:0pt;
          mso-table-rspace:0pt;
        }
        .ReadMsgBody{
          width:100%;
        }
        .ExternalClass{
          width:100%;
        }
        p,a,li,td,blockquote{
          mso-line-height-rule:exactly;
        }
        a[href^=tel],a[href^=sms]{
          color:inherit;
          cursor:default;
          text-decoration:none;
        }
        p,a,li,td,body,table,blockquote{
          -ms-text-size-adjust:100%;
          -webkit-text-size-adjust:100%;
        }
        .ExternalClass,.ExternalClass p,.ExternalClass td,.ExternalClass div,.ExternalClass span,.ExternalClass font{
          line-height:100%;
        }
        a[x-apple-data-detectors]{
          color:inherit !important;
          text-decoration:none !important;
          font-size:inherit !important;
          font-family:inherit !important;
          font-weight:inherit !important;
          line-height:inherit !important;
        }
        .templateContainer{
          max-width:600px !important;
        }
        a.mcnButton{
          display:block;
        }
        .mcnImage{
          vertical-align:bottom;
        }
        .mcnTextContent{
          word-break:break-word;
        }
        .mcnTextContent img{
          height:auto !important;
        }
        .mcnDividerBlock{
          table-layout:fixed !important;
        }
      /*
      @tab Page
      @section Background Style
      @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
      */
        body,#bodyTable{
          /*@editable*/background-color:#1F2934;
        }
      /*
      @tab Page
      @section Background Style
      @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
      */
        #bodyCell{
          /*@editable*/border-top:0;
        }
      /*
      @tab Page
      @section Heading 1
      @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
      @style heading 1
      */
        h1{
          /*@editable*/color:#ffffff;
          /*@editable*/font-family:Tahoma, Verdana, Segoe, sans-serif;
          /*@editable*/font-size:36px;
          /*@editable*/font-style:normal;
          /*@editable*/font-weight:bold;
          /*@editable*/line-height:125%;
          /*@editable*/letter-spacing:normal;
          /*@editable*/text-align:left;
        }
      /*
      @tab Page
      @section Heading 2
      @tip Set the styling for all second-level headings in your emails.
      @style heading 2
      */
        h2{
          /*@editable*/color:#202020;
          /*@editable*/font-family:Helvetica;
          /*@editable*/font-size:24px;
          /*@editable*/font-style:normal;
          /*@editable*/font-weight:bold;
          /*@editable*/line-height:150%;
          /*@editable*/letter-spacing:normal;
          /*@editable*/text-align:center;
        }
      /*
      @tab Page
      @section Heading 3
      @tip Set the styling for all third-level headings in your emails.
      @style heading 3
      */
        h3{
          /*@editable*/color:#989898;
          /*@editable*/font-family:Helvetica;
          /*@editable*/font-size:24px;
          /*@editable*/font-style:normal;
          /*@editable*/font-weight:bold;
          /*@editable*/line-height:150%;
          /*@editable*/letter-spacing:normal;
          /*@editable*/text-align:center;
        }
      /*
      @tab Page
      @section Heading 4
      @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
      @style heading 4
      */
        h4{
          /*@editable*/color:#202020;
          /*@editable*/font-family:Helvetica;
          /*@editable*/font-size:18px;
          /*@editable*/font-style:normal;
          /*@editable*/font-weight:bold;
          /*@editable*/line-height:200%;
          /*@editable*/letter-spacing:normal;
          /*@editable*/text-align:center;
        }
      /*
      @tab Preheader
      @section Preheader Style
      @tip Set the background color and borders for your email's preheader area.
      */
        #templatePreheader{
          /*@editable*/background-color:#ffffff;
          /*@editable*/background-image:none;
          /*@editable*/background-repeat:no-repeat;
          /*@editable*/background-position:center;
          /*@editable*/background-size:cover;
          /*@editable*/border-top:0;
          /*@editable*/border-bottom:0;
          /*@editable*/padding-top:9px;
          /*@editable*/padding-bottom:9px;
        }
      /*
      @tab Preheader
      @section Preheader Text
      @tip Set the styling for your email's preheader text. Choose a size and color that is easy to read.
      */
        #templatePreheader .mcnTextContent,#templatePreheader .mcnTextContent p{
          /*@editable*/color:#656565;
          /*@editable*/font-family:Helvetica;
          /*@editable*/font-size:12px;
          /*@editable*/line-height:150%;
          /*@editable*/text-align:left;
        }
      /*
      @tab Preheader
      @section Preheader Link
      @tip Set the styling for your email's preheader links. Choose a color that helps them stand out from your text.
      */
        #templatePreheader .mcnTextContent a,#templatePreheader .mcnTextContent p a{
          /*@editable*/color:#656565;
          /*@editable*/font-weight:normal;
          /*@editable*/text-decoration:underline;
        }
      /*
      @tab Header
      @section Header Style
      @tip Set the background color and borders for your email's header area.
      */
        #templateHeader{
          /*@editable*/background-color:#dff0f4;
          /*@editable*/background-image:url("https://gallery.mailchimp.com/57691c97ff87e2f7464814951/images/764aabb5-4ee4-4348-b1fd-3084dcd16fbd.jpg");
          /*@editable*/background-repeat:no-repeat;
          /*@editable*/background-position:center;
          /*@editable*/background-size:cover;
          /*@editable*/border-top:0;
          /*@editable*/border-bottom:0;
          /*@editable*/padding-top:140px;
          /*@editable*/padding-bottom:80px;
        }
      /*
      @tab Header
      @section Header Text
      @tip Set the styling for your email's header text. Choose a size and color that is easy to read.
      */
        #templateHeader .mcnTextContent,#templateHeader .mcnTextContent p{
          /*@editable*/color:#4caad8;
          /*@editable*/font-family:Tahoma, Verdana, Segoe, sans-serif;
          /*@editable*/font-size:18px;
          /*@editable*/line-height:125%;
          /*@editable*/text-align:center;
        }
      /*
      @tab Header
      @section Header Link
      @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
      */
        #templateHeader .mcnTextContent a,#templateHeader .mcnTextContent p a{
          /*@editable*/color:#ffffff;
          /*@editable*/font-weight:bold;
          /*@editable*/text-decoration:none;
        }
      /*
      @tab Body
      @section Body Style
      @tip Set the background color and borders for your email's body area.
      */
        #templateBody{
          /*@editable*/background-color:#ffffff;
          /*@editable*/background-image:none;
          /*@editable*/background-repeat:no-repeat;
          /*@editable*/background-position:center;
          /*@editable*/background-size:cover;
          /*@editable*/border-top:0;
          /*@editable*/border-bottom:0;
          /*@editable*/padding-top:80px;
          /*@editable*/padding-bottom:80px;
        }
      /*
      @tab Body
      @section Body Text
      @tip Set the styling for your email's body text. Choose a size and color that is easy to read.
      */
        #templateBody .mcnTextContent,#templateBody .mcnTextContent p{
          /*@editable*/color:#666666;
          /*@editable*/font-family:Georgia;
          /*@editable*/font-size:16px;
          /*@editable*/line-height:150%;
          /*@editable*/text-align:center;
        }
      /*
      @tab Body
      @section Body Link
      @tip Set the styling for your email's body links. Choose a color that helps them stand out from your text.
      */
        #templateBody .mcnTextContent a,#templateBody .mcnTextContent p a{
          /*@editable*/color:#999999;
          /*@editable*/font-weight:normal;
          /*@editable*/text-decoration:underline;
        }
      /*
      @tab Columns
      @section Column Style
      @tip Set the background color and borders for your email's columns.
      */
        #templateColumns{
          /*@editable*/background-color:#6d7d81;
          /*@editable*/background-image:url("https://gallery.mailchimp.com/57691c97ff87e2f7464814951/images/4135924b-299c-4220-b9b3-38884be51728.jpg");
          /*@editable*/background-repeat:no-repeat;
          /*@editable*/background-position:center;
          /*@editable*/background-size:cover;
          /*@editable*/border-top:0;
          /*@editable*/border-bottom:0;
          /*@editable*/padding-top:220px;
          /*@editable*/padding-bottom:50px;
        }
      /*
      @tab Columns
      @section Column Text
      @tip Set the styling for your email's column text. Choose a size and color that is easy to read.
      */
        #templateColumns .columnContainer .mcnTextContent,#templateColumns .columnContainer .mcnTextContent p{
          /*@editable*/color:#202020;
          /*@editable*/font-family:Helvetica;
          /*@editable*/font-size:16px;
          /*@editable*/line-height:200%;
          /*@editable*/text-align:center;
        }
      /*
      @tab Columns
      @section Column Link
      @tip Set the styling for your email's column links. Choose a color that helps them stand out from your text.
      */
        #templateColumns .columnContainer .mcnTextContent a,#templateColumns .columnContainer .mcnTextContent p a{
          /*@editable*/color:#202020;
          /*@editable*/font-weight:normal;
          /*@editable*/text-decoration:underline;
        }
      /*
      @tab Footer
      @section Footer Style
      @tip Set the background color and borders for your email's footer area.
      */
        #templateFooter{
          /*@editable*/background-color:#1F2934;
          /*@editable*/background-image:none;
          /*@editable*/background-repeat:no-repeat;
          /*@editable*/background-position:center;
          /*@editable*/background-size:cover;
          /*@editable*/border-top:0;
          /*@editable*/border-bottom:0;
          /*@editable*/padding-top:60px;
          /*@editable*/padding-bottom:60px;
        }
      /*
      @tab Footer
      @section Footer Text
      @tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
      */
        #templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
          /*@editable*/color:#FFFFFF;
          /*@editable*/font-family:Helvetica;
          /*@editable*/font-size:12px;
          /*@editable*/line-height:150%;
          /*@editable*/text-align:center;
        }
      /*
      @tab Footer
      @section Footer Link
      @tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
      */
        #templateFooter .mcnTextContent a,#templateFooter .mcnTextContent p a{
          /*@editable*/color:#FFFFFF;
          /*@editable*/font-weight:normal;
          /*@editable*/text-decoration:underline;
        }
      @media only screen and (min-width:768px){
        .templateContainer{
          width:600px !important;
        }
    
    }	@media only screen and (max-width: 480px){
        body,table,td,p,a,li,blockquote{
          -webkit-text-size-adjust:none !important;
        }
    
    }	@media only screen and (max-width: 480px){
        body{
          width:100% !important;
          min-width:100% !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .columnWrapper{
          max-width:100% !important;
          width:100% !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnImage{
          width:100% !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnCartContainer,.mcnCaptionTopContent,.mcnRecContentContainer,.mcnCaptionBottomContent,.mcnTextContentContainer,.mcnBoxedTextContentContainer,.mcnImageGroupContentContainer,.mcnCaptionLeftTextContentContainer,.mcnCaptionRightTextContentContainer,.mcnCaptionLeftImageContentContainer,.mcnCaptionRightImageContentContainer,.mcnImageCardLeftTextContentContainer,.mcnImageCardRightTextContentContainer,.mcnImageCardLeftImageContentContainer,.mcnImageCardRightImageContentContainer{
          max-width:100% !important;
          width:100% !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnBoxedTextContentContainer{
          min-width:100% !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnImageGroupContent{
          padding:9px !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnCaptionLeftContentOuter .mcnTextContent,.mcnCaptionRightContentOuter .mcnTextContent{
          padding-top:9px !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnImageCardTopImageContent,.mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,.mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent{
          padding-top:18px !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnImageCardBottomImageContent{
          padding-bottom:9px !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnImageGroupBlockInner{
          padding-top:0 !important;
          padding-bottom:0 !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnImageGroupBlockOuter{
          padding-top:9px !important;
          padding-bottom:9px !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnTextContent,.mcnBoxedTextContentColumn{
          padding-right:18px !important;
          padding-left:18px !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnImageCardLeftImageContent,.mcnImageCardRightImageContent{
          padding-right:18px !important;
          padding-bottom:0 !important;
          padding-left:18px !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcpreview-image-uploader{
          display:none !important;
          width:100% !important;
        }
    
    }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Heading 1
      @tip Make the first-level headings larger in size for better readability on small screens.
      */
        h1{
          /*@editable*/font-size:22px !important;
          /*@editable*/line-height:125% !important;
        }
    
    }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Heading 2
      @tip Make the second-level headings larger in size for better readability on small screens.
      */
        h2{
          /*@editable*/font-size:20px !important;
          /*@editable*/line-height:125% !important;
        }
    
    }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Heading 3
      @tip Make the third-level headings larger in size for better readability on small screens.
      */
        h3{
          /*@editable*/font-size:18px !important;
          /*@editable*/line-height:125% !important;
        }
    
    }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Heading 4
      @tip Make the fourth-level headings larger in size for better readability on small screens.
      */
        h4{
          /*@editable*/font-size:16px !important;
          /*@editable*/line-height:150% !important;
        }
    
    }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Boxed Text
      @tip Make the boxed text larger in size for better readability on small screens. We recommend a font size of at least 16px.
      */
        .mcnBoxedTextContentContainer .mcnTextContent,.mcnBoxedTextContentContainer .mcnTextContent p{
          /*@editable*/font-size:14px !important;
          /*@editable*/line-height:150% !important;
        }
    
    }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Preheader Visibility
      @tip Set the visibility of the email's preheader on small screens. You can hide it to save space.
      */
        #templatePreheader{
          /*@editable*/display:block !important;
        }
    
    }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Preheader Text
      @tip Make the preheader text larger in size for better readability on small screens.
      */
        #templatePreheader .mcnTextContent,#templatePreheader .mcnTextContent p{
          /*@editable*/font-size:14px !important;
          /*@editable*/line-height:150% !important;
        }
    
    }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Header Text
      @tip Make the header text larger in size for better readability on small screens.
      */
        #templateHeader .mcnTextContent,#templateHeader .mcnTextContent p{
          /*@editable*/font-size:16px !important;
          /*@editable*/line-height:150% !important;
        }
    
    }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Body Text
      @tip Make the body text larger in size for better readability on small screens. We recommend a font size of at least 16px.
      */
        #templateBody .mcnTextContent,#templateBody .mcnTextContent p{
          /*@editable*/font-size:16px !important;
          /*@editable*/line-height:150% !important;
        }
    
    }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Column Text
      @tip Make the column text larger in size for better readability on small screens. We recommend a font size of at least 16px.
      */
        #templateColumns .columnContainer .mcnTextContent,#templateColumns .columnContainer .mcnTextContent p{
          /*@editable*/font-size:16px !important;
          /*@editable*/line-height:150% !important;
        }
    
    }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Footer Text
      @tip Make the footer content text larger in size for better readability on small screens.
      */
        #templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
          /*@editable*/font-size:14px !important;
          /*@editable*/line-height:150% !important;
        }
    
    }</style></head>
        <body>
            <!--*|IF:MC_PREVIEW_TEXT|*-->
            <!--[if !gte mso 9]><!----><span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">*|MC_PREVIEW_TEXT|*</span><!--<![endif]-->
            <!--*|END:IF|*-->
            <center>
                <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
                    <tr>
                        <td align="center" valign="top" id="bodyCell">
                            <!-- BEGIN TEMPLATE // -->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                    <td align="center" valign="top" id="templatePreheader">
                      <!--[if (gte mso 9)|(IE)]>
                      <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                      <tr>
                      <td align="center" valign="top" width="600" style="width:600px;">
                      <![endif]-->
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                        <tr>
                                          <td valign="top" class="preheaderContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width:100%;">
        <tbody class="mcnImageBlockOuter">
                <tr>
                    <td valign="top" style="padding:9px" class="mcnImageBlockInner">
                        <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">
                            <tbody><tr>
                                <td class="mcnImageContent" valign="top" style="padding-right: 9px; padding-left: 9px; padding-top: 0; padding-bottom: 0; text-align:center;">
                                    
                                        <a href="http://splashfluence.com/" title="" class="" target="_blank">
                                            <img align="center" alt="" src="https://gallery.mailchimp.com/57691c97ff87e2f7464814951/images/019fbd88-7940-41c0-aca2-63a19d2b6d61.png" width="234" style="max-width:468px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                        </a>
                                    
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
        </tbody>
    </table></td>
                        </tr>
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                      </td>
                      </tr>
                      </table>
                      <![endif]-->
                    </td>
                                </tr>
                  <tr>
                    <td align="center" valign="top" id="templateHeader">
                      <!--[if (gte mso 9)|(IE)]>
                      <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                      <tr>
                      <td align="center" valign="top" width="600" style="width:600px;">
                      <![endif]-->
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                        <tr>
                                          <td valign="top" class="headerContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
        <tbody class="mcnTextBlockOuter">
            <tr>
                <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                    <!--[if mso]>
            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
            <tr>
            <![endif]-->
              
            <!--[if mso]>
            <td valign="top" width="600" style="width:600px;">
            <![endif]-->
                    <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                        <tbody><tr>
                            
                            <td valign="top" class="mcnTextContent" style="padding: 0px 18px 9px;color: #4CAAD8;font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif;font-style: normal;font-weight: bold;">
                            
                                <h1 style="text-align: center;"><strong><span style="font-size:36px"><span style="font-family:tahoma,verdana,segoe,sans-serif"><a href="http://splashfluence.com/"><span style="color:#FFFFFF">SPLASHFLUENCE</span></a></span></span></strong><a href="http://splashfluence.com/"><strong><span style="font-size:36px"><span style="font-family:tahoma,verdana,segoe,sans-serif"><span style="color:#FFFFFF"> </span></span></span><br>
    <span style="color:#FFFFFF"><span style="font-size:20px">THE #1 INFLUENCER MARKETING PLATFORM</span></span></strong></a></h1>
    
                            </td>
                        </tr>
                    </tbody></table>
            <!--[if mso]>
            </td>
            <![endif]-->
                    
            <!--[if mso]>
            </tr>
            </table>
            <![endif]-->
                </td>
            </tr>
        </tbody>
    </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
        <tbody class="mcnTextBlockOuter">
            <tr>
                <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                    <!--[if mso]>
            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
            <tr>
            <![endif]-->
              
            <!--[if mso]>
            <td valign="top" width="600" style="width:600px;">
            <![endif]-->
                    <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                        <tbody><tr>
                            
                            <td valign="top" class="mcnTextContent" style="padding: 0px 18px 9px;color: #FFFFFF;font-style: normal;font-weight: bold;text-align: center;">
                            
                                <p align="center" style="color: #FFFFFF;font-style: normal;font-weight: bold;text-align: center;"><span style="color:#FFFFFF">What is SplashFluence?</span></p>
    
    <p style="color: #FFFFFF;font-style: normal;font-weight: bold;text-align: center;"><span style="color:#FFFFFF">The perfect platform for brands and digital media influencers to connect and produce the most awesome campaigns!</span></p>
    
                            </td>
                        </tr>
                    </tbody></table>
            <!--[if mso]>
            </td>
            <![endif]-->
                    
            <!--[if mso]>
            </tr>
            </table>
            <![endif]-->
                </td>
            </tr>
        </tbody>
    </table></td>
                        </tr>
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                      </td>
                      </tr>
                      </table>
                      <![endif]-->
                    </td>
                                </tr>
                  <tr>
                    <td align="center" valign="top" id="templateBody">
                      <!--[if (gte mso 9)|(IE)]>
                      <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                      <tr>
                      <td align="center" valign="top" width="600" style="width:600px;">
                      <![endif]-->
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                        <tr>
                                          <td valign="top" class="bodyContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnButtonBlock" style="min-width:100%;">
        <tbody class="mcnButtonBlockOuter">
            <tr>
                <td style="padding-top:0; padding-right:18px; padding-bottom:18px; padding-left:18px;" valign="top" align="center" class="mcnButtonBlockInner">
                    <table border="0" cellpadding="0" cellspacing="0" class="mcnButtonContentContainer" style="border-collapse: separate !important;border-radius: 3px;background-color: #2BAADF;">
                        <tbody>
                            <tr>
                                <td align="center" valign="middle" class="mcnButtonContent" style="font-family: Arial; font-size: 16px; padding: 15px;">
                                    <a class="mcnButton " title="Click Here To Know More &amp; SignUp" href="http://splashfluence.com/" target="_blank" style="font-weight: bold;letter-spacing: normal;line-height: 100%;text-align: center;text-decoration: none;color: #FFFFFF;">Click Here To Know More &amp; SignUp</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
        <tbody class="mcnTextBlockOuter">
            <tr>
                <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                    <!--[if mso]>
            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
            <tr>
            <![endif]-->
              
            <!--[if mso]>
            <td valign="top" width="600" style="width:600px;">
            <![endif]-->
                    <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                        <tbody><tr>
                            
                            <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                            
                                <h2>Follow Your Passion, Let Your Content Do The Talking.</h2>
    
    <p>We strategize creative opportunities for our influencers to become advocates with brands they love. Joining SplashFluence puts you in front of marketers from top brands that are searching to connect with content creators like you. SplashFluence is a premium platform for creators to find sponsorship opportunities and earn money from creating and distributing great content.</p>
    
                            </td>
                        </tr>
                    </tbody></table>
            <!--[if mso]>
            </td>
            <![endif]-->
                    
            <!--[if mso]>
            </tr>
            </table>
            <![endif]-->
                </td>
            </tr>
        </tbody>
    </table></td>
                        </tr>
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                      </td>
                      </tr>
                      </table>
                      <![endif]-->
                    </td>
                                </tr>
                  <tr>
                    <td align="center" valign="top" id="templateColumns">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                                            <tr>
                                                <td valign="top">
                            <!--[if (gte mso 9)|(IE)]>
                            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                            <tr>
                            <td align="center" valign="top" width="200" style="width:200px;">
                            <![endif]-->
                            <table align="left" border="0" cellpadding="0" cellspacing="0" width="200" class="columnWrapper">
                              <tr>
                                <td valign="top" class="columnContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
        <tbody class="mcnTextBlockOuter">
            <tr>
                <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                    <!--[if mso]>
            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
            <tr>
            <![endif]-->
              
            <!--[if mso]>
            <td valign="top" width="200" style="width:200px;">
            <![endif]-->
                    <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                        <tbody><tr>
                            
                            <td valign="top" class="mcnTextContent" style="padding: 0px 18px 9px;color: #FFFFFF;font-style: normal;font-weight: bold;">
                            
                                Explore creative opportunities to become partners and advocates with top brands.
                            </td>
                        </tr>
                    </tbody></table>
            <!--[if mso]>
            </td>
            <![endif]-->
                    
            <!--[if mso]>
            </tr>
            </table>
            <![endif]-->
                </td>
            </tr>
        </tbody>
    </table></td>
                              </tr>
                            </table>
                            <!--[if (gte mso 9)|(IE)]>
                            </td>
                            <td align="center" valign="top" width="200" style="width:200px;">
                            <![endif]-->
                            <table align="left" border="0" cellpadding="0" cellspacing="0" width="200" class="columnWrapper">
                              <tr>
                                <td valign="top" class="columnContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
        <tbody class="mcnTextBlockOuter">
            <tr>
                <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                    <!--[if mso]>
            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
            <tr>
            <![endif]-->
              
            <!--[if mso]>
            <td valign="top" width="200" style="width:200px;">
            <![endif]-->
                    <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                        <tbody><tr>
                            
                            <td valign="top" class="mcnTextContent" style="padding: 0px 18px 9px;color: #FFFFFF;font-style: normal;font-weight: bold;">
                            
                                Accept and manage campaigns, deadlines and compensation right from your account.
                            </td>
                        </tr>
                    </tbody></table>
            <!--[if mso]>
            </td>
            <![endif]-->
                    
            <!--[if mso]>
            </tr>
            </table>
            <![endif]-->
                </td>
            </tr>
        </tbody>
    </table></td>
                              </tr>
                            </table>
                            <!--[if (gte mso 9)|(IE)]>
                            </td>
                            <td align="center" valign="top" width="200" style="width:200px;">
                            <![endif]-->
                            <table align="left" border="0" cellpadding="0" cellspacing="0" width="200" class="columnWrapper">
                              <tr>
                                <td valign="top" class="columnContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
        <tbody class="mcnTextBlockOuter">
            <tr>
                <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                    <!--[if mso]>
            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
            <tr>
            <![endif]-->
              
            <!--[if mso]>
            <td valign="top" width="200" style="width:200px;">
            <![endif]-->
                    <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                        <tbody><tr>
                            
                            <td valign="top" class="mcnTextContent" style="padding: 0px 18px 9px;color: #FFFFFF;font-style: normal;font-weight: bold;">
                            
                                Create organic and authentic content for our brand partners and spread their message .
                            </td>
                        </tr>
                    </tbody></table>
            <!--[if mso]>
            </td>
            <![endif]-->
                    
            <!--[if mso]>
            </tr>
            </table>
            <![endif]-->
                </td>
            </tr>
        </tbody>
    </table></td>
                              </tr>
                            </table>
                            <!--[if (gte mso 9)|(IE)]>
                            </td>
                            </tr>
                            </table>
                            <![endif]-->
                          </td>
                        </tr>
                      </table>
                    </td>
                                </tr>
                                <tr>
                    <td align="center" valign="top" id="templateFooter">
                      <!--[if (gte mso 9)|(IE)]>
                      <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                      <tr>
                      <td align="center" valign="top" width="600" style="width:600px;">
                      <![endif]-->
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                        <tr>
                                          <td valign="top" class="footerContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnBoxedTextBlock" style="min-width:100%;">
        <!--[if gte mso 9]>
      <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%">
      <![endif]-->
      <tbody class="mcnBoxedTextBlockOuter">
            <tr>
                <td valign="top" class="mcnBoxedTextBlockInner">
                    
            <!--[if gte mso 9]>
            <td align="center" valign="top" ">
            <![endif]-->
                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnBoxedTextContentContainer">
                        <tbody><tr>
                            
                            <td style="padding-top:9px; padding-left:18px; padding-bottom:9px; padding-right:18px;">
                            
                                <table border="0" cellspacing="0" class="mcnTextContentContainer" width="100%" style="min-width: 100% !important;background-color: #404040;">
                                    <tbody><tr>
                                        <td valign="top" class="mcnTextContent" style="padding: 18px;color: #FFFFFF;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: center;">
                                            <a href="http://splashfluence.com/" target="_blank">SplashFluence</a> is for brands who embrace social media &amp; who would like to engage directly with their potential customers for&nbsp;<strong>real, authentic &amp; successful affiliations</strong>.&nbsp;<br>
    Our platform is driven by&nbsp;<strong>Strategy, Data Science, Human Intelligence.</strong>&nbsp;<br>
    Introducing technology with the power of&nbsp;<strong>human voice</strong>&nbsp;to maximize your&nbsp;<strong>brand communication</strong>.&nbsp;
    
    <p align="center" style="color: #FFFFFF;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: center;"><span style="font-size:18px">&nbsp;Welcome to our Invitation-Only Influencer Network</span><br>
    We possess a&nbsp;powerful network of hand-picked influencers producing high quality original content for truly engaged audiences.<br>
    <br>
    <span style="font-size:16px">MONETIZE YOUR INFLUENCE</span><br>
    <span style="font-size:17px"><a href="http://splashfluence.com/" target="_blank">Sign Up</a> Early and for Collaborations with Top Brands.</span></p>
    
                                        </td>
                                    </tr>
                                </tbody></table>
                            </td>
                        </tr>
                    </tbody></table>
            <!--[if gte mso 9]>
            </td>
            <![endif]-->
                    
            <!--[if gte mso 9]>
                    </tr>
                    </table>
            <![endif]-->
                </td>
            </tr>
        </tbody>
    </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowBlock" style="min-width:100%;">
        <tbody class="mcnFollowBlockOuter">
            <tr>
                <td align="center" valign="top" style="padding:9px" class="mcnFollowBlockInner">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentContainer" style="min-width:100%;">
        <tbody><tr>
            <td align="center" style="padding-left:9px;padding-right:9px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnFollowContent">
                    <tbody><tr>
                        <td align="center" valign="top" style="padding-top:9px; padding-right:9px; padding-left:9px;">
                            <table align="center" border="0" cellpadding="0" cellspacing="0">
                                <tbody><tr>
                                    <td align="center" valign="top">
                                        <!--[if mso]>
                                        <table align="center" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                        <![endif]-->
                                        
                                            <!--[if mso]>
                                            <td align="center" valign="top">
                                            <![endif]-->
                                            
                                            
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;">
                                                    <tbody><tr>
                                                        <td valign="top" style="padding-right:0; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                <tbody><tr>
                                                                    <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                            <tbody><tr>
                                                                                
                                                                                    <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                        <a href="http://splashfluence.com/" target="_blank"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/light-link-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                                    </td>
                                                                                
                                                                                
                                                                            </tr>
                                                                        </tbody></table>
                                                                    </td>
                                                                </tr>
                                                            </tbody></table>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                            
                                            <!--[if mso]>
                                            </td>
                                            <![endif]-->
                                        
                                        <!--[if mso]>
                                        </tr>
                                        </table>
                                        <![endif]-->
                                    </td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                </tbody></table>
            </td>
        </tr>
    </tbody></table>
    
                </td>
            </tr>
        </tbody>
    </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
        <tbody class="mcnTextBlockOuter">
            <tr>
                <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                    <!--[if mso]>
            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
            <tr>
            <![endif]-->
              
            <!--[if mso]>
            <td valign="top" width="600" style="width:600px;">
            <![endif]-->
                    <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                        <tbody><tr>
                            
                            <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                            
                                <em>Copyright ©&nbsp; SplashFluence<br>
    <a href="http://splashfluence.com/" target="_blank"><img data-file-id="244511" height="137" src="https://gallery.mailchimp.com/57691c97ff87e2f7464814951/images/019fbd88-7940-41c0-aca2-63a19d2b6d61.png" style="border: 0px initial ; width: 200px; height: 137px; margin: 0px;" width="200"></a></em><br>
    Feel Free to Contact Us at <em><a href="mailto:splashfluence@gmaiil.com?subject=Query" target="_blank">SplashFluence</a>.</em><br>
    <br>
    &nbsp;<a href="*|UPDATE_PROFILE|*">u</a>s li<a href="*|UNSUB|*">st</a>.<br>
    <br>
    &nbsp;
                            </td>
                        </tr>
                    </tbody></table>
            <!--[if mso]>
            </td>
            <![endif]-->
                    
            <!--[if mso]>
            </tr>
            </table>
            <![endif]-->
                </td>
            </tr>
        </tbody>
    </table></td>
                        </tr>
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                      </td>
                      </tr>
                      </table>
                      <![endif]-->
                    </td>
                                </tr>
                            </table>
                            <!-- // END TEMPLATE -->
                        </td>
                    </tr>
                </table>
            </center>
        </body>
    </html>
    `
  };
  smtpTransport.sendMail(mailOptions, function(err) {
    if(err) res.status(500).json({success:0})
    res.status(200).json({success:1});
  });
})
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
// route for logging out
router.post('/send', function(req,res,next){
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
router.get('/email/:url', function(req, res, next) {
  let url  = req.params.url;
  nev.confirmTempUser(url, function(err, user) {
    if (err)
        throw(err);

    // user was found!
    if (user) {
        // optional
        nev.sendConfirmationEmail(user['email_field_name'], function(err, info) {
          res.redirect("http://splashfluence.com/brandlogin");    
        });
    }

    // user's data probably expired...
    else
      res.send("Please signup again");
  });
});
module.exports = router;