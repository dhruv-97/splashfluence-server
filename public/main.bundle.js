webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        $(window).scroll(function () {
            if ($(document).scrollTop() > 50) {
                $("#something").css("background-color", "black"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
            }
            else {
                $("#something").css("background-color", "transparent"); // if not, change it back to transparent
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splash_service__ = __webpack_require__("../../../../../src/app/splash.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__brand_login_brand_login_component__ = __webpack_require__("../../../../../src/app/brand-login/brand-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__brand_reg_brand_reg_component__ = __webpack_require__("../../../../../src/app/brand-reg/brand-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__influencer_reg_influencer_reg_component__ = __webpack_require__("../../../../../src/app/influencer-reg/influencer-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__brand_welcome_brand_welcome_component__ = __webpack_require__("../../../../../src/app/brand-welcome/brand-welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__influencer_welcome_influencer_welcome_component__ = __webpack_require__("../../../../../src/app/influencer-welcome/influencer-welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__camp_camp_component__ = __webpack_require__("../../../../../src/app/camp/camp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__applied_applied_component__ = __webpack_require__("../../../../../src/app/applied/applied.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__forgot_forgot_component__ = __webpack_require__("../../../../../src/app/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__brand_update_brand_update_component__ = __webpack_require__("../../../../../src/app/brand-update/brand-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__inf_update_inf_update_component__ = __webpack_require__("../../../../../src/app/inf-update/inf-update.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: 'brandlogin', component: __WEBPACK_IMPORTED_MODULE_8__brand_login_brand_login_component__["a" /* BrandLoginComponent */] },
    { path: 'infupdate', component: __WEBPACK_IMPORTED_MODULE_17__inf_update_inf_update_component__["a" /* InfUpdateComponent */] },
    { path: 'live', component: __WEBPACK_IMPORTED_MODULE_13__camp_camp_component__["a" /* CampComponent */] },
    { path: 'applied', component: __WEBPACK_IMPORTED_MODULE_14__applied_applied_component__["a" /* AppliedComponent */] },
    { path: 'brandwelcome', component: __WEBPACK_IMPORTED_MODULE_11__brand_welcome_brand_welcome_component__["a" /* BrandWelcomeComponent */] },
    { path: 'influencerwelcome', component: __WEBPACK_IMPORTED_MODULE_12__influencer_welcome_influencer_welcome_component__["a" /* InfluencerWelcomeComponent */] },
    { path: 'brandreg', component: __WEBPACK_IMPORTED_MODULE_9__brand_reg_brand_reg_component__["a" /* BrandRegComponent */] },
    { path: 'infreg', component: __WEBPACK_IMPORTED_MODULE_10__influencer_reg_influencer_reg_component__["a" /* InfluencerRegComponent */] },
    { path: 'reset/:resetToken', component: __WEBPACK_IMPORTED_MODULE_15__forgot_forgot_component__["a" /* ForgotComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__brand_login_brand_login_component__["a" /* BrandLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__brand_reg_brand_reg_component__["a" /* BrandRegComponent */],
            __WEBPACK_IMPORTED_MODULE_10__influencer_reg_influencer_reg_component__["a" /* InfluencerRegComponent */],
            __WEBPACK_IMPORTED_MODULE_11__brand_welcome_brand_welcome_component__["a" /* BrandWelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__influencer_welcome_influencer_welcome_component__["a" /* InfluencerWelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__camp_camp_component__["a" /* CampComponent */],
            __WEBPACK_IMPORTED_MODULE_14__applied_applied_component__["a" /* AppliedComponent */],
            __WEBPACK_IMPORTED_MODULE_15__forgot_forgot_component__["a" /* ForgotComponent */],
            __WEBPACK_IMPORTED_MODULE_16__brand_update_brand_update_component__["a" /* BrandUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_17__inf_update_inf_update_component__["a" /* InfUpdateComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
            ),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__splash_service__["a" /* SplashService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/applied/applied.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/applied/applied.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" style=\"background-color: black;padding: 15px 0\" id=\"something\">\n    <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" data-target=\"#navbarCollapse\" data-toggle=\"collapse\" class=\"navbar-toggle\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" style=\"font-family: 'Bree Serif',Serif;color:white;font-size: 25px;\">SplashFluence</a>\n        </div>\n        <!-- Collection of nav links and other content for toggling -->\n        <div id=\"navbarCollapse\" class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li><a routerLink=\"../live\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Live Campaigns</a></li>\n                <li><a routerLink=\"../influencerwelcome\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Scale Up Your Seo</a></li>\n                <li><a href=\"\" (click)=\"coming()\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Blog</a></li>\n                <li><a routerLink=\"../influencerwelcome\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Contact</a></li>\n                <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Howdy,{{username}}<span>&nbsp;&nbsp;<img src=\"assets/images/bg/a4.png\" style=\"height: 30px;margin-top:-3%;\"></span>&nbsp;&nbsp;<span class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu\">\n                    <li><a routerLink=\"../infupdate\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: red;\">Edit Account</a></li>\n                    <li><a routerLink=\"../applied\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: red;\">Applied Campaign</a></li>\n                    <li><a (click)=\"logout()\" style=\"font-family: 'Bree Serif',serif;font-size: 18px;color: red\">LogOut</a></li>\n                  </ul>\n               </li>\n            </ul>\n        </div>\n    </div>\n  </nav>\n    <!--TOP Navigation Bar Finished //-->\n  <div class=\"container-fluid\" style=\"min-height: 1000px;overflow: hidden;margin-top: 7%;font-family: 'Bree Serif',serif;\">\n    <div class=\"row\">\n      <h1 style=\"text-align: center;color: black;\">Applied Campaigns<hr style=\"width: 30%;\"></h1>\n    </div>\n    <div class=\"row\" *ngFor = \"let camp of camps\" style=\"height:350px; border-bottom: 1px grey solid; margin-bottom:3%;\">\n      <div class= \"col-md-3 col-lg-3 col-sm-12 col-xs-12\">\n        <img [src]=\"camp.imageUrl\" style=\"height: 300px; width:100%\">\n      </div>\n      <div class=\"col-md-9 col-lg-9 col-sm-12 col-xs-12\">\n        <h2>{{camp.name}}</h2>\n        <b>Types of Influencers required: </b>{{camp.audience}}\n        <br><br>\n        <b>Last Date to Apply: </b>{{camp.lastDate}}\n        <br><br>\n        <b>About The Brand: </b>{{camp.message}}\n        </div>\n    </div>\n  </div>\n  \n  \n    <div class=\"container-fluid\" style=\"background-color:#f4f4f4;min-height: 380px;overflow: hidden;\">\n      <div class=\"row\" style=\"margin-top: 3%;margin-bottom: 3%;\">\n        <div class=\"col-md-1 col-lg-1 col-sm-0 col-xs-0\">\n        </div>\n        <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-6\">\n          <h4><a href=\"#About_Us\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">Our Influencers</a></h4>\n          <h4><a routerLink=\"../live\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">Live Campaigns</a></h4>\n          <h4><a routerLink=\"../influencerwelcome\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">Scale Up Your SEO</a></h4>\n          <h4><a (click)=\"coming()\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">Blog</a></h4>\n          <h4><a routerLink=\"../influencerwelcome\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">Contact</a></h4>\n        </div>\n        <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-6 \">\n          <h4><a routerLink=\"infreg\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Influencer SignIn</a></h4>\n          <h4><a routerLink=\"brandreg\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Brand SignIn</a></h4>\n          <h4><a routerLink=\"brandlogin\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Influencer LogIn</a></h4>\n          <h4><a routerLink=\"brandlogin\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Brand LogIn</a></h4>\n        </div>\n        <div class=\"col-md-2 col-lg-2 col-sm-6 col-xs-6 \">\n          <h4><a href=\"#\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Blog</a></h4>\n          <h4><a href=\"#\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Privacy Policy</a></h4>\n        </div>\n        <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-6 text-center\">\n          <h4 style=\"font-size: 25px;color: black;font-family: 'Bree Serif',serif;\">Contact Us<hr style=\"width: 30%;\"></h4>\n          <h4 style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Phone No: 9871370285</h4>\n          <h4 style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">splashfluence@gmail.com</h4>\n        </div>\n      </div>\n      <hr style=\"width: 90%;\">\n         <div class=\"row\" style=\"margin-top: 2%;\">\n             <p style=\"font-family: 'Bree Serif',serif;font-size: 20px;float: left;color: black;margin-top:2%;margin-left:3%;margin-right: 15%;\" class=\"wow fadeInUp\" data-wow-duration=\"2s\">&copy; SplashFluence  2017 All Rights Reserved. Designed by<a href=\"https://www.linkedin.com/in/himanshu-narang-630694130/\"> Himanshu Narang</a> </p>\n            <a href=\"#\" class=\"fa fa-facebook\" style=\"font-size: 25px;background-color: #f4f4f4;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n            <a href=\"#\" class=\"fa fa-twitter\" style=\"font-size: 25px;background-color: #f4f4f4;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n            <a href=\"#\" class=\"fa fa-linkedin\" style=\"font-size: 25px;background-color: #f4f4f4;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n            <a href=\"#\" class=\"fa fa-youtube\" style=\"font-size: 25px;background-color: #f4f4f4;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n            <a href=\"#\" class=\"fa fa-instagram\" style=\"font-size: 25px;background-color: #f4f4f4;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n         </div>\n      </div>"

/***/ }),

/***/ "../../../../../src/app/applied/applied.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splash_service__ = __webpack_require__("../../../../../src/app/splash.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppliedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppliedComponent = (function () {
    function AppliedComponent(service, router) {
        this.service = service;
        this.router = router;
        this.camps = [];
        this.applied = false;
    }
    AppliedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.service.getUsername();
        this.influencer = this.service.getInfluencer();
        this.service.getInfluencerDetails(this.influencer).then(function (res) {
            console.log(res);
            _this.camps = res.applied;
        }, function (err) { return alert("Could not get influencer details"); });
    };
    AppliedComponent.prototype.coming = function () {
        alert("Coming soon!! Please be patient.");
    };
    AppliedComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['../']);
    };
    return AppliedComponent;
}());
AppliedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-applied',
        template: __webpack_require__("../../../../../src/app/applied/applied.component.html"),
        styles: [__webpack_require__("../../../../../src/app/applied/applied.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__splash_service__["a" /* SplashService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__splash_service__["a" /* SplashService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppliedComponent);

var _a, _b;
//# sourceMappingURL=applied.component.js.map

/***/ }),

/***/ "../../../../../src/app/brand-login/brand-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nhtml,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,dl,dt,dd,ol,nav ul,nav li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}\narticle, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section {display: block;}\nol,ul{list-style:none;margin:0px;padding:0px;}\nblockquote,q{quotes:none;}\nblockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}\ntable{border-collapse:collapse;border-spacing:0;}\n/*--start editing from here--*/\na{text-decoration:none;}\n.txt-rt{text-align:right;}/* text align right */\n.txt-lt{text-align:left;}/* text align left */\n.txt-center{text-align:center;}/* text align center */\n.float-rt{float:right;}/* float right */\n.float-lt{float:left;}/* float left */\n.clear{clear:both;}/* clear float */\n.pos-relative{position:relative;}/* Position Relative */\n.pos-absolute{position:absolute;}/* Position Absolute */\n.vertical-base{ vertical-align:baseline;}/* vertical align baseline */\n.vertical-top{  vertical-align:top;}/* vertical align top */\nnav.vertical ul li{ display:block;}/* vertical menu */\nnav.horizontal ul li{   display: inline-block;}/* horizontal menu */\nimg{max-width:100%;}\n/*--end reset--*/\nbody {\n    font-family: 'Open Sans', sans-serif;\n    \n    background-attachment: fixed;\n    background-size: cover;\n}\nh1 {\n    font-size: 3em;\n    text-align: center;\n    color: #fff;\n    font-weight: 100;\n}\n/*-- main --*/\nh2 {\n    font-size: 1.1em;\n    text-align: center;\n    padding: 1.2em;\n    background: #02a299;\n    color: #fff;\n    font-weight: 200;\n    letter-spacing: 10px;\n}\n.main {\n    font-family: 'Open Sans', sans-serif;\n    height: 100vh;\n    background-attachment: fixed;\n    background-size: cover;\n    padding: 3em 0 0;\n}\n.login-form {\n    width: 35%;\n    margin: 3.5em auto;\n    background: rgba(12, 85, 105, 0.51);\n    padding-bottom: 4em;\n}\n.agileits-top {\n    padding: 2em 3em 3em;\n}\n.login-form input[type=\"text\"], .login-form input[type=\"password\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form input[type=\"url\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form select[type=\"text\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 101%;\n    -moz-appearance: none;\n         appearance: none;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form input[type=\"email\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form input[type=\"tel\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n/*-- input-effect --*/\n.styled-input input:focus ~ label, .styled-input input:valid ~ label {\n    font-size: 1.1em;\n    color: #02a299;\n    top: -2em;\n}\n.styled-input select:focus ~ label, .styled-input select:valid ~ label {\n    font-size: 1.1em;\n    color: #02a299;\n    top: -2em;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.styled-input {\n  width:100%;\n  margin: 2em 0 1em;\n  position: relative;\n}\n\n.styled-input label {\n    color: #fff;\n    padding: 0.8em 1em;\n    position: absolute;\n    top: -2em;\n    left: 0;\n    pointer-events: none;\n    font-weight: 400;\n    font-size: 1.1em;\n    display: block;\n    line-height: 1em;\n}\n.styled-input input ~ span {\n  display: block;\n  width: 0;\n  height:2px;\n  background:#fff;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transition: all 0.125s ease; \n}\n\n.styled-input select ~ span {\n  display: block;\n  width: 0;\n  height:2px;\n  background:#fff;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transition: all 0.125s ease; \n}\n\n.styled-input input:focus { outline: 0; }\n\n.styled-input select:focus { outline: 0; -webkit-appearance: none; -moz-appearance: none; appearance: none;}\n\n.styled-input input:focus ~ span {\n     width: 100%;\n    transition: all 0.075s ease;\n      font-family: 'OpenSans-Regular';\n} \n.styled-input select:focus ~ span {\n     width: 100%;\n     -webkit-appearance: none;\n        -moz-appearance: none;\n             appearance: none;\n    transition: all 0.075s ease;\n      font-family: 'OpenSans-Regular';\n} \n/*-- //input-effect --*/\n.login-form p {\n    font-size: 1em;\n    color: #fff;\n    margin: 1em 0 .5em;\n}\n/*-- checkbox --*/\n.wthree-text input[type=\"checkbox\"] {\n    display: none;\n}\n.wthree-text input[type=\"checkbox\"]+label {\n    position: relative;\n    padding-left: 1.8em;\n    border: none;\n    outline: none;\n    font-size: 1em;\n    color: #fff;\n    cursor: pointer;\n    display: block; \n}\n.wthree-text input[type=\"checkbox\"]+label span:first-child {\n    width: 14px;\n    height: 14px;\n    border: 2px solid #fff;\n    position: absolute;\n    left: 0;\n    top: 2px; \n}\n.wthree-text input[type=\"checkbox\"]:checked+label span:first-child:before {\n    content: \"\";\n    \n    position: absolute;\n    left: 2px;\n    top: 2px;\n    font-size: 10px;\n    width: 10px;\n    height: 10px;\n}\n/*-- //checkbox --*/\n.wthree-text {\n    margin-top: 3em;\n}\n.wthree-text ul li{\n    display:inline-block;\n    float: left;\n}\n.wthree-text ul li:nth-child(2) {\n    float: right;\n}\n.wthree-text ul li a{\n    font-size:1em;\n    color: #fff;\n}\n.wthree-text ul li a:hover{\n    color: #02a299;\n}\n.agileits-bottom{\n    position:relative;\n}\n.agileits-bottom:before {\n    content: '';\n    position: absolute;\n    top: -17px;\n    left: -17px;\n    width: 0;\n    height: 0;\n    border-top: 17px solid transparent;\n    border-right: 18px solid #fff;\n    transition:.5s all ease;\n}\n.agileits-bottom:after {\n    content: '';\n    position: absolute;\n    top: -17px;\n    right: -17px;\n    width: 0;\n    height: 0;\n    border-left: 17px solid #fff;\n    border-top: 17px solid transparent;\n    transition:.5s all ease;\n}\n.agileits-bottom input[type=\"submit\"] {\n    font-size: 1.5em;\n    color: #02a299;\n    background: #fff;\n    outline: none;\n    cursor: pointer;\n    padding: 1em 0;\n    -webkit-appearance: none;\n    border: none;\n    width: 106%; \n    margin-left: -0.7em;\n    text-transform: uppercase; \n}\n.agileits-bottom input[type=\"submit\"]:hover {\n    color: #FFF;\n    background: #02a299;\n    transition:.5s all ease;\n}\n.agileits-bottom:hover:before {\n    border-right-color:#02a299;\n}\n.agileits-bottom:hover:after {\n    border-left-color:#02a299;\n}\n/*-- //main --*/\n/*-- copyright --*/\n.copyright {\n    margin: 2em 0;\n    text-align: center;\n}\n.copyright p {\n    font-size: 1em;\n    color: #fff;\n    line-height:1.8em;\n}\n.copyright p a{\n    color: #fff;\n    transition: 0.5s all;\n}\n.copyright p a:hover{\n    color: #000;    \n}\n/*-- //copyright --*/\n/*-- responsive-design --*/\n@media(max-width:1440px){\n.agileits-bottom input[type=\"submit\"] { \n    width: 106.8%; \n}\n}\n@media(max-width:1366px){\n.login-form {\n    width: 37%; \n    margin: 3em auto;\n}\n}\n@media(max-width:1280px){\n.login-form {\n    width: 40%; \n}\n}\n@media(max-width:1080px){\n.main {\n    padding: 2em 0 0;\n}\n.login-form {\n    width: 48%;\n}\nh1 {\n    font-size: 2.8em; \n}\n}\n@media(max-width:1024px){\nh1 {\n    font-size: 2.6em;\n}\n.login-form {\n    width: 50%;\n    margin: 2em auto;\n}\n}\n@media(max-width:991px){\nh1 {\n    font-size: 2.5em;\n}\n.login-form {\n    width: 52%; \n}\n}\n@media(max-width:900px){\n.agileits-top {\n    padding: 1em 3em 3em;\n}\n.login-form { \n    width: 56%;\n    padding-bottom: 3.5em;\n}\n}\n@media(max-width:800px){\n.login-form {\n    width: 63%; \n}\n.agileits-top {\n    padding: 1em 2.5em 2.5em;\n}\n.agileits-bottom input[type=\"submit\"] {\n    font-size: 1.3em; \n    margin-left: -0.8em; \n}\n}\n@media(max-width:768px){\nh1 {\n    font-size: 2.3em;\n}\n.agileits-bottom input[type=\"submit\"] {\n    width: 107%;\n} \n} \n@media (max-width: 736px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 107.5%;\n} \n} \n@media(max-width:667px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 108%;\n    font-size: 1.1em;\n    margin-left: -0.9em;\n}\n} \n@media(max-width:640px){\n.login-form {\n    width: 67%;\n}\n.agileits-bottom input[type=\"submit\"] {\n    width: 108%;\n}\n}\n@media(max-width:600px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 108.7%;\n}\n}\n@media(max-width:480px){\nh1 {\n    font-size: 1.8em;\n}\nh2 {\n    font-size: 1em; \n    padding: 1em; \n    letter-spacing: 7px;\n}\n.agileits-top {\n    padding: 1em 1.5em 1.5em;\n}\n.login-form input[type=\"text\"], .login-form input[type=\"password\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.login-form input[type=\"url\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.login-form input[type=\"email\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.login-form input[type=\"tel\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.styled-input label { \n    padding: 0.6em 1em; \n    font-size: 0.9em; \n}\n.styled-input input:focus ~ label, .styled-input input:valid ~ label {\n    font-size: 1em; \n    top: -1.5em;\n}\n.styled-input select:focus ~ label, .styled-input select:valid ~ label {\n    font-size: 1em; \n    top: -1.5em;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.wthree-text {\n    margin-top: 2em;\n}\n.wthree-text input[type=\"checkbox\"]+label { \n    font-size: 0.9em; \n    padding-left: 1.5em;\n}\n.wthree-text input[type=\"checkbox\"]+label span:first-child {\n    width: 12px;\n    height: 12px; \n}\n.wthree-text ul li a {\n    font-size: 0.9em; \n}\n.agileits-bottom input[type=\"submit\"] {\n    font-size: 1em;\n    margin-left: -0.6em;\n    width: 105.3%;\n    padding: 0.8em 0;\n}\n.login-form { \n    padding-bottom: 3em;\n}\n.login-form {\n    width: 80%;\n}\n.copyright p {\n    font-size: 0.9em; \n}\n.agileits-bottom:before { \n    top: -11px;\n    left: -11px; \n    border-top: 11px solid transparent;\n    border-right: 11px solid #fff; \n}\n.agileits-bottom:after { \n    top: -11px;\n    right: -11px; \n    border-left: 11px solid #fff;\n    border-top: 11px solid transparent; \n}\n.wthree-text input[type=\"checkbox\"]:checked+label span:first-child:before { \n    left: 1px;\n    top: 1px; \n}\n}\n@media(max-width:414px){\n.main {\n    padding: 1.5em 0 0;\n}\n.styled-input { \n    margin: 1.5em 0 1em; \n}\n.copyright p { \n    padding: 0 1em;\n}\n.agileits-bottom:before {\n    top: -10px;\n    left: -10px;\n    border-top: 10px solid transparent;\n    border-right: 10px solid #fff;\n}\n.agileits-bottom:after { \n    top: -10px;\n    right: -10px;\n    border-left: 10px solid #fff;\n    border-top: 10px solid transparent; \n}\n.agileits-bottom input[type=\"submit\"] { \n    width: 106%; \n}\n}\n@media(max-width:384px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 106.8%;\n    font-size: 0.9em;\n    margin-left: -0.7em;\n}\n}\n@media(max-width:375px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 106.5%;\n    margin-left: -0.6em;\n}\nh1 {\n    font-size: 1.6em;\n}\nh2 { \n    letter-spacing: 5px;\n}\n.login-form { \n    margin: 1.5em auto;\n}\n.wthree-text ul li { \n    float: none;\n    display: block;\n}\n.wthree-text ul li:nth-child(2) {\n    float: none;\n    margin-top: 1em;\n}\n.wthree-text {\n    margin-top: 1.5em;\n}\n}\n@media(max-width:320px){\nh2 {\n    letter-spacing: 3px;\n    padding: 0.8em;\n}\n.login-form {\n    width: 85%;\n}\n.agileits-top {\n    padding:0.5em 1em 1.5em;\n}\n.login-form input[type=\"text\"], .login-form input[type=\"password\"] {\n    font-size: 0.85em;\n    padding: 0.6em;\n    width: 88%;\n}\n.login-form input[type=\"url\"] {\n    font-size: 0.85em;\n    padding: 0.6em;\n    width: 88%;\n}\n.styled-input label {\n    padding: 0.6em;\n    font-size: 0.85em;\n}\n.styled-input input:focus ~ label, .styled-input input:valid ~ label {\n    font-size: 0.9em;\n    top: -1em;\n}\n.styled-input select:focus ~ label, .styled-input select:valid ~ label {\n    font-size: 0.9em;\n    top: -1em;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.login-form {\n    padding-bottom: 2em;\n}\n.agileits-bottom input[type=\"submit\"] {\n    width: 107%;\n    margin-left: -0.6em;\n}\n.styled-select {\n   background: url(http://i62.tinypic.com/15xvbd5.png) no-repeat 96% 0;\n   height: 29px;\n   overflow: hidden;\n   width: 240px;\n}\n.slate   { background-color: #ddd; }\n/*-- //responsive-design --*/\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/brand-login/brand-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" style=\"background-image: url('assets/images/bbb.jpg')\"> \n  <h1>LogIn Form</h1>\n  <div class=\"login-form\" style=\"min-height: 300px;overflow: hidden;\"> \n     <h2>LogIn Form</h2> \n     <form action=\" \" method=\"post\">\n        <div class=\"agileits-top\">\n           <div class=\"styled-input\">\n              <input type=\"text\" name=\"USERNAME\" id=\"USERNAME\" required=\"\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"brand.username\">\n              <label style=\"color: white;\">USERNAME</label>\n              <span></span>\n           </div>\n           <div class=\"styled-input\">\n              <input type=\"password\" name=\"PASSWORD\" id=\"PASSWORD\" required=\"\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"brand.password\"> \n              <label style=\"color: white;\">PASSWORD</label>\n              <span></span>\n           </div> \n        </div>\n     <div class=\"agileits-bottom\">\n        <input type=\"submit\" (click)=\"login()\">\n     </div>\n     </form>\n     <a routerLink=\"brandreg\" style=\"color: white;float: left;margin-left: 3%;margin-top:3%;\">Don't Have An Account?<span style=\"color:blue\">Get Started</span></a>\n     <a (click) = \"forgot()\" target=\"_blank\" style=\"color: white;float: right;margin-right: 3%;margin-top: 3%;\">Forgot Password ?</a>\n  </div>   \n</div>"

/***/ }),

/***/ "../../../../../src/app/brand-login/brand-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splash_service__ = __webpack_require__("../../../../../src/app/splash.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrandLoginComponent = (function () {
    function BrandLoginComponent(service, router) {
        this.service = service;
        this.router = router;
        this.brand = { username: '', password: '' };
    }
    BrandLoginComponent.prototype.ngOnInit = function () {
        this.brand.username = this.service.getUsername();
    };
    BrandLoginComponent.prototype.login = function () {
        var _this = this;
        this.service.login(this.brand).then(function (res) {
            _this.service.setUsername(res.username);
            _this.service.setToken(res.token);
            _this.service.setIsBrand(res.brand);
            if (res.brand) {
                _this.service.setBrand(res.brandRef);
                _this.router.navigate(['brandwelcome']);
            }
            else {
                _this.service.setInfluencer(res.influencerRef);
                _this.router.navigate(['influencerwelcome']);
            }
        }, function (err) { return alert('Login details are incorrect'); });
    };
    BrandLoginComponent.prototype.forgot = function () {
        var txt;
        var email = prompt("Please enter your email:", "email");
        if (email == null || email == "") {
            alert("Please enter a valid email address");
        }
        else {
            this.service.forgot({ email: email }).then(function (res) { return alert("An email was sent successfully"); }, function (err) { return alert("This email doesnt exist in our database"); });
        }
    };
    return BrandLoginComponent;
}());
BrandLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-brand-login',
        template: __webpack_require__("../../../../../src/app/brand-login/brand-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/brand-login/brand-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__splash_service__["a" /* SplashService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__splash_service__["a" /* SplashService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], BrandLoginComponent);

var _a, _b;
//# sourceMappingURL=brand-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/brand-reg/brand-reg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nhtml,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,dl,dt,dd,ol,nav ul,nav li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}\narticle, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section {display: block;}\nol,ul{list-style:none;margin:0px;padding:0px;}\nblockquote,q{quotes:none;}\nblockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}\ntable{border-collapse:collapse;border-spacing:0;}\n/*--start editing from here--*/\na{text-decoration:none;}\n.txt-rt{text-align:right;}/* text align right */\n.txt-lt{text-align:left;}/* text align left */\n.txt-center{text-align:center;}/* text align center */\n.float-rt{float:right;}/* float right */\n.float-lt{float:left;}/* float left */\n.clear{clear:both;}/* clear float */\n.pos-relative{position:relative;}/* Position Relative */\n.pos-absolute{position:absolute;}/* Position Absolute */\n.vertical-base{ vertical-align:baseline;}/* vertical align baseline */\n.vertical-top{  vertical-align:top;}/* vertical align top */\nnav.vertical ul li{ display:block;}/* vertical menu */\nnav.horizontal ul li{   display: inline-block;}/* horizontal menu */\nimg{max-width:100%;}\n/*--end reset--*/\nbody {\n    font-family: 'Open Sans', sans-serif;\n    \n    background-attachment: fixed;\n    background-size: cover;\n}\nh1 {\n    font-size: 3em;\n    text-align: center;\n    color: #fff;\n    font-weight: 100;\n}\n/*-- main --*/\nh2 {\n    font-size: 1.1em;\n    text-align: center;\n    padding: 1.2em;\n    background: #02a299;\n    color: #fff;\n    font-weight: 200;\n    letter-spacing: 10px;\n}\n.main {\n    font-family: 'Open Sans', sans-serif;\n    height: 100%;\n    background-attachment: fixed;\n    background-size: cover;\n    padding: 3em 0 0;\n}\n.login-form {\n    width: 35%;\n    margin: 3.5em auto;\n    background: rgba(12, 85, 105, 0.51);\n    padding-bottom: 4em;\n}\n.agileits-top {\n    padding: 2em 3em 3em;\n}\n.login-form input[type=\"text\"], .login-form input[type=\"password\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form input[type=\"url\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form select[type=\"text\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 101%;\n    -moz-appearance: none;\n         appearance: none;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form input[type=\"email\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form input[type=\"tel\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n/*-- input-effect --*/\n.styled-input input:focus ~ label, .styled-input input:valid ~ label {\n    font-size: 1.1em;\n    color: #02a299;\n    top: -2em;\n}\n.styled-input select:focus ~ label, .styled-input select:valid ~ label {\n    font-size: 1.1em;\n    color: #02a299;\n    top: -2em;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.styled-input {\n  width:100%;\n  margin: 2em 0 1em;\n  position: relative;\n}\n\n.styled-input label {\n    color: #fff;\n    padding: 0.8em 1em;\n    position: absolute;\n    top: -2em;\n    left: 0;\n    pointer-events: none;\n    font-weight: 400;\n    font-size: 1.1em;\n    display: block;\n    line-height: 1em;\n}\n.styled-input input ~ span {\n  display: block;\n  width: 0;\n  height:2px;\n  background:#fff;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transition: all 0.125s ease; \n}\n\n.styled-input select ~ span {\n  display: block;\n  width: 0;\n  height:2px;\n  background:#fff;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transition: all 0.125s ease; \n}\n\n.styled-input input:focus { outline: 0; }\n\n.styled-input select:focus { outline: 0; -webkit-appearance: none; -moz-appearance: none; appearance: none;}\n\n.styled-input input:focus ~ span {\n     width: 100%;\n    transition: all 0.075s ease;\n      font-family: 'OpenSans-Regular';\n} \n.styled-input select:focus ~ span {\n     width: 100%;\n     -webkit-appearance: none;\n        -moz-appearance: none;\n             appearance: none;\n    transition: all 0.075s ease;\n      font-family: 'OpenSans-Regular';\n} \n/*-- //input-effect --*/\n.login-form p {\n    font-size: 1em;\n    color: #fff;\n    margin: 1em 0 .5em;\n}\n/*-- checkbox --*/\n.wthree-text input[type=\"checkbox\"] {\n    display: none;\n}\n.wthree-text input[type=\"checkbox\"]+label {\n    position: relative;\n    padding-left: 1.8em;\n    border: none;\n    outline: none;\n    font-size: 1em;\n    color: #fff;\n    cursor: pointer;\n    display: block; \n}\n.wthree-text input[type=\"checkbox\"]+label span:first-child {\n    width: 14px;\n    height: 14px;\n    border: 2px solid #fff;\n    position: absolute;\n    left: 0;\n    top: 2px; \n}\n.wthree-text input[type=\"checkbox\"]:checked+label span:first-child:before {\n    content: \"\";\n    \n    position: absolute;\n    left: 2px;\n    top: 2px;\n    font-size: 10px;\n    width: 10px;\n    height: 10px;\n}\n/*-- //checkbox --*/\n.wthree-text {\n    margin-top: 3em;\n}\n.wthree-text ul li{\n    display:inline-block;\n    float: left;\n}\n.wthree-text ul li:nth-child(2) {\n    float: right;\n}\n.wthree-text ul li a{\n    font-size:1em;\n    color: #fff;\n}\n.wthree-text ul li a:hover{\n    color: #02a299;\n}\n.agileits-bottom{\n    position:relative;\n}\n.agileits-bottom:before {\n    content: '';\n    position: absolute;\n    top: -17px;\n    left: -17px;\n    width: 0;\n    height: 0;\n    border-top: 17px solid transparent;\n    border-right: 18px solid #fff;\n    transition:.5s all ease;\n}\n.agileits-bottom:after {\n    content: '';\n    position: absolute;\n    top: -17px;\n    right: -17px;\n    width: 0;\n    height: 0;\n    border-left: 17px solid #fff;\n    border-top: 17px solid transparent;\n    transition:.5s all ease;\n}\n.agileits-bottom input[type=\"submit\"] {\n    font-size: 1.5em;\n    color: #02a299;\n    background: #fff;\n    outline: none;\n    cursor: pointer;\n    padding: 1em 0;\n    -webkit-appearance: none;\n    border: none;\n    width: 106%; \n    margin-left: -0.7em;\n    text-transform: uppercase; \n}\n.agileits-bottom input[type=\"submit\"]:hover {\n    color: #FFF;\n    background: #02a299;\n    transition:.5s all ease;\n}\n.agileits-bottom:hover:before {\n    border-right-color:#02a299;\n}\n.agileits-bottom:hover:after {\n    border-left-color:#02a299;\n}\n/*-- //main --*/\n/*-- copyright --*/\n.copyright {\n    margin: 2em 0;\n    text-align: center;\n}\n.copyright p {\n    font-size: 1em;\n    color: #fff;\n    line-height:1.8em;\n}\n.copyright p a{\n    color: #fff;\n    transition: 0.5s all;\n}\n.copyright p a:hover{\n    color: #000;    \n}\n/*-- //copyright --*/\n/*-- responsive-design --*/\n@media(max-width:1440px){\n.agileits-bottom input[type=\"submit\"] { \n    width: 106.8%; \n}\n}\n@media(max-width:1366px){\n.login-form {\n    width: 37%; \n    margin: 3em auto;\n}\n}\n@media(max-width:1280px){\n.login-form {\n    width: 40%; \n}\n}\n@media(max-width:1080px){\n.main {\n    padding: 2em 0 0;\n}\n.login-form {\n    width: 48%;\n}\nh1 {\n    font-size: 2.8em; \n}\n}\n@media(max-width:1024px){\nh1 {\n    font-size: 2.6em;\n}\n.login-form {\n    width: 50%;\n    margin: 2em auto;\n}\n}\n@media(max-width:991px){\nh1 {\n    font-size: 2.5em;\n}\n.login-form {\n    width: 52%; \n}\n}\n@media(max-width:900px){\n.agileits-top {\n    padding: 1em 3em 3em;\n}\n.login-form { \n    width: 56%;\n    padding-bottom: 3.5em;\n}\n}\n@media(max-width:800px){\n.login-form {\n    width: 63%; \n}\n.agileits-top {\n    padding: 1em 2.5em 2.5em;\n}\n.agileits-bottom input[type=\"submit\"] {\n    font-size: 1.3em; \n    margin-left: -0.8em; \n}\n}\n@media(max-width:768px){\nh1 {\n    font-size: 2.3em;\n}\n.agileits-bottom input[type=\"submit\"] {\n    width: 107%;\n} \n} \n@media (max-width: 736px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 107.5%;\n} \n} \n@media(max-width:667px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 108%;\n    font-size: 1.1em;\n    margin-left: -0.9em;\n}\n} \n@media(max-width:640px){\n.login-form {\n    width: 67%;\n}\n.agileits-bottom input[type=\"submit\"] {\n    width: 108%;\n}\n}\n@media(max-width:600px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 108.7%;\n}\n}\n@media(max-width:480px){\nh1 {\n    font-size: 1.8em;\n}\nh2 {\n    font-size: 1em; \n    padding: 1em; \n    letter-spacing: 7px;\n}\n.agileits-top {\n    padding: 1em 1.5em 1.5em;\n}\n.login-form input[type=\"text\"], .login-form input[type=\"password\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.login-form input[type=\"url\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.login-form input[type=\"email\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.login-form input[type=\"tel\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.styled-input label { \n    padding: 0.6em 1em; \n    font-size: 0.9em; \n}\n.styled-input input:focus ~ label, .styled-input input:valid ~ label {\n    font-size: 1em; \n    top: -1.5em;\n}\n.styled-input select:focus ~ label, .styled-input select:valid ~ label {\n    font-size: 1em; \n    top: -1.5em;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.wthree-text {\n    margin-top: 2em;\n}\n.wthree-text input[type=\"checkbox\"]+label { \n    font-size: 0.9em; \n    padding-left: 1.5em;\n}\n.wthree-text input[type=\"checkbox\"]+label span:first-child {\n    width: 12px;\n    height: 12px; \n}\n.wthree-text ul li a {\n    font-size: 0.9em; \n}\n.agileits-bottom input[type=\"submit\"] {\n    font-size: 1em;\n    margin-left: -0.6em;\n    width: 105.3%;\n    padding: 0.8em 0;\n}\n.login-form { \n    padding-bottom: 3em;\n}\n.login-form {\n    width: 80%;\n}\n.copyright p {\n    font-size: 0.9em; \n}\n.agileits-bottom:before { \n    top: -11px;\n    left: -11px; \n    border-top: 11px solid transparent;\n    border-right: 11px solid #fff; \n}\n.agileits-bottom:after { \n    top: -11px;\n    right: -11px; \n    border-left: 11px solid #fff;\n    border-top: 11px solid transparent; \n}\n.wthree-text input[type=\"checkbox\"]:checked+label span:first-child:before { \n    left: 1px;\n    top: 1px; \n}\n}\n@media(max-width:414px){\n.main {\n    padding: 1.5em 0 0;\n}\n.styled-input { \n    margin: 1.5em 0 1em; \n}\n.copyright p { \n    padding: 0 1em;\n}\n.agileits-bottom:before {\n    top: -10px;\n    left: -10px;\n    border-top: 10px solid transparent;\n    border-right: 10px solid #fff;\n}\n.agileits-bottom:after { \n    top: -10px;\n    right: -10px;\n    border-left: 10px solid #fff;\n    border-top: 10px solid transparent; \n}\n.agileits-bottom input[type=\"submit\"] { \n    width: 106%; \n}\n}\n@media(max-width:384px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 106.8%;\n    font-size: 0.9em;\n    margin-left: -0.7em;\n}\n}\n@media(max-width:375px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 106.5%;\n    margin-left: -0.6em;\n}\nh1 {\n    font-size: 1.6em;\n}\nh2 { \n    letter-spacing: 5px;\n}\n.login-form { \n    margin: 1.5em auto;\n}\n.wthree-text ul li { \n    float: none;\n    display: block;\n}\n.wthree-text ul li:nth-child(2) {\n    float: none;\n    margin-top: 1em;\n}\n.wthree-text {\n    margin-top: 1.5em;\n}\n}\n@media(max-width:320px){\nh2 {\n    letter-spacing: 3px;\n    padding: 0.8em;\n}\n.login-form {\n    width: 85%;\n}\n.agileits-top {\n    padding:0.5em 1em 1.5em;\n}\n.login-form input[type=\"text\"], .login-form input[type=\"password\"] {\n    font-size: 0.85em;\n    padding: 0.6em;\n    width: 88%;\n}\n.login-form input[type=\"url\"] {\n    font-size: 0.85em;\n    padding: 0.6em;\n    width: 88%;\n}\n.styled-input label {\n    padding: 0.6em;\n    font-size: 0.85em;\n}\n.styled-input input:focus ~ label, .styled-input input:valid ~ label {\n    font-size: 0.9em;\n    top: -1em;\n}\n.styled-input select:focus ~ label, .styled-input select:valid ~ label {\n    font-size: 0.9em;\n    top: -1em;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.login-form {\n    padding-bottom: 2em;\n}\n.agileits-bottom input[type=\"submit\"] {\n    width: 107%;\n    margin-left: -0.6em;\n}\n.styled-select {\n   background: url(http://i62.tinypic.com/15xvbd5.png) no-repeat 96% 0;\n   height: 29px;\n   overflow: hidden;\n   width: 240px;\n}\n.slate   { background-color: #ddd; }\n/*-- //responsive-design --*/\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/brand-reg/brand-reg.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" style=\"background-image: url('assets/images/bbb.jpg')\"> \n  <h1>Brand Sign Up Form</h1>\n  <div class=\"login-form\"> \n    <h2>Sign Up Form</h2> \n    <div class=\"agileits-top\">\n      <form name=\"form\">\n          <div class=\"styled-input\">\n          <input type=\"text\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"brand.brand_name\"> \n          <label style=\"color: white;\">BRAND OR COMPANY NAME*</label>\n          <span></span>\n        </div>\n        <div class=\"styled-input\">\n          <input type=\"url\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"brand.brand_url\"> \n          <label style=\"color: white;\">BRAND OR COMPANY URL*</label>\n          <span></span>\n        </div>\n        <div class=\"styled-input\">\n          <input type=\"text\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"brand.username\">\n          <label style=\"color: white;\">USERNAME*</label>\n          <span></span>\n        </div>\n        <div class=\"styled-input\">\n          <input type=\"password\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"brand.password\"> \n          <label style=\"color: white;\">PASSWORD*</label>\n          <span></span>\n        </div> \n        <div class=\"styled-input\">\n          <input type=\"tel\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"brand.phone\">\n          <label style=\"color: white;\">PHONE NO.</label>\n          <span></span>\n        </div>\n        <div class=\"styled-input\">\n          <input type=\"email\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"brand.email\">\n          <label style=\"color: white;\">EMAIL ID*</label>\n          <span></span>\n        </div>\n      \n      <div class=\"g-recaptcha\" data-sitekey=\"6LfKFS8UAAAAACYUfuhsWwSaBE4SKdPWYm7V-hJ9\"></div>\n    <div class=\"agileits-bottom\">\n    <input type=\"submit\" name=\"SUBMIT\" (click)=\"postBrand()\" value=\"Sign Up\">\n    </div>\n    </form>\n  </div>\t\n</div>\t"

/***/ }),

/***/ "../../../../../src/app/brand-reg/brand-reg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splash_service__ = __webpack_require__("../../../../../src/app/splash.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandRegComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrandRegComponent = (function () {
    function BrandRegComponent(service) {
        this.service = service;
        this.brand = { brand_name: '', brand_url: '', username: '', password: '',
            phone: '', email: '', brand: true };
    }
    BrandRegComponent.prototype.ngOnInit = function () {
    };
    BrandRegComponent.prototype.postBrand = function () {
        console.log(this.brand);
        this.service.postUser(this.brand).then(function (res) { return alert("Registration Successful"); }, function (err) { return alert("Could not register user"); });
    };
    return BrandRegComponent;
}());
BrandRegComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-brand-reg',
        template: __webpack_require__("../../../../../src/app/brand-reg/brand-reg.component.html"),
        styles: [__webpack_require__("../../../../../src/app/brand-reg/brand-reg.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__splash_service__["a" /* SplashService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__splash_service__["a" /* SplashService */]) === "function" && _a || Object])
], BrandRegComponent);

var _a;
//# sourceMappingURL=brand-reg.component.js.map

/***/ }),

/***/ "../../../../../src/app/brand-update/brand-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nhtml,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,dl,dt,dd,ol,nav ul,nav li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}\narticle, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section {display: block;}\nol,ul{list-style:none;margin:0px;padding:0px;}\nblockquote,q{quotes:none;}\nblockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}\ntable{border-collapse:collapse;border-spacing:0;}\n/*--start editing from here--*/\na{text-decoration:none;}\n.txt-rt{text-align:right;}/* text align right */\n.txt-lt{text-align:left;}/* text align left */\n.txt-center{text-align:center;}/* text align center */\n.float-rt{float:right;}/* float right */\n.float-lt{float:left;}/* float left */\n.clear{clear:both;}/* clear float */\n.pos-relative{position:relative;}/* Position Relative */\n.pos-absolute{position:absolute;}/* Position Absolute */\n.vertical-base{ vertical-align:baseline;}/* vertical align baseline */\n.vertical-top{  vertical-align:top;}/* vertical align top */\nnav.vertical ul li{ display:block;}/* vertical menu */\nnav.horizontal ul li{   display: inline-block;}/* horizontal menu */\nimg{max-width:100%;}\n/*--end reset--*/\nbody {\n    font-family: 'Open Sans', sans-serif;\n    \n    background-attachment: fixed;\n    background-size: cover;\n}\nh1 {\n    font-size: 3em;\n    text-align: center;\n    color: #fff;\n    font-weight: 100;\n}\n/*-- main --*/\nh2 {\n    font-size: 1.1em;\n    text-align: center;\n    padding: 1.2em;\n    background: #02a299;\n    color: #fff;\n    font-weight: 200;\n    letter-spacing: 10px;\n}\n.main {\n    font-family: 'Open Sans', sans-serif;\n    height: 100%;\n    background-attachment: fixed;\n    background-size: cover;\n    padding: 3em 0 0;\n}\n.login-form {\n    width: 35%;\n    margin: 3.5em auto;\n    background: rgba(12, 85, 105, 0.51);\n    padding-bottom: 4em;\n}\n.agileits-top {\n    padding: 2em 3em 3em;\n}\n.login-form input[type=\"text\"], .login-form input[type=\"password\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form input[type=\"url\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form select[type=\"text\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 101%;\n    -moz-appearance: none;\n         appearance: none;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form input[type=\"email\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form input[type=\"tel\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n/*-- input-effect --*/\n.styled-input input:focus ~ label, .styled-input input:valid ~ label {\n    font-size: 1.1em;\n    color: #02a299;\n    top: -2em;\n}\n.styled-input select:focus ~ label, .styled-input select:valid ~ label {\n    font-size: 1.1em;\n    color: #02a299;\n    top: -2em;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.styled-input {\n  width:100%;\n  margin: 2em 0 1em;\n  position: relative;\n}\n\n.styled-input label {\n    color: #fff;\n    padding: 0.8em 1em;\n    position: absolute;\n    top: -2em;\n    left: 0;\n    pointer-events: none;\n    font-weight: 400;\n    font-size: 1.1em;\n    display: block;\n    line-height: 1em;\n}\n.styled-input input ~ span {\n  display: block;\n  width: 0;\n  height:2px;\n  background:#fff;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transition: all 0.125s ease; \n}\n\n.styled-input select ~ span {\n  display: block;\n  width: 0;\n  height:2px;\n  background:#fff;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transition: all 0.125s ease; \n}\n\n.styled-input input:focus { outline: 0; }\n\n.styled-input select:focus { outline: 0; -webkit-appearance: none; -moz-appearance: none; appearance: none;}\n\n.styled-input input:focus ~ span {\n     width: 100%;\n    transition: all 0.075s ease;\n      font-family: 'OpenSans-Regular';\n} \n.styled-input select:focus ~ span {\n     width: 100%;\n     -webkit-appearance: none;\n        -moz-appearance: none;\n             appearance: none;\n    transition: all 0.075s ease;\n      font-family: 'OpenSans-Regular';\n} \n/*-- //input-effect --*/\n.login-form p {\n    font-size: 1em;\n    color: #fff;\n    margin: 1em 0 .5em;\n}\n/*-- checkbox --*/\n.wthree-text input[type=\"checkbox\"] {\n    display: none;\n}\n.wthree-text input[type=\"checkbox\"]+label {\n    position: relative;\n    padding-left: 1.8em;\n    border: none;\n    outline: none;\n    font-size: 1em;\n    color: #fff;\n    cursor: pointer;\n    display: block; \n}\n.wthree-text input[type=\"checkbox\"]+label span:first-child {\n    width: 14px;\n    height: 14px;\n    border: 2px solid #fff;\n    position: absolute;\n    left: 0;\n    top: 2px; \n}\n.wthree-text input[type=\"checkbox\"]:checked+label span:first-child:before {\n    content: \"\";\n    \n    position: absolute;\n    left: 2px;\n    top: 2px;\n    font-size: 10px;\n    width: 10px;\n    height: 10px;\n}\n/*-- //checkbox --*/\n.wthree-text {\n    margin-top: 3em;\n}\n.wthree-text ul li{\n    display:inline-block;\n    float: left;\n}\n.wthree-text ul li:nth-child(2) {\n    float: right;\n}\n.wthree-text ul li a{\n    font-size:1em;\n    color: #fff;\n}\n.wthree-text ul li a:hover{\n    color: #02a299;\n}\n.agileits-bottom{\n    position:relative;\n}\n.agileits-bottom:before {\n    content: '';\n    position: absolute;\n    top: -17px;\n    left: -17px;\n    width: 0;\n    height: 0;\n    border-top: 17px solid transparent;\n    border-right: 18px solid #fff;\n    transition:.5s all ease;\n}\n.agileits-bottom:after {\n    content: '';\n    position: absolute;\n    top: -17px;\n    right: -17px;\n    width: 0;\n    height: 0;\n    border-left: 17px solid #fff;\n    border-top: 17px solid transparent;\n    transition:.5s all ease;\n}\n.agileits-bottom input[type=\"submit\"] {\n    font-size: 1.5em;\n    color: #02a299;\n    background: #fff;\n    outline: none;\n    cursor: pointer;\n    padding: 1em 0;\n    -webkit-appearance: none;\n    border: none;\n    width: 106%; \n    margin-left: -0.7em;\n    text-transform: uppercase; \n}\n.agileits-bottom input[type=\"submit\"]:hover {\n    color: #FFF;\n    background: #02a299;\n    transition:.5s all ease;\n}\n.agileits-bottom:hover:before {\n    border-right-color:#02a299;\n}\n.agileits-bottom:hover:after {\n    border-left-color:#02a299;\n}\n/*-- //main --*/\n/*-- copyright --*/\n.copyright {\n    margin: 2em 0;\n    text-align: center;\n}\n.copyright p {\n    font-size: 1em;\n    color: #fff;\n    line-height:1.8em;\n}\n.copyright p a{\n    color: #fff;\n    transition: 0.5s all;\n}\n.copyright p a:hover{\n    color: #000;    \n}\n/*-- //copyright --*/\n/*-- responsive-design --*/\n@media(max-width:1440px){\n.agileits-bottom input[type=\"submit\"] { \n    width: 106.8%; \n}\n}\n@media(max-width:1366px){\n.login-form {\n    width: 37%; \n    margin: 3em auto;\n}\n}\n@media(max-width:1280px){\n.login-form {\n    width: 40%; \n}\n}\n@media(max-width:1080px){\n.main {\n    padding: 2em 0 0;\n}\n.login-form {\n    width: 48%;\n}\nh1 {\n    font-size: 2.8em; \n}\n}\n@media(max-width:1024px){\nh1 {\n    font-size: 2.6em;\n}\n.login-form {\n    width: 50%;\n    margin: 2em auto;\n}\n}\n@media(max-width:991px){\nh1 {\n    font-size: 2.5em;\n}\n.login-form {\n    width: 52%; \n}\n}\n@media(max-width:900px){\n.agileits-top {\n    padding: 1em 3em 3em;\n}\n.login-form { \n    width: 56%;\n    padding-bottom: 3.5em;\n}\n}\n@media(max-width:800px){\n.login-form {\n    width: 63%; \n}\n.agileits-top {\n    padding: 1em 2.5em 2.5em;\n}\n.agileits-bottom input[type=\"submit\"] {\n    font-size: 1.3em; \n    margin-left: -0.8em; \n}\n}\n@media(max-width:768px){\nh1 {\n    font-size: 2.3em;\n}\n.agileits-bottom input[type=\"submit\"] {\n    width: 107%;\n} \n} \n@media (max-width: 736px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 107.5%;\n} \n} \n@media(max-width:667px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 108%;\n    font-size: 1.1em;\n    margin-left: -0.9em;\n}\n} \n@media(max-width:640px){\n.login-form {\n    width: 67%;\n}\n.agileits-bottom input[type=\"submit\"] {\n    width: 108%;\n}\n}\n@media(max-width:600px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 108.7%;\n}\n}\n@media(max-width:480px){\nh1 {\n    font-size: 1.8em;\n}\nh2 {\n    font-size: 1em; \n    padding: 1em; \n    letter-spacing: 7px;\n}\n.agileits-top {\n    padding: 1em 1.5em 1.5em;\n}\n.login-form input[type=\"text\"], .login-form input[type=\"password\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.login-form input[type=\"url\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.login-form input[type=\"email\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.login-form input[type=\"tel\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.styled-input label { \n    padding: 0.6em 1em; \n    font-size: 0.9em; \n}\n.styled-input input:focus ~ label, .styled-input input:valid ~ label {\n    font-size: 1em; \n    top: -1.5em;\n}\n.styled-input select:focus ~ label, .styled-input select:valid ~ label {\n    font-size: 1em; \n    top: -1.5em;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.wthree-text {\n    margin-top: 2em;\n}\n.wthree-text input[type=\"checkbox\"]+label { \n    font-size: 0.9em; \n    padding-left: 1.5em;\n}\n.wthree-text input[type=\"checkbox\"]+label span:first-child {\n    width: 12px;\n    height: 12px; \n}\n.wthree-text ul li a {\n    font-size: 0.9em; \n}\n.agileits-bottom input[type=\"submit\"] {\n    font-size: 1em;\n    margin-left: -0.6em;\n    width: 105.3%;\n    padding: 0.8em 0;\n}\n.login-form { \n    padding-bottom: 3em;\n}\n.login-form {\n    width: 80%;\n}\n.copyright p {\n    font-size: 0.9em; \n}\n.agileits-bottom:before { \n    top: -11px;\n    left: -11px; \n    border-top: 11px solid transparent;\n    border-right: 11px solid #fff; \n}\n.agileits-bottom:after { \n    top: -11px;\n    right: -11px; \n    border-left: 11px solid #fff;\n    border-top: 11px solid transparent; \n}\n.wthree-text input[type=\"checkbox\"]:checked+label span:first-child:before { \n    left: 1px;\n    top: 1px; \n}\n}\n@media(max-width:414px){\n.main {\n    padding: 1.5em 0 0;\n}\n.styled-input { \n    margin: 1.5em 0 1em; \n}\n.copyright p { \n    padding: 0 1em;\n}\n.agileits-bottom:before {\n    top: -10px;\n    left: -10px;\n    border-top: 10px solid transparent;\n    border-right: 10px solid #fff;\n}\n.agileits-bottom:after { \n    top: -10px;\n    right: -10px;\n    border-left: 10px solid #fff;\n    border-top: 10px solid transparent; \n}\n.agileits-bottom input[type=\"submit\"] { \n    width: 106%; \n}\n}\n@media(max-width:384px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 106.8%;\n    font-size: 0.9em;\n    margin-left: -0.7em;\n}\n}\n@media(max-width:375px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 106.5%;\n    margin-left: -0.6em;\n}\nh1 {\n    font-size: 1.6em;\n}\nh2 { \n    letter-spacing: 5px;\n}\n.login-form { \n    margin: 1.5em auto;\n}\n.wthree-text ul li { \n    float: none;\n    display: block;\n}\n.wthree-text ul li:nth-child(2) {\n    float: none;\n    margin-top: 1em;\n}\n.wthree-text {\n    margin-top: 1.5em;\n}\n}\n@media(max-width:320px){\nh2 {\n    letter-spacing: 3px;\n    padding: 0.8em;\n}\n.login-form {\n    width: 85%;\n}\n.agileits-top {\n    padding:0.5em 1em 1.5em;\n}\n.login-form input[type=\"text\"], .login-form input[type=\"password\"] {\n    font-size: 0.85em;\n    padding: 0.6em;\n    width: 88%;\n}\n.login-form input[type=\"url\"] {\n    font-size: 0.85em;\n    padding: 0.6em;\n    width: 88%;\n}\n.styled-input label {\n    padding: 0.6em;\n    font-size: 0.85em;\n}\n.styled-input input:focus ~ label, .styled-input input:valid ~ label {\n    font-size: 0.9em;\n    top: -1em;\n}\n.styled-input select:focus ~ label, .styled-input select:valid ~ label {\n    font-size: 0.9em;\n    top: -1em;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.login-form {\n    padding-bottom: 2em;\n}\n.agileits-bottom input[type=\"submit\"] {\n    width: 107%;\n    margin-left: -0.6em;\n}\n.styled-select {\n   background: url(http://i62.tinypic.com/15xvbd5.png) no-repeat 96% 0;\n   height: 29px;\n   overflow: hidden;\n   width: 240px;\n}\n.slate   { background-color: #ddd; }\n/*-- //responsive-design --*/\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/brand-update/brand-update.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" style=\"background-image: url('assets/images/bbb.jpg')\"> \n  <h1>Change Details</h1>\n  <div class=\"login-form\"> \n    <h2>Change Details</h2> \n    <div class=\"agileits-top\">\n      <form name=\"form\">\n          <div class=\"styled-input\">\n          <input type=\"text\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"brand.brand_name\"> \n          <label style=\"color: white;\">BRAND OR COMPANY NAME*</label>\n          <span></span>\n        </div>\n        <div class=\"styled-input\">\n          <input type=\"url\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"brand.brand_url\"> \n          <label style=\"color: white;\">BRAND OR COMPANY URL*</label>\n          <span></span>\n        </div>\n        <div class=\"styled-input\">\n          <input type=\"password\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"brand.password\"> \n          <label style=\"color: white;\">PASSWORD*</label>\n          <span></span>\n        </div> \n        <div class=\"styled-input\">\n          <input type=\"tel\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"brand.phone\">\n          <label style=\"color: white;\">PHONE NO.</label>\n          <span></span>\n        </div>\n        <div class=\"styled-input\">\n          <input type=\"email\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"brand.email\">\n          <label style=\"color: white;\">EMAIL ID*</label>\n          <span></span>\n        </div>\n      \n      <div class=\"g-recaptcha\" data-sitekey=\"6LfKFS8UAAAAACYUfuhsWwSaBE4SKdPWYm7V-hJ9\"></div>\n    <div class=\"agileits-bottom\">\n    <input type=\"submit\" name=\"SUBMIT\" (click)=\"postBrand()\" value=\"Sign Up\">\n    </div>\n    </form>\n  </div>\t\n</div>\t"

/***/ }),

/***/ "../../../../../src/app/brand-update/brand-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splash_service__ = __webpack_require__("../../../../../src/app/splash.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandUpdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrandUpdateComponent = (function () {
    function BrandUpdateComponent(service) {
        this.service = service;
        this.brand = { brand_name: '', brand_url: '', username: '', password: '',
            phone: '', email: '', brand: true };
    }
    BrandUpdateComponent.prototype.ngOnInit = function () {
        this.token = localStorage.getItem('token');
        this.brand.username = localStorage.getItem('username');
    };
    BrandUpdateComponent.prototype.postBrand = function () {
        console.log(this.brand);
        this.service.update(this.brand, this.token).then(function (res) { return alert("Updated successfully"); }, function (err) { return alert("Could not update user details"); });
    };
    return BrandUpdateComponent;
}());
BrandUpdateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-brand-update',
        template: __webpack_require__("../../../../../src/app/brand-update/brand-update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/brand-update/brand-update.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__splash_service__["a" /* SplashService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__splash_service__["a" /* SplashService */]) === "function" && _a || Object])
], BrandUpdateComponent);

var _a;
//# sourceMappingURL=brand-update.component.js.map

/***/ }),

/***/ "../../../../../src/app/brand-welcome/brand-welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\n\ttransition:0.5s all;\n\t-webkit-transition:0.5s all;\n\t-moz-transition:0.5s all;\n\t-o-transition:0.5s all;\n\t-ms-transition:0.5s all;\n}\n.parallax{\n    min-height: 500px; \n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n#main-reservation-text h3{\n\tbackground:rgba(0,0,0,0.8);\n\tfont-size: 1.8em;\n\tfont-weight:700;\n\ttext-transform: uppercase;\n\tdisplay: inline-block;\n\tcolor: #fff;\n\tfont-family: 'Open Sans Condensed', sans-serif;\n\tpadding:10px;\n}\n#main-reservation-text p{\n\tbackground:rgba(0,0,0,0.8);\n\tcolor:#fff;\n\tpadding:10px;\n\ttext-transform:capitalize;\n}\n#main-reservation-undertext p {\n\tfont-weight: 300;\n\tcolor: #fff;\n\tmargin-top: 12px;\n\tdisplay: inline-block;\n\tfont-size: 0.7em;\n\ttext-transform: none;\n}\n#reservation-button {\n\tcolor: #fff;\n\tborder: 2px solid #fff;\n\tpadding: 10px 26px;\n\tmargin-top: 0px;\n\tfont-size: 20px;\n\tdisplay: inline-block;\n\tfloat: right;\n\tfont-weight:800;\n\ttransition: all 0.3s;\n\tcursor: pointer;\n\tbackground-color:#00B895;\n}\n.btn.btn-primary {\n\tfont-family: 'Open Sans Condensed', sans-serif;\n\tfont-size:1.8em;\n\tfont-weight: 300;\n\tfont-style: normal;\n\ttext-shadow: none;\n\ttext-transform:uppercase;\n\tcolor: #FFF;\n\tpadding: 10px 26px;\n\tposition: relative;\n\tletter-spacing: 0;\n\tbackground: transparent;\n\tborder-radius: 0;\n\tbox-shadow: none;\n\tborder: none;\n\toutline: none;\n\tborder-radius: 0;\n\tz-index: 1;\n\toverflow: hidden;\n\ttransition: all 0.4s ease;\n}\n.btn {\n\tdisplay: inline-block;\n\tpadding: 4px 12px;\n\tmargin-bottom: 0;\n\tfont-size: 14px;\n\ttext-align: center;\n\tvertical-align: middle;\n\tcursor: pointer;\n\tcolor: #333;\n\ttext-shadow: 0 1px 1px rgba(255,255,255,0.75);\n\tborder: 1px solid #ccc;\n\tborder-bottom-color: #b3b3b3;\n}\n.btn-primary {\n\tcolor: #fff;\n}\n.btn.btn-primary:before {\n\tcontent: \"\";\n\tposition: absolute;\n\twidth: 0;\n\theight: 100%;\n\tbottom: 0;\n\tright: 0;\n\ttop: 0;\n\tz-index: -1;\n\tborder-radius: 0;\n\tbackground:#F94B4B;\n\ttransition: all 0.4s ease;\n}\n.btn.btn-primary:hover:before {\n\twidth: 100%;\n\tleft: 0;\n\ttransition: all 0.3s ease;\n}\n.btn.btn-primary:after {\n\tcontent: \"\";\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tbottom: 0;\n\tleft: 0;\n\tborder-radius: 0;\n\tbackground:#dcbc86;\n\tz-index: -2;\n\ttransition: all 0.4s ease;\n}\n\n.reservation_banner{\n\t\n\tbackground-size: 100% 100%;\n\tbackground-size: cover;\n\tbackground-position: bottom;\n\tpadding: 2em 0 3em;\n}\n.video-container {\n  position: relative;\n}\nvideo {\n  height: auto;\n  width: 100%;\n}\n.overlay-desc {\n  background: rgba(0,0,0,0);\n  position: absolute;\n  top: 0; right: 0; bottom: 0; left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 12%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.button {\n  display: inline-block;\n  border-radius: 4px;\n  background-color: yellow;\n  border: none;\n  color: black;\n  text-align: center;\n  font-size: 28px;\n  padding: 20px;\n  width: 400px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\n\n.button span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n\n.button span:after {\n  content: '\\BB';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  transition: 0.5s;\n}\n\n.button:hover span {\n  padding-right: 25px;\n}\n\n.button:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n#chartdiv {\n\twidth\t: 100%;\n\theight\t: 500px;\n}\t\n.main-header\n{\n    height: 650px;\n}\n.bg-color\n{\n\n    background-color: RGBA(0, 0, 0, 0.41);\n    height: 650px;\n    padding-bottom: 100px;\n}\nvideo#bgvid {\n    position: absolute;\n    min-width: 100%;\n    min-height: inherit;\n    width: 100%;\n    height: inherit;\n    z-index: -100;\n    background-size: cover;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.fa:hover {\n    opacity: 0.7;\n}\n\n#How_It_Works button {\n  margin: 0 auto !important;\n  font-size: 2.0rem;\n  padding: 1.25rem 2.5rem;\n  display: block;\n  width: 200px;\n  background-color: transparent;\n  border: 1px solid white;\n  color: white !important;\n  font-weight: 300;\n  border-radius: 3px;\n  transition: all 0.3s ease-in-out;\n}\n\n#How_It_Works button:hover {\n  background-color: white;\n  color: black !important;\n  border-color: #009ac9;\n}\n.parallax button {\n  margin: 0 auto !important;\n  font-size: 2.0rem;\n  padding: 1.25rem 2.5rem;\n  display: block;\n  width: 200px;\n  background-color: transparent;\n  border: 1px solid white;\n  color: white !important;\n  font-weight: 300;\n  border-radius: 3px;\n  transition: all 0.3s ease-in-out;\n}\n\n.parallax button:hover {\n  background-color: white;\n  color: black !important;\n  border-color: #009ac9;\n}\n\n.overlay-desc {\n  background: rgba(0,0,0,0);\n  position: absolute;\n  top: 0; right: 0; bottom: 0; left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.mobgraph{\n\tvisibility: hidden;\n\tdisplay: none;\n}\n\n.center-pills{\n\tdisplay: inline-block;\n}\n\n@media only screen and (max-width: 500px) {\n    .main-header {\n        \theight: 400px;\n    }\n    .bg-color{\n    \theight: 400px;\n    }\n    .overlay-desc {\n  background: rgba(0,0,0,0);\n  position: absolute;\n  margin-bottom:100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\t}\n\t.desktopgraph{\n\t\tvisibility: hidden;\n\t\tdisplay: none;\n\t}\n\t.mobgraph{\n\t\tvisibility: visible;\n\t\tdisplay: block;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/brand-welcome/brand-welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" style=\"background-color: transparent;padding: 15px 0\" id=\"something\">\n  <div class=\"container\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n          <button type=\"button\" data-target=\"#navbarCollapse\" data-toggle=\"collapse\" class=\"navbar-toggle\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" style=\"font-family: 'Bree Serif',Serif;color:white;font-size: 25px;\">SplashFluence</a>\n      </div>\n      <!-- Collection of nav links and other content for toggling -->\n      <div id=\"navbarCollapse\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-right\">\n              <li><a (click)=\"gotoHashtag('seo')\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Scale Up Your Seo</a></li>\n              <li><a (click)=\"gotoHashtag('How_It_Works')\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">How It Works</a></li>\n              <li><a (click)=\"gotoHashtag('create')\" style=\"font-size: 'Bree Serif'serif;font-size: 18px;color: white;\">Create Your Campaign</a></li>\n              <li><a (click)=\"coming()\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Blog</a></li>\n              <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Howdy, {{username}}<span>&nbsp;&nbsp;<img src=\"assets/images/bg/a4.png\" style=\"height: 30px;margin-top:-3%;\"></span>&nbsp;&nbsp;<span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\">\n                  <li><a routerLink=\"../brandupdate\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: red;\">Edit Account</a></li>\n                  <li><a (click)='logout()' style=\"font-family: 'Bree Serif',serif;font-size: 18px;color: red\">LogOut</a></li>\n                </ul>\n             </li>\n          </ul>\n      </div>\n  </div>\n</nav>\n  <!--TOP Navigation Bar Finished //-->\n  <div class=\"parallax\" style=\"background-image: url(assets/images/bg/seo.jpg);min-height: 650px;overflow: hidden;\">\n  </div>\n\n  <div class=\"container-fluid\" id=\"seo\" style=\"min-height: 600px;overflow: hidden;color: black;font-family: 'Bree Serif',serif;\">\n    <div class=\"row text-center\" style=\"margin-top: 3%;\">\n      <h2 style=\"font-size: 40px;color: red;\">CHALLENGES IN SEO<hr style=\"width: 30%;\"></h2>\n    </div>\n    <div class=\"row text-center\" style=\"margin-top: 3%;\">\n      <p style=\"font-size: 18px;\">Getting your website and content to rank in the search engines is tricky and it requires a keen understanding of SEO.<br/> One of the best and proven ways to move your site to the top of Google is to build high-quality backlinksand<br/> influencer marketing does just this.</p>\n    </div>\n    <div class=\"row text-center\" style=\"margin-top: 3%;margin-bottom: 3%;\">\n      <p style=\"font-size: 18px;\">Identifying your key influencers and making sure that they share your content is one of the most neglected SEO<br/> techniques in marketing. It is a great way good way of improving off-the-page SEO</p>\n    </div>\n    <div class=\"row text-center\" style=\"background-color: #f4f4f4;\">\n      <h2 style=\"font-size: 40px;margin-top: 3%;margin-bottom: 3%;color: red;\">Solution<hr style=\"width: 30%;\"></h2>\n      <div class=\"col-md-4 col-lg-4 col-sm-12 col-xs-12 text-center\">\n        <img src=\"assets/images/bg/backlinks.png\">\n        <h3>Organic Backlinks</h3>\n        <p style=\"font-size: 18px;\">Backlinks to your website with appropriate<br/> Anchor Text and Tracking</p>\n      </div>\n      <div class=\"col-md-4 col-lg-4 col-sm-12 col-xs-12 text-center\">\n        <img src=\"assets/images/bg/simplified.png\">\n        <h3>Simplified SEO</h3>\n        <p style=\"font-size: 18px;\">Simplified process to engage with bloggers<br/> and influencers</p>\n      </div>\n      <div class=\"col-md-4 col-lg-4 col-sm-12 col-xs-12 text-center\" style=\"margin-bottom: 5%;\">\n        <img src=\"assets/images/bg/results.png\">\n        <h3>Proven Results</h3>\n        <p style=\"font-size: 18px;\">1X to 3X Growth in SEO traffic</p>\n      </div>\n    </div>\n  </div>\n\n   <div class=\"parallax\" id=\"How_It_Works\" style=\"background-image: url(assets/images/parallax1.jpg);color: white;font-family: 'Bree-Serif',serif;\">\n    <div class=\"row\">\n      <h2 style=\"color: white;margin-top: 3%;text-align: center;\">How It Works<hr style=\"width: 30%;\"></h2>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 col-lg-3 col-sm-12 col-xs-12 text-center\">\n        <img src=\"assets/images/bg/launch.png\">\n        <h3>Launch A Campaign</h3>\n        <p style=\"font-size: 18px;\">Share a brief background of your brand, the type of Influencers you are looking to work with and your main goal for the campaign</p>\n      </div>\n      <div class=\"col-md-3 col-lg-3 col-sm-12 col-xs-12 text-center\">\n        <img src=\"assets/images/bg/review.png\">\n        <h3>Receive Application and Quotes</h3>\n        <p style=\"font-size: 18px;\">Get applications for Influencers with their quotes, for your campaign</p>\n      </div>\n      <div class=\"col-md-3 col-lg-3 col-sm-12 col-xs-12 text-center\">\n        <img src=\"assets/images/bg/finalize.png\">\n        <h3>Review applications and finalize Influencers</h3>\n        <p style=\"font-size: 18px;\">Select Influencers you would like to work with, based on your marketing budget</p>\n      </div>\n      <div class=\"col-md-3 col-lg-3 col-sm-12 col-xs-12 text-center\">\n        <img src=\"assets/images/bg/coverage.png\">\n        <h3>Get coverage from Influencers</h3>\n        <p style=\"font-size: 18px;\">Get coverage from Influencers on their social media handles</p>\n      </div>\n      <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12 text-center\">\n        <img src=\"assets/images/bg/track.png\">\n        <h3>Track Results</h3>\n        <p style=\"margin-bottom: 3%;font-size: 18px;\">Track reach, engagement, visitors and transactions</p>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"container-fluid\" id=\"create\" style=\"min-height: 600px;overflow: hidden;background-color: white;font-family: 'Bree Serif',serif;background-color: white;\">\n    <div class=\"row text-center\">\n      <div class=\"col-md-6 col-lg-6 col-sm-12 col-xs-12\">\n        <h2 style=\"color: black;margin-top: 8%;margin-bottom: 5%;\">Create a Campaign<hr style=\"width: 30%;\"></h2>\n        <p style=\"font-size: 18px;margin-bottom: 3%;color: black;\">INFLUENCERS AND BLOGGERS REQUIRED</p>\n        <form>\n            <div class=\"form-group\">\n              <input type=\"file\" (change)=\"fileChangeCamp($event)\"><br/>\n            </div>\n            <div class=\"form-group\">\n               <input type=\"text\" class=\"form-control\" placeholder=\"Brand Name:\" name=\"NAME\" style=\"height: 60px;font-family: 'Bree Serif', serif;\" required=\"\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"camp.name\"> \n            </div>\n            <div class=\"form-group\">\n               <input type=\"url\" class=\"form-control\" placeholder=\"Company Website:\" name=\"WEBSITE\" style=\"height: 60px;font-family: 'Bree Serif', serif;\" required=\"\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"camp.website\"> \n            </div>\n            <div class=\"form-group\">\n               <input type=\"email\" class=\"form-control\" placeholder=\"Email:\" name=\"EMAIL\" style=\"height: 60px;font-family: 'Bree Serif', serif;\" required=\"\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"camp.email\">\n            </div>\n            <div class=\"form-group\">\n               <input type=\"text\" class=\"form-control\" placeholder=\"Target Audience:\" name=\"AUDIENCE\" style=\"height: 60px;font-family: 'Bree Serif', serif;\" required=\"\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"camp.audience\"> \n            </div>\n            <div class=\"form-group\">\n               <input type=\"date\" id = \"date-input\" class=\"form-control\" placeholder=\"Last Date For the Influencers To Apply\" name=\"LAST_DATE\" style=\"height: 60px;font-family: 'Bree Serif', serif;\" required=\"\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"camp.lastDate\"> \n            </div>\n            <textarea rows=\"10\" name=\"MESSAGE\" cols=\"87\" placeholder=\"Tell Us Something about your Brand:\" style=\"border-radius: 4px;padding-left: 10px;font-family: 'Bree Serif', serif;\" required=\"\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"camp.message\"></textarea><br/><br/>\n            <button class=\"button button1\" (click)=\"post()\" style=\"font-family: 'Bree Serif', serif;margin-bottom: 5%;font-size: 25px;\">Submit</button>\n        </form>\n      </div>\n      <div class=\"col-md-6 col-lg-6 col-sm-0 col-xs-0 text-center\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container-fluid\" style=\"background-color:#f4f4f4;min-height: 380px;overflow: hidden;\">\n    <div class=\"row\" style=\"margin-top: 3%;margin-bottom: 3%;\">\n      <div class=\"col-md-1 col-lg-1 col-sm-0 col-xs-0\">\n      </div>\n      <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-6\">\n        <h4><a href=\"#About_Us\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">About Us</a></h4>\n        <h4><a href=\"#About_Us\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">How It Works</a></h4>\n        <h4><a href=\"#About_Us\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">Why Influencer Marketing</a></h4>\n        <h4><a href=\"#About_Us\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">Top Influencers</a></h4>\n        <h4><a href=\"#About_Us\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">Get started Now</a></h4>\n      </div>\n      <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-6 \">\n        <h4><a routerLink=\"infreg\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Influencer SignIn</a></h4>\n        <h4><a routerLink=\"brandreg\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Brand SignIn</a></h4>\n        <h4><a routerLink=\"brandlogin\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Influencer LogIn</a></h4>\n        <h4><a routerLink=\"brandlogin\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Brand LogIn</a></h4>\n      </div>\n      <div class=\"col-md-2 col-lg-2 col-sm-6 col-xs-6 \">\n        <h4><a href=\"#\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Blog</a></h4>\n        <h4><a href=\"#\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Privacy Policy</a></h4>\n      </div>\n      <div class=\"col-md-3 col-lg-3 col-sm-12 col-xs-12 text-center\">\n        <h4 style=\"font-size: 25px;color: black;font-family: 'Bree Serif',serif;\">Contact Us<hr style=\"width: 30%;\"></h4>\n        <h4 style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Phone No: 9871370285</h4>\n        <h4 style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">splashfluence@gmail.com</h4>\n      </div>\n    </div>\n    <hr style=\"width: 90%;\">\n       <div class=\"row\" style=\"margin-top: 2%;\">\n           <p style=\"font-family: 'Bree Serif',serif;font-size: 20px;float: left;color: black;margin-top:2%;margin-left:3%;margin-right: 15%;\" class=\"wow fadeInUp\" data-wow-duration=\"2s\">&copy; SplashFluence  2017 All Rights Reserved. Designed by<a href=\"https://www.linkedin.com/in/himanshu-narang-630694130/\"> Himanshu Narang</a> </p>\n          <a href=\"#\" class=\"fa fa-facebook\" style=\"font-size: 25px;background-color: #f4f4f4;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n          <a href=\"#\" class=\"fa fa-twitter\" style=\"font-size: 25px;background-color: #f4f4f4;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n          <a href=\"#\" class=\"fa fa-linkedin\" style=\"font-size: 25px;background-color: #f4f4f4;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n          <a href=\"#\" class=\"fa fa-youtube\" style=\"font-size: 25px;background-color: #f4f4f4;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n          <a href=\"#\" class=\"fa fa-instagram\" style=\"font-size: 25px;background-color: #f4f4f4;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n       </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/brand-welcome/brand-welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splash_service__ = __webpack_require__("../../../../../src/app/splash.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandWelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrandWelcomeComponent = (function () {
    function BrandWelcomeComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.username = '';
        this.camp = {
            name: '',
            website: '',
            email: '',
            audience: '',
            message: '',
            lastDate: '',
            imageUrl: ''
        };
    }
    BrandWelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        if (token == null)
            this.router.navigate(['../']);
        else {
            this.service.redirect(token).then(function (res) { return console.log('Authenticated'); }, function (err) { return _this.router.navigate(['../']); });
        }
        this.username = this.service.getUsername();
        if ($('[type="date"]').prop('type') != 'date') {
            $('[type="date"]').datepicker();
        }
    };
    BrandWelcomeComponent.prototype.uploadFile = function (file, signedRequest, url) {
        var _this = this;
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', signedRequest);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    _this.camp.imageUrl = url;
                    alert('Image uploading is now complete');
                }
                else {
                    alert('Could not upload file.');
                }
            }
        };
        xhr.send(file);
    };
    BrandWelcomeComponent.prototype.getSignedRequest = function (file) {
        var _this = this;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "http://localhost:3000/camp/sign-s3?file-name=" + file.name + "&file-type=" + file.type);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    _this.uploadFile(file, response.signedRequest, response.url);
                }
                else {
                    alert('Could not get signed URL.');
                }
            }
        };
        xhr.send();
    };
    BrandWelcomeComponent.prototype.fileChangeCamp = function (fileInput) {
        if (fileInput.target.files[0])
            this.getSignedRequest(fileInput.target.files[0]);
    };
    BrandWelcomeComponent.prototype.post = function () {
        this.camp.lastDate = $('#date-input').val();
        console.log(this.camp);
        this.service.postCampaign(this.camp).then(function (res) { return alert('camp posted successfully'); }, function (err) { return alert('camp could not be posted'); });
    };
    BrandWelcomeComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['']);
    };
    BrandWelcomeComponent.prototype.coming = function () {
        alert("Coming soon!! Please be patient");
    };
    BrandWelcomeComponent.prototype.gotoHashtag = function (fragment) {
        var url = '';
        var urlWithSegments = this.router.url.split('#');
        if (urlWithSegments.length) {
            url = urlWithSegments[0];
        }
        window.location.hash = fragment;
        var element = document.querySelector("#" + fragment);
        if (element)
            element.scrollIntoView();
    };
    return BrandWelcomeComponent;
}());
BrandWelcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-brand-welcome',
        template: __webpack_require__("../../../../../src/app/brand-welcome/brand-welcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/brand-welcome/brand-welcome.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__splash_service__["a" /* SplashService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__splash_service__["a" /* SplashService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], BrandWelcomeComponent);

var _a, _b, _c;
//# sourceMappingURL=brand-welcome.component.js.map

/***/ }),

/***/ "../../../../../src/app/camp/camp.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/camp/camp.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" style=\"background-color: black;padding: 15px 0\" id=\"something\">\n  <div class=\"container\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n          <button type=\"button\" data-target=\"#navbarCollapse\" data-toggle=\"collapse\" class=\"navbar-toggle\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n          </button>\n          <a routerLink=\"../influencerwelcome\" class=\"navbar-brand\" style=\"font-family: 'Bree Serif',Serif;color:white;font-size: 25px;\">SplashFluence</a>\n      </div>\n      <!-- Collection of nav links and other content for toggling -->\n      <div id=\"navbarCollapse\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-right\">\n              <li><a href=\"#\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Live Campaigns</a></li>\n              <li><a routerLink=\"../influencerwelcome\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Scale Up Your Seo</a></li>\n              <li><a (click)=\"coming()\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Blog</a></li>\n              <li><a routerLink=\"../influencerwelcome\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Contact</a></li>\n              <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Howdy,{{username}}<span>&nbsp;&nbsp;<img src=\"assets/images/bg/a4.png\" style=\"height: 30px;margin-top:-3%;\"></span>&nbsp;&nbsp;<span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\">\n                  <li><a routerLink=\"../infupdate\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: red;\">Edit Account</a></li>\n                  <li><a routerLink=\"../applied\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: red;\">Applied Campaign</a></li>\n                  <li><a (click)=\"logout()\" style=\"font-family: 'Bree Serif',serif;font-size: 18px;color: red\">LogOut</a></li>\n                </ul>\n             </li>\n          </ul>\n      </div>\n  </div>\n</nav>\n  <!--TOP Navigation Bar Finished //-->\n<div class=\"container-fluid\" style=\"min-height: 1000px;overflow: hidden;margin-top: 7%;font-family: 'Bree Serif',serif;\">\n  <div class=\"row\">\n    <h1 style=\"text-align: center;color: black;\">Live Campaigns<hr style=\"width: 30%;\"></h1>\n  </div>\n  <div class=\"row\" *ngFor = \"let camp of camps\" style=\"height:350px; border-bottom: 1px grey solid; margin-bottom:3%;\">\n    <div class= \"col-md-3 col-lg-3 col-sm-12 col-xs-12\">\n      <img [src]=\"camp.imageUrl\" style=\"height: 300px; width:100%\">\n    </div>\n    <div class=\"col-md-9 col-lg-9 col-sm-12 col-xs-12\">\n      <h2>{{camp.name}}</h2>\n      <b>Types of Influencers required: </b>{{camp.audience}}\n      <br><br>\n      <b>Last Date to Apply: </b>{{camp.lastDate}}\n      <br><br>\n      <b>About The Brand: </b>{{camp.message}}\n      <br><br>\n      <button (click)=\"apply(camp._id)\" *ngIf=\"check(camp._id)\">Apply Now</button>\n      <button (click)=\"apply(camp._id)\" *ngIf=\"!check(camp._id)\" [disabled]=\"true\">Applied</button>\n      </div>\n  </div>\n</div>\n\n\n  <div class=\"container-fluid\" style=\"background-color:#f4f4f4;min-height: 380px;overflow: hidden;\">\n    <div class=\"row\" style=\"margin-top: 3%;margin-bottom: 3%;\">\n      <div class=\"col-md-1 col-lg-1 col-sm-0 col-xs-0\">\n      </div>\n      <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-6\">\n        <h4><a href=\"#About_Us\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">Our Influencers</a></h4>\n        <h4><a routerLink=\"../live\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">Live Campaigns</a></h4>\n        <h4><a routerLink=\"../influencerwelcome\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">Scale Up Your SEO</a></h4>\n        <h4><a href=\"#About_Us\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">Blog</a></h4>\n        <h4><a routerLink=\"../influencerwelcome\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">Contact</a></h4>\n      </div>\n      <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-6 \">\n        <h4><a routerLink=\"infreg\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Influencer SignIn</a></h4>\n        <h4><a routerLink=\"brandreg\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Brand SignIn</a></h4>\n        <h4><a routerLink=\"brandlogin\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Influencer LogIn</a></h4>\n        <h4><a routerLink=\"brandlogin\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Brand LogIn</a></h4>\n      </div>\n      <div class=\"col-md-2 col-lg-2 col-sm-6 col-xs-6 \">\n        <h4><a href=\"#\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Blog</a></h4>\n        <h4><a href=\"#\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Privacy Policy</a></h4>\n      </div>\n      <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-6 text-center\">\n        <h4 style=\"font-size: 25px;color: black;font-family: 'Bree Serif',serif;\">Contact Us<hr style=\"width: 30%;\"></h4>\n        <h4 style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Phone No: 9871370285</h4>\n        <h4 style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">splashfluence@gmail.com</h4>\n      </div>\n    </div>\n    <hr style=\"width: 90%;\">\n       <div class=\"row\" style=\"margin-top: 2%;\">\n           <p style=\"font-family: 'Bree Serif',serif;font-size: 20px;float: left;color: black;margin-top:2%;margin-left:3%;margin-right: 15%;\" class=\"wow fadeInUp\" data-wow-duration=\"2s\">&copy; SplashFluence  2017 All Rights Reserved. Designed by<a href=\"https://www.linkedin.com/in/himanshu-narang-630694130/\"> Himanshu Narang</a> </p>\n          <a href=\"#\" class=\"fa fa-facebook\" style=\"font-size: 25px;background-color: #f4f4f4;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n          <a href=\"#\" class=\"fa fa-twitter\" style=\"font-size: 25px;background-color: #f4f4f4;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n          <a href=\"#\" class=\"fa fa-linkedin\" style=\"font-size: 25px;background-color: #f4f4f4;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n          <a href=\"#\" class=\"fa fa-youtube\" style=\"font-size: 25px;background-color: #f4f4f4;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n          <a href=\"#\" class=\"fa fa-instagram\" style=\"font-size: 25px;background-color: #f4f4f4;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n       </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/camp/camp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splash_service__ = __webpack_require__("../../../../../src/app/splash.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CampComponent = (function () {
    function CampComponent(service, router) {
        this.service = service;
        this.router = router;
        this.camps = [];
        this.applied = false;
        this.influencerDetails = {
            facebook: null, twitter: null,
            instagram: null, youtube: null, blog: null,
            location: '', category: 'fashion',
            applied: []
        };
    }
    CampComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCampaign().then(function (res) {
            console.log(res);
            _this.camps = res;
        }, function (err) { return alert("Could not retrieve campgains"); });
        this.username = this.service.getUsername();
        this.influencer = this.service.getInfluencer();
        this.service.getInfluencerDetails(this.influencer).then(function (res) { return _this.influencerDetails = res; }, function (err) { return alert("Could not get influencer details"); });
    };
    CampComponent.prototype.check = function (id) {
        if (this.influencerDetails.applied.indexOf(id) == -1)
            return true;
        else
            return false;
    };
    CampComponent.prototype.apply = function (id) {
        var _this = this;
        this.service.putCampaign(id, this.influencer).then(function (res) {
            _this.service.putInfluencer(id).then(function (res) { return alert("Applied successfully"); }),
                function (err) { return alert("Could not apply for this campaign"); };
        }, function (err) { return alert("Could not apply for this campaign"); });
    };
    CampComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['../']);
    };
    CampComponent.prototype.coming = function () {
        alert("Coming soon!! Please be patient.");
    };
    return CampComponent;
}());
CampComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-camp',
        template: __webpack_require__("../../../../../src/app/camp/camp.component.html"),
        styles: [__webpack_require__("../../../../../src/app/camp/camp.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__splash_service__["a" /* SplashService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__splash_service__["a" /* SplashService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CampComponent);

var _a, _b;
//# sourceMappingURL=camp.component.js.map

/***/ }),

/***/ "../../../../../src/app/forgot/forgot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nhtml,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,dl,dt,dd,ol,nav ul,nav li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}\narticle, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section {display: block;}\nol,ul{list-style:none;margin:0px;padding:0px;}\nblockquote,q{quotes:none;}\nblockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}\ntable{border-collapse:collapse;border-spacing:0;}\n/*--start editing from here--*/\na{text-decoration:none;}\n.txt-rt{text-align:right;}/* text align right */\n.txt-lt{text-align:left;}/* text align left */\n.txt-center{text-align:center;}/* text align center */\n.float-rt{float:right;}/* float right */\n.float-lt{float:left;}/* float left */\n.clear{clear:both;}/* clear float */\n.pos-relative{position:relative;}/* Position Relative */\n.pos-absolute{position:absolute;}/* Position Absolute */\n.vertical-base{ vertical-align:baseline;}/* vertical align baseline */\n.vertical-top{  vertical-align:top;}/* vertical align top */\nnav.vertical ul li{ display:block;}/* vertical menu */\nnav.horizontal ul li{   display: inline-block;}/* horizontal menu */\nimg{max-width:100%;}\n/*--end reset--*/\nbody {\n    font-family: 'Open Sans', sans-serif;\n    \n    background-attachment: fixed;\n    background-size: cover;\n}\nh1 {\n    font-size: 3em;\n    text-align: center;\n    color: #fff;\n    font-weight: 100;\n}\n/*-- main --*/\nh2 {\n    font-size: 1.1em;\n    text-align: center;\n    padding: 1.2em;\n    background: #02a299;\n    color: #fff;\n    font-weight: 200;\n    letter-spacing: 10px;\n}\n.main {\n    font-family: 'Open Sans', sans-serif;\n    height: 100%;\n    background-attachment: fixed;\n    background-size: cover;\n    padding: 3em 0 0;\n}\n.login-form {\n    width: 35%;\n    margin: 3.5em auto;\n    background: rgba(12, 85, 105, 0.51);\n    padding-bottom: 4em;\n}\n.agileits-top {\n    padding: 2em 3em 3em;\n}\n.login-form input[type=\"text\"], .login-form input[type=\"password\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form input[type=\"url\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form select[type=\"text\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 101%;\n    -moz-appearance: none;\n         appearance: none;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form input[type=\"email\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form input[type=\"tel\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n/*-- input-effect --*/\n.styled-input input:focus ~ label, .styled-input input:valid ~ label {\n    font-size: 1.1em;\n    color: #02a299;\n    top: -2em;\n}\n.styled-input select:focus ~ label, .styled-input select:valid ~ label {\n    font-size: 1.1em;\n    color: #02a299;\n    top: -2em;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.styled-input {\n  width:100%;\n  margin: 2em 0 1em;\n  position: relative;\n}\n\n.styled-input label {\n    color: #fff;\n    padding: 0.8em 1em;\n    position: absolute;\n    top: -2em;\n    left: 0;\n    pointer-events: none;\n    font-weight: 400;\n    font-size: 1.1em;\n    display: block;\n    line-height: 1em;\n}\n.styled-input input ~ span {\n  display: block;\n  width: 0;\n  height:2px;\n  background:#fff;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transition: all 0.125s ease; \n}\n\n.styled-input select ~ span {\n  display: block;\n  width: 0;\n  height:2px;\n  background:#fff;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transition: all 0.125s ease; \n}\n\n.styled-input input:focus { outline: 0; }\n\n.styled-input select:focus { outline: 0; -webkit-appearance: none; -moz-appearance: none; appearance: none;}\n\n.styled-input input:focus ~ span {\n     width: 100%;\n    transition: all 0.075s ease;\n      font-family: 'OpenSans-Regular';\n} \n.styled-input select:focus ~ span {\n     width: 100%;\n     -webkit-appearance: none;\n        -moz-appearance: none;\n             appearance: none;\n    transition: all 0.075s ease;\n      font-family: 'OpenSans-Regular';\n} \n/*-- //input-effect --*/\n.login-form p {\n    font-size: 1em;\n    color: #fff;\n    margin: 1em 0 .5em;\n}\n/*-- checkbox --*/\n.wthree-text input[type=\"checkbox\"] {\n    display: none;\n}\n.wthree-text input[type=\"checkbox\"]+label {\n    position: relative;\n    padding-left: 1.8em;\n    border: none;\n    outline: none;\n    font-size: 1em;\n    color: #fff;\n    cursor: pointer;\n    display: block; \n}\n.wthree-text input[type=\"checkbox\"]+label span:first-child {\n    width: 14px;\n    height: 14px;\n    border: 2px solid #fff;\n    position: absolute;\n    left: 0;\n    top: 2px; \n}\n.wthree-text input[type=\"checkbox\"]:checked+label span:first-child:before {\n    content: \"\";\n    \n    position: absolute;\n    left: 2px;\n    top: 2px;\n    font-size: 10px;\n    width: 10px;\n    height: 10px;\n}\n/*-- //checkbox --*/\n.wthree-text {\n    margin-top: 3em;\n}\n.wthree-text ul li{\n    display:inline-block;\n    float: left;\n}\n.wthree-text ul li:nth-child(2) {\n    float: right;\n}\n.wthree-text ul li a{\n    font-size:1em;\n    color: #fff;\n}\n.wthree-text ul li a:hover{\n    color: #02a299;\n}\n.agileits-bottom{\n    position:relative;\n}\n.agileits-bottom:before {\n    content: '';\n    position: absolute;\n    top: -17px;\n    left: -17px;\n    width: 0;\n    height: 0;\n    border-top: 17px solid transparent;\n    border-right: 18px solid #fff;\n    transition:.5s all ease;\n}\n.agileits-bottom:after {\n    content: '';\n    position: absolute;\n    top: -17px;\n    right: -17px;\n    width: 0;\n    height: 0;\n    border-left: 17px solid #fff;\n    border-top: 17px solid transparent;\n    transition:.5s all ease;\n}\n.agileits-bottom input[type=\"submit\"] {\n    font-size: 1.5em;\n    color: #02a299;\n    background: #fff;\n    outline: none;\n    cursor: pointer;\n    padding: 1em 0;\n    -webkit-appearance: none;\n    border: none;\n    width: 106%; \n    margin-left: -0.7em;\n    text-transform: uppercase; \n}\n.agileits-bottom input[type=\"submit\"]:hover {\n    color: #FFF;\n    background: #02a299;\n    transition:.5s all ease;\n}\n.agileits-bottom:hover:before {\n    border-right-color:#02a299;\n}\n.agileits-bottom:hover:after {\n    border-left-color:#02a299;\n}\n/*-- //main --*/\n/*-- copyright --*/\n.copyright {\n    margin: 2em 0;\n    text-align: center;\n}\n.copyright p {\n    font-size: 1em;\n    color: #fff;\n    line-height:1.8em;\n}\n.copyright p a{\n    color: #fff;\n    transition: 0.5s all;\n}\n.copyright p a:hover{\n    color: #000;    \n}\n/*-- //copyright --*/\n/*-- responsive-design --*/\n@media(max-width:1440px){\n.agileits-bottom input[type=\"submit\"] { \n    width: 106.8%; \n}\n}\n@media(max-width:1366px){\n.login-form {\n    width: 37%; \n    margin: 3em auto;\n}\n}\n@media(max-width:1280px){\n.login-form {\n    width: 40%; \n}\n}\n@media(max-width:1080px){\n.main {\n    padding: 2em 0 0;\n}\n.login-form {\n    width: 48%;\n}\nh1 {\n    font-size: 2.8em; \n}\n}\n@media(max-width:1024px){\nh1 {\n    font-size: 2.6em;\n}\n.login-form {\n    width: 50%;\n    margin: 2em auto;\n}\n}\n@media(max-width:991px){\nh1 {\n    font-size: 2.5em;\n}\n.login-form {\n    width: 52%; \n}\n}\n@media(max-width:900px){\n.agileits-top {\n    padding: 1em 3em 3em;\n}\n.login-form { \n    width: 56%;\n    padding-bottom: 3.5em;\n}\n}\n@media(max-width:800px){\n.login-form {\n    width: 63%; \n}\n.agileits-top {\n    padding: 1em 2.5em 2.5em;\n}\n.agileits-bottom input[type=\"submit\"] {\n    font-size: 1.3em; \n    margin-left: -0.8em; \n}\n}\n@media(max-width:768px){\nh1 {\n    font-size: 2.3em;\n}\n.agileits-bottom input[type=\"submit\"] {\n    width: 107%;\n} \n} \n@media (max-width: 736px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 107.5%;\n} \n} \n@media(max-width:667px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 108%;\n    font-size: 1.1em;\n    margin-left: -0.9em;\n}\n} \n@media(max-width:640px){\n.login-form {\n    width: 67%;\n}\n.agileits-bottom input[type=\"submit\"] {\n    width: 108%;\n}\n}\n@media(max-width:600px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 108.7%;\n}\n}\n@media(max-width:480px){\nh1 {\n    font-size: 1.8em;\n}\nh2 {\n    font-size: 1em; \n    padding: 1em; \n    letter-spacing: 7px;\n}\n.agileits-top {\n    padding: 1em 1.5em 1.5em;\n}\n.login-form input[type=\"text\"], .login-form input[type=\"password\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.login-form input[type=\"url\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.login-form input[type=\"email\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.login-form input[type=\"tel\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.styled-input label { \n    padding: 0.6em 1em; \n    font-size: 0.9em; \n}\n.styled-input input:focus ~ label, .styled-input input:valid ~ label {\n    font-size: 1em; \n    top: -1.5em;\n}\n.styled-input select:focus ~ label, .styled-input select:valid ~ label {\n    font-size: 1em; \n    top: -1.5em;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.wthree-text {\n    margin-top: 2em;\n}\n.wthree-text input[type=\"checkbox\"]+label { \n    font-size: 0.9em; \n    padding-left: 1.5em;\n}\n.wthree-text input[type=\"checkbox\"]+label span:first-child {\n    width: 12px;\n    height: 12px; \n}\n.wthree-text ul li a {\n    font-size: 0.9em; \n}\n.agileits-bottom input[type=\"submit\"] {\n    font-size: 1em;\n    margin-left: -0.6em;\n    width: 105.3%;\n    padding: 0.8em 0;\n}\n.login-form { \n    padding-bottom: 3em;\n}\n.login-form {\n    width: 80%;\n}\n.copyright p {\n    font-size: 0.9em; \n}\n.agileits-bottom:before { \n    top: -11px;\n    left: -11px; \n    border-top: 11px solid transparent;\n    border-right: 11px solid #fff; \n}\n.agileits-bottom:after { \n    top: -11px;\n    right: -11px; \n    border-left: 11px solid #fff;\n    border-top: 11px solid transparent; \n}\n.wthree-text input[type=\"checkbox\"]:checked+label span:first-child:before { \n    left: 1px;\n    top: 1px; \n}\n}\n@media(max-width:414px){\n.main {\n    padding: 1.5em 0 0;\n}\n.styled-input { \n    margin: 1.5em 0 1em; \n}\n.copyright p { \n    padding: 0 1em;\n}\n.agileits-bottom:before {\n    top: -10px;\n    left: -10px;\n    border-top: 10px solid transparent;\n    border-right: 10px solid #fff;\n}\n.agileits-bottom:after { \n    top: -10px;\n    right: -10px;\n    border-left: 10px solid #fff;\n    border-top: 10px solid transparent; \n}\n.agileits-bottom input[type=\"submit\"] { \n    width: 106%; \n}\n}\n@media(max-width:384px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 106.8%;\n    font-size: 0.9em;\n    margin-left: -0.7em;\n}\n}\n@media(max-width:375px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 106.5%;\n    margin-left: -0.6em;\n}\nh1 {\n    font-size: 1.6em;\n}\nh2 { \n    letter-spacing: 5px;\n}\n.login-form { \n    margin: 1.5em auto;\n}\n.wthree-text ul li { \n    float: none;\n    display: block;\n}\n.wthree-text ul li:nth-child(2) {\n    float: none;\n    margin-top: 1em;\n}\n.wthree-text {\n    margin-top: 1.5em;\n}\n}\n@media(max-width:320px){\nh2 {\n    letter-spacing: 3px;\n    padding: 0.8em;\n}\n.login-form {\n    width: 85%;\n}\n.agileits-top {\n    padding:0.5em 1em 1.5em;\n}\n.login-form input[type=\"text\"], .login-form input[type=\"password\"] {\n    font-size: 0.85em;\n    padding: 0.6em;\n    width: 88%;\n}\n.login-form input[type=\"url\"] {\n    font-size: 0.85em;\n    padding: 0.6em;\n    width: 88%;\n}\n.styled-input label {\n    padding: 0.6em;\n    font-size: 0.85em;\n}\n.styled-input input:focus ~ label, .styled-input input:valid ~ label {\n    font-size: 0.9em;\n    top: -1em;\n}\n.styled-input select:focus ~ label, .styled-input select:valid ~ label {\n    font-size: 0.9em;\n    top: -1em;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.login-form {\n    padding-bottom: 2em;\n}\n.agileits-bottom input[type=\"submit\"] {\n    width: 107%;\n    margin-left: -0.6em;\n}\n.styled-select {\n   background: url(http://i62.tinypic.com/15xvbd5.png) no-repeat 96% 0;\n   height: 29px;\n   overflow: hidden;\n   width: 240px;\n}\n.slate   { background-color: #ddd; }\n/*-- //responsive-design --*/\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" style=\"background-image: url('assets/images/bbb.jpg')\"> \n  <h1>Reset Password</h1>\n  <div class=\"login-form\" style=\"min-height: 300px;overflow: hidden;\"> \n     <h2>Reset Password</h2> \n     <form action=\" \" method=\"post\">\n        <div class=\"agileits-top\">\n           <div class=\"styled-input\">\n              <input type=\"password\" name=\"USERNAME\" id=\"USERNAME\" required=\"\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"password\">\n              <label style=\"color: white;\">PASSWORD</label>\n              <span></span>\n           </div>\n           <div class=\"styled-input\">\n              <input type=\"password\" name=\"PASSWORD\" id=\"PASSWORD\" required=\"\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"confirm\"> \n              <label style=\"color: white;\">CONFIRM PASSWORD</label>\n              <span></span>\n           </div> \n        </div>\n     <div class=\"agileits-bottom\">\n        <input type=\"submit\" (click)=\"reset()\">\n     </div>\n     </form>\n  </div>   \n</div>"

/***/ }),

/***/ "../../../../../src/app/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splash_service__ = __webpack_require__("../../../../../src/app/splash.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotComponent = (function () {
    function ForgotComponent(route, service) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.route.params.subscribe(function (params) { return _this.token = params.resetToken; });
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent.prototype.reset = function () {
        if (this.password == this.confirm) {
            this.service.resetPassword(this.password, this.token).then(function (res) { return alert("Password changed successfully"); }, function (err) { return alert("Could not reset password"); });
        }
        else
            alert("The password donot match");
    };
    return ForgotComponent;
}());
ForgotComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-forgot',
        template: __webpack_require__("../../../../../src/app/forgot/forgot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/forgot/forgot.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__splash_service__["a" /* SplashService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__splash_service__["a" /* SplashService */]) === "function" && _b || Object])
], ForgotComponent);

var _a, _b;
//# sourceMappingURL=forgot.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Top Navigation Bar-->\n<div id=\"main_container\">\n  <header class=\"main-header\" id=\"header\">\n    <div class=\"bg-color\">\n        <!--nav-->\n        <video playsinline autoplay muted loop poster id=\"bgvid\">\n            <source src=\"assets/videos/output.mp4\" type=\"video/mp4\">\n        </video>\n        <div class=\"overlay-desc wow fadeInUp\" style=\"min-height:200px;overflow:hidden;\" data-wow-duration=\"1s\">\n            <img src=\"assets/images/logo2.png\" id=\"second\" style=\"position:absolute; height:40%\">\n            <h1 style=\"font-family: 'Luckiest Guy', cursive;color:white; display:block; clear:both;\" id=\"first\">SPLASHFLUENCE</h1>\n        </div>\n        \n        <!--/ nav-->\n          <nav class=\"navbar navbar-default navbar-fixed-top\" style=\"background-color: transparent;padding: 15px 0\" id=\"something\">\n<div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n        <button type=\"button\" data-target=\"#navbarCollapse\" data-toggle=\"collapse\" class=\"navbar-toggle\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n        <a href=\"#\" class=\"navbar-brand\" style=\"font-family: 'Bree Serif',Serif;color:white;font-size: 25px;\"><img src=\"assets/images/logo2.png\" style=\"height:150%; padding-bottom:20%\"></a>\n    </div>\n    <!-- Collection of nav links and other content for toggling -->\n    <div id=\"navbarCollapse\" class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav navbar-right\">\n            <li><a href=\"#About_Us\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">About Us</a></li>\n            <li><a href=\"#How_It_Works\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">How It Works</a></li>\n            <li><a href=\"#Why_Influencer_Marketing\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Why Influencer Marketing</a></li>\n            <li><a href=\"#Influencers\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Top Influencers</a></li>\n            <li><a href=\"#Get_Started_Now\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Get started Now</a></li>\n            <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Login <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n                <li><a routerLink=\"brandlogin\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: red;\">Influencer</a></li>\n              <li><a routerLink=\"brandlogin\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: red;\">Brand</a></li>\n            </ul>\n          </li>\n        </ul>\n    </div>\n</div>\n</nav>\n    </div>\n</header>\n\n</div>  \n\n<!--Video in the background ends-->\n\n<!--SLIDE NO 1--> \n<div id=\"About_Us\" style=\"min-height: 600px;overflow: hidden;width: 100%;background-color: white;\">\n<h1 style=\"text-align: center;padding-top: 15px;font-size: 35px;font-family: 'Bree Serif', serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">THE #1 INFLUENCER MARKETING PLATFORM</h1>\n    <p style=\"text-align: center;font-size: 18px;font-family: 'Bree Serif', serif;padding-left: 10px;padding: 10px;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">\"The Startup platform makes it easy to recruit your best social influencers, brand ambassadors and authentic social content that inspires product awareness and purchasing decisions for consumers.\"</p>\n        <div class=\"col-md-6 col-lg-6 col-sm-12 col-xs-12 text-center\">\n            <img style=\"border-radius: 50%;\" src=\"assets/images/a1.png\">\n            <h3 style=\"font-family: 'Bree Serif', serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">Vast Influencer Database</h3>\n             <p style=\"padding-bottom: 25px;font-family: 'Bree Serif', serif;font-size: 18px;padding-left: 10px;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">\"Maintaining the largest and the most curated influencer database in the world, we house over 1,00,000 influencers across the most popular social media channels.\"</p>\n\n             <img style=\"border-radius: 50%;\" src=\"assets/images/a3.png\">\n             <h3 style=\"font-family: 'Bree Serif', serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">Find Right Influencers For Your Brand</h3>\n               <p style=\"padding-bottom: 25px;font-family: 'Bree Serif', serif;font-size: 18px;padding-left: 10px;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">“We connect you with the top influencers on YouTube, Instagram, Twitter and Facebook. This is done by keeping your ad campaign, category, location, language, demography in mind. We help you hire, communicate and approve completed content on the go – all in one place.\"</p>\n        </div>\n        <div class=\"col-md-6 col-lg-6 col-sm-12 col-xs-12 text-center\">\n            <img style=\"border-radius: 50%\" src=\"assets/images/a2.png\">\n            <h3 style=\"font-family: 'Bree Serif', serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">Content Creation</h3>\n            <p style=\"padding-bottom: 25px;font-family: 'Bree Serif', serif;font-size: 18px;padding-right: 10px;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">You can create unique content to promote your brand through campaigns. You can use links, images, video and various other widgets to build your content. Once the content is created our experts review it before it goes live.\"</p>\n\n            <img style=\"border-radius: 50%\" src=\"assets/images/a4.png\">\n            <h3 style=\"font-family: 'Bree Serif', serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">Measure Effectiveness Of Your Campaign</h3>\n            <p style=\"padding-bottom: 25px;font-family: 'Bree Serif', serif;font-size: 18px;padding-right: 10px;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">\"Scale your success with standardized metrics. Get live monitoring of engagements, impressions, views, tweets, re-tweets, like ratio, comments, social shares etc. of the content you made with the creators.This is the best way to measure what works and go bigger\"</p>\n        </div>\n</div>\n<!--SLIDE NO 1 CLOSED-->\n<!--FUN FACT ONE -->\n\n<!--FUN FACT ONE CLOSED-->\n\n<!--SLIDE NO 2-->\n<div id=\"How_It_Works\" style=\"min-height: 700px;overflow: hidden; width: 100%;background-color: white;background-image: url(assets/images/Agency2.jpg);background-size: cover;\">\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12 text-center\" style=\"width: 100%;\">\n            <ul class=\"nav nav-pills center-pills\" style=\"margin-top: 3%;text-align: center;\">\n               <li><a data-toggle=\"pill\" href=\"#Agency\" style=\"font-size: 35px;\"><button id=\"js-trigger-overlay\" type=\"button\" style=\"font-size: 20px;font-family: 'Bree Serif',serif;\">Agency</button></a></li>\n               <li><a data-toggle=\"pill\" href=\"#Platform\" style=\"font-size: 35px;\"><button id=\"js-trigger-overlay\" type=\"button\" style=\"font-size: 20px;font-family: 'Bree Serif',serif;\">Platform</button></a></li>\n            </ul>\n            <div class=\"tab-content\">\n               <div id=\"Agency\" class=\"tab-pane fade in active\">\n                  <h3 style=\"text-align: center;color: white;margin-top: 3%;margin-bottom: 3%;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">YOUR DEDICATED TEAM WILL EXECUTE<br/><br/> CAMPAIGNS END-TO-END</h3>\n                  <div class=\"row\" style=\"margin-bottom: 3%;\">\n                    <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-6 text-center\">\n                        <img src=\"assets/images/bg/a1.png\" style=\"border-radius: 50%;\">\n                        <h4 style=\"color: white;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">DEDICATED MANAGER</h4>\n                        <p style=\"color: white;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">A dedicated account manager will be<br/> your single point of contact for the<br/> campaign.</p>\n                    </div> \n                    <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-6 text-center\">\n                        <img src=\"assets/images/bg/a2.png\" style=\"border-radius: 50%;\">\n                        <h4 style=\"color: white;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">PROFESSIONAL BRIEFS</h4>\n                        <p style=\"color: white;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">Authentic and engaging content is <br/>generated by briefs that inspire<br/> content creators.</p>\n                    </div> \n                    <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-6 text-center\">\n                        <img src=\"assets/images/bg/a3.png\" style=\"border-radius: 50%;\">\n                        <h4 style=\"color: white;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">HAND-PICKED CREATORS</h4>\n                        <p style=\"color: white;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">Invitation-only network of creators is <br/>second to none. We’ll find the perfect<br/> content creators for your campaign.</p>\n                    </div> \n                    <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-6 text-center\">\n                        <img src=\"assets/images/bg/a4.png\" style=\"border-radius: 50%;\">\n                        <h4 style=\"color: white;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">MANAGEMENT</h4>\n                        <p style=\"color: white;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">All moving parts of a campaign are<br/> handled by us, from negotiation to<br/> media scheduling.</p>\n                    </div> \n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12 text-center\">\n                        <img src=\"assets/images/bg/a5.png\" style=\"border-radius: 50%;\">\n                        <h4 style=\"color: white;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">GET RESULTS</h4>\n                        <p style=\"color: white;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">View realtime metrics for your<br/> campaign</p>\n                    </div>\n                  </div>\n                  <div class=\"row\" style=\"margin-top: 3%;margin-bottom: 3%;\">\n                    <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12 text-center\">\n                        <button id=\"js-trigger-overlay\" type=\"button\" style=\"font-size: 20px;font-family: 'Bree Serif',serif;\">Get In Touch</button>\n                    </div>    \n                  </div>\n                </div>\n                <div id=\"Platform\" class=\"tab-pane fade\">\n                  <h3 style=\"text-align: center;color: white;margin-top: 3%;margin-bottom: 3%;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">WRITE YOUR OWN BRIEFS & SET UP AS MANY<br/><br/> CAMPAIGNS AS YOU LIKE</h3>\n                  <div class=\"row\" style=\"margin-bottom: 3%;\">\n                    <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-6 text-center\">\n                        <img src=\"assets/images/bg/b1.png\" style=\"border-radius: 50%;\">\n                        <h4 style=\"color: white;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">CREATE A BRIEF</h4>\n                        <p style=\"color: white;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">Steer content creators in the right<br/> direction</p>\n                    </div> \n                    <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-6 text-center\">\n                        <img src=\"assets/images/bg/p2.png\" style=\"border-radius: 50%;\">\n                        <h4 style=\"color: white;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">FIND INFLUENCERS</h4>\n                        <p style=\"color: white;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">Search for content creators, or let them<br/> find you</p>\n                    </div> \n                    <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-6 text-center\">\n                        <img src=\"assets/images/bg/p3.png\" style=\"border-radius: 50%;\">\n                        <h4 style=\"color: white;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">NEGOTIATE</h4>\n                        <p style=\"color: white;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">View and agree on rates and digital<br/>rights</p>\n                    </div> \n                    <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-6 text-center\">\n                        <img src=\"assets/images/bg/p4.png\" style=\"border-radius: 50%;\">\n                        <h4 style=\"color: white;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">MANAGE RELATIONSHIPS</h4>\n                        <p style=\"color: white;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">Chat, manage logistics and make<br/> secure payments</p>\n                    </div> \n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12 text-center\">\n                        <img src=\"assets/images/bg/p5.png\" style=\"border-radius: 50%;\">\n                        <h4 style=\"color: white;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">GET RESULTS</h4>\n                        <p style=\"color: white;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">View Realtime metrics for your<br/>campaign</p>\n                    </div>\n                  </div>\n                  <div class=\"row\" style=\"margin-top: 3%;margin-bottom: 3%;\">\n                    <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12 text-center\">\n                        <button id=\"js-trigger-overlay\" type=\"button\" style=\"font-size: 20px;font-family: 'Bree Serif',serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">Get In Touch</button>\n                    </div>    \n                  </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n<!--SLIDE NO 2 CLOSED-->\n<!--FUN FACT -->\n<!--FUN FACT 2 CLOSED-->\n\n<!--SLIDE NO 3-->\n<div id=\"Why_Influencer_Marketing\" style=\"min-height: 600px;overflow: hidden; width: 100%;background-color: white;\">\n<p style=\"font-size: 40px; color: purple;text-align:center;font-family: 'Bree Serif', serif;margin-top: 3%;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">WHY INFLUENCER MARKETING</p><br/>\n<p style=\"font-size: 30px;color: black;margin-left: 5%;font-family: 'Bree Serif', serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">SplashFluence Enables Advertisers To Go Beyond..</p><br/><br/>\n   \n  <div class=\"col-md-4 text-center\">\n    <p style=\"text-align: center;color:red;font-size: 30px;font-family: 'Bree Serif', serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">Guaranteed Posts</p>\n    <p style=\"color: black;font-size: 20px;font-family: 'Bree Serif', serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">Unlike traditional public relations,Social sponsorships are contractual agreements between the advertisers and the content creators. Advertisers pay only when a post is made.\n  </div>\n  <div class=\"col-md-4 text-center\">\n    <p style=\"text-align: center;color:red;font-size: 30px;font-family: 'Bree Serif', serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">Trackable Results</p>\n    <p style=\"color: black;font-size: 20px;font-family: 'Bree Serif', serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">Sponsorships enable advertisers to embed tracking links and pixels. They are able to report actual traffic and conversions delivered to their destination site to demonstrate ROI</p>\n  </div>\n  <div class=\"col-md-4 text-center\">\n    <p style=\"text-align: center;color:red;font-size: 30px;font-family: 'Bree Serif', serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">Scalable</p>\n    <p style=\"color: black;font-size: 20px;font-family: 'Bree Serif', serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">When combined with a platform like splashfluence, social sponsorships are more scalable than other methods of social activation. Advertisers can engage at larger scale with repeatability.</p>\n  </div>  \n  <div class=\"col-md-6 col-lg-6 col-sm-12 col-xs-12 text-center desktopgraph\">\n    <h3 style=\"background-color: white;font-family: 'Bree Serif', serif;\">Marketers Effectiveness Of Approach(1-10 Scale)</h3>\t\n    <div id=\"chartContainer\" style=\"height: 300px; width: 100%;margin-bottom: 3%;\"></div>\n  </div> \n  <div class=\"col-md-6 col-lg-6 col-sm-12 col-xs-12 text-center desktopgraph\">\n   <div class=\"graph\">\n    <h3 style=\"background-color: white;font-family: 'Bree Serif', serif;\">% Marketers Who Used In Past Years</h3>\n    <div id=\"chartdiv\" style=\"height: 300px;width: 100%;\"></div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-lg-6 col-sm-12 col-xs-12 text-center mobgraph\">\n    <h3 style=\"background-color: white;font-family: 'Bree Serif', serif;\">Marketers Effectiveness Of Approach(1-10 Scale)</h3>  \n    <img src=\"assets/images/g1.PNG\" style=\"width: 100%;\">\n  </div> \n  <div class=\"col-md-6 col-lg-6 col-sm-12 col-xs-12 text-center mobgraph\">\n    <h3 style=\"background-color: white;font-family: 'Bree Serif', serif;\">% Marketers Who Used In Past Years</h3>\n    <img src=\"assets/images/g2.PNG\" style=\"width: 100%;\">\n  </div>\n\n\n</div>\n<!--SLIDE NO 3 CLOSED-->\n<!--FUN FACT 3-->\n<div class=\"parallax\" style=\"background-image: url(assets/images/parallax1.jpg);\">\n</div>\n<!--FUN FACT 3 CLOSED-->\n\n<!--SLIDE NO 4-->\n<div id=\"Influencers\" style=\"height: auto;width: 100%;\">\n<div class=\"top10\" style=\"height:auto;overflow: hidden; background-color: black;\">\n<h2 style=\"color: white; margin-bottom: 3%;font-family: 'Bree Serif', serif; text-align: center;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\" class=\"center\">TOP INFLUENCERS</h2>\n<ul class=\"nav nav-pills\" style=\"margin-bottom: 3%;margin-left: 25%;margin-right: 10%;\">\n<li class=\"active;\"><a data-toggle=\"tab\" href=\"#Fashion\" style=\"background-color: #f4f4f4;color: black;font-family: 'Bree Serif', serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">FASHION</a></li>\n<li><a data-toggle=\"tab\" href=\"#Beauty\" style=\"background-color: #f4f4f4;color: black;font-family: 'Bree Serif', serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">BEAUTY & MAKEUP</a></li>\n<li><a data-toggle=\"tab\" href=\"#Fitness\" style=\"background-color: #f4f4f4;color: black;font-family: 'Bree Serif', serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">FITNESS</a></li>\n<li><a data-toggle=\"tab\" href=\"#Auto\" style=\"background-color: #f4f4f4;color: black;font-family: 'Bree Serif', serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">AUTO</a></li>\n<li><a data-toggle=\"tab\" href=\"#Travel\" style=\"background-color: #f4f4f4;color: black;font-family: 'Bree Serif', serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">TRAVEL AND LIFESTYLE</a></li>\n\n</ul>\n\n<div class=\"tab-content\">\n<div id=\"Fashion\" class=\"tab-pane fade in active\">\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/fashion/aakritirana.jpg\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Aakriti Rana</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/aakritiranagill/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/fashion/radhikaseth.jpg\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Radhika Seth</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/radhikasethh/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/fashion/lylagupta.jpg\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Lyla Gupta</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/lylaguptaa/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/fashion/sherryshroff.jpg\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Sherry Shroff</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/sherryshroff/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/fashion/komal.jpg\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>komal</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a href=\"https://www.instagram.com/thecollegecouture/?hl=en\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/fashion/arbazz.jpg\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Arbazz</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/baazu7/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/fashion/sakshi.jpg\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Sakshi</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/sakshix/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/fashion/sejal.jpg\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Sejal</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/sejalkumar1195/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n\n</div>\n\n<div id=\"Beauty\" class=\"tab-pane fade\">\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/beautyandmakeup/kriti.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Kriti</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/kritids/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/beautyandmakeup/flawlessbyzareen.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Flaw Less By Zareen</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/flawlessbyzareen/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/beautyandmakeup/manishmalhotra.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Manish Malhotra</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/manishmalhotra05/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/beautyandmakeup/makeupbyprernakhullar.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Prerna Khullar</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/makeupbyprernakhullar/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/beautyandmakeup/meghna.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Meghnaroda</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/makeupbymeghnaroda/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/beautyandmakeup/muajyoti.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Muajyoti</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/mua_jyoti/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/beautyandmakeup/rabiamakeupartist.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Rabia</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/rabiamakeupartist/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/beautyandmakeup/wedmegood.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Wed Me Good</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/wedmegood/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n\n</div>\n\n\n<div id=\"Fitness\" class=\"tab-pane fade\">\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/fitness/vidyutjammwal.jpg\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Vidyut Jammwal</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/mevidyutjammwal/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/fitness/gurumann.jpg\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Gurumann</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/gurumann/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/fitness/sapnavyaspatel.jpg\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>SapnaVyas Patel</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/sapnavyaspatel/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/fitness/vasumittal.jpg\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Vasu Mittal</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/vasumittal/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/fitness/randeephuda.jpg\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Randeep Huda</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/randeephooda/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/fitness/banij.jpg\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Banij</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/banij/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/fitness/rohitkhandelwal.jpg\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Rohit Khnadelwal</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/rohit_khandelwal77/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/fitness/sahilkhan.jpg\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Sahil Khan</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/sahilkhan/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n\n</div>\n <div id=\"Auto\" class=\"tab-pane fade\">\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/auto/carblogindia.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Car Blog India</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/carblogindia/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/auto/dadesignindia.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>DadesignIndia</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/dadesignindia/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/auto/indiacarnews.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>India Car News</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/indiacarnews/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/auto/indianautosblog.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Indian Autos Blog</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/indianautosblog/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/auto/motorbeam.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Motor Beam</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/motorbeam/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/auto/motoroctane.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Motor Octane</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/motoroctane/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/auto/rushlane.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Rush Lane</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/rushlane/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/auto/zeeshan.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Zeeshan</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/zeeshan7004/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n\n</div>\n <div id=\"Travel\" class=\"tab-pane fade\">\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/travelandlifestyle/deekshakhurana.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Deeksha Khurana</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/deekshakhurana/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/travelandlifestyle/thatbohogirl.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Thatbohogirl</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/thatbohogirl/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/travelandlifestyle/shauryasanadhya.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Shaurya Sanadhya</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/shauryasanadhya/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/travelandlifestyle/ridhimavohra.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Ridhima Vohra</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/ridhimavohra/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/travelandlifestyle/kanika868.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Kanika</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/kanika868/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/travelandlifestyle/muchtoomuch.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Muchtoomuch</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/muchtoomuch.in/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/travelandlifestyle/thesnobjournal.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Thesnobjournal</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/thesnobjournal/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n<div class=\"hovereffect\">\n    <img class=\"img-responsive\" src=\"assets/images/travelandlifestyle/sherryshroff.png\" alt=\"\">\n    <div class=\"overlay\">\n        <h2>Sherry Shroff</h2>\n        <div class=\"rotate\">\n            <p class=\"group1\">\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a routerLink=\"brandreg\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </p>\n                <hr>\n                <hr>\n            <p class=\"group2\">\n                <a href=\"https://www.instagram.com/sherryshroff/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n                \n                <a routerLink=\"brandreg\">\n                  <i class=\"fa fa-youtube\"></i>\n                </a>  \n            </p>\n        </div>\n    </div>\n</div>\n</div>\n\n</div>\n\n</div>\n</div>\n</div>\n\n<div  class=\"divider\" style=\"height:40px; background-color: black;\">\n    </div>\n<!--SLIDE NO 4 CLOSED-->\n<!-- FUN FACT 4-->\n\n<!--FUN FACT 4 CLOSED-->\n\n<!-- SLIDE NO 5 -->\n<div id=\"Get_Started_Now\" style=\"min-height: 350px;overflow: hidden; width: 100%;background-color: #f4f4f4\">\n<p style=\"font-size: 50px;color: black;text-align: center;margin-bottom: 1%;margin-top:2%;font-family: 'Bree Serif', serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">GET STARTED NOW</p>\n<p style=\"font-size: 30px;color: black;text-align: center;margin-bottom: 3%;font-family: 'Bree Serif', serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">Trusted by 13,521 Brands and 50,000 Creators</p>\n<div class=\"col-md-6 col-lg-6 col-sm-12 col-xs-12 text-center\">\n  <a routerLink=\"/infreg\"><button class=\"button\" style=\"background-color: yellow;\"><span style=\"font-family: 'Bree Serif', serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">I'm an Influencer.</span></button></a>\n</div>\n<div class=\"col-md-6 col-lg-6 col-sm-12 col-xs-12 text-center\">\n  <a routerLink=\"/brandreg\"><button class=\"button\"><span style=\"font-family: 'Bree Serif', serif;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">I'm a Brand.</span></button></a>\n</div>\n</div>\n<!--SLIDE NO 5 CLOSED-->\n<!--FUN FACT 5-->\n<div class=\"parallax\" style=\"background-image: url(assets/images/parallax2.jpg);\">\n  <div class=\"col-md-6 col-lg-6 col-sm-0 col-xs-0\">\n  </div>      \n  <div class=\"col-md-6 col-lg-6 col-sm-12 col-xs-12\">\n    <h1 style=\"color: white;margin-top: 5%;font-family: 'Bree Serif',serif;text-align: center;\">Influencers</h1><br/>\n    <p style=\"color: white;float:right;font-family: 'Bree Serif',serif;font-size: 22px;\">We strategize creative opportunities for our influencers to become advocates with brands they love.</p>\n    <p style=\"color: white;float:right;font-family: 'Bree Serif',serif;font-size: 22px;\">Joining SplashFluence puts you in front of marketers from top brands that are searching to connect with content creators like you.</p> \n    <button id=\"js-trigger-overlay\" type=\"button\" style=\"font-size: 20px;font-family: 'Bree Serif',serif;\" routerLink=\"infreg\">Register Now</button>\n  </div>\n</div>\n<!-- FUN FACT % CLOSED-->\n<!--FOOTER-->\n<div class=\"container-fluid\" style=\"background-color: white;min-height: 380px;overflow: hidden;\">\n  <div class=\"row\" style=\"margin-top: 3%;margin-bottom: 3%;\">\n    <div class=\"col-md-1 col-lg-1 col-sm-0 col-xs-0\">\n    </div>\n    <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-6\">\n      <h4><a href=\"#About_Us\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">About Us</a></h4>\n      <h4><a href=\"#About_Us\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">How It Works</a></h4>\n      <h4><a href=\"#About_Us\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">Why Influencer Marketing</a></h4>\n      <h4><a href=\"#About_Us\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">Top Influencers</a></h4>\n      <h4><a href=\"#About_Us\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">Get started Now</a></h4>\n    </div>\n    <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-6 \">\n      <h4><a routerLink=\"infreg\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Influencer SignIn</a></h4>\n      <h4><a routerLink=\"brandreg\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Brand SignIn</a></h4>\n      <h4><a routerLink=\"brandlogin\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Influencer LogIn</a></h4>\n      <h4><a routerLink=\"brandlogin\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Brand LogIn</a></h4>\n    </div>\n    <div class=\"col-md-2 col-lg-2 col-sm-6 col-xs-6 \">\n      <h4><a href=\"#\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Blog</a></h4>\n      <h4><a href=\"#\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Privacy Policy</a></h4>\n    </div>\n    <div class=\"col-md-3 col-lg-3 col-sm-12 col-xs-12 text-center\">\n      <h4 style=\"font-size: 25px;color: black;font-family: 'Bree Serif',serif;\">Contact Us</h4>\n      <h4 style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Phone No: 9871370285</h4>\n      <h4 style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">splashfluence@gmail.com</h4>\n    </div>\n  </div>\n  <hr style=\"width: 90%;\">\n  <div class=\"row\" style=\"margin-top: 2%;\">\n      <p style=\"font-family: 'Bree Serif',serif;font-size: 20px;float: left;color: black;margin-top:2%;margin-left:3%;margin-right: 15%;\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">&copy; SplashFluence  2017 All Rights Reserved. Designed by<a href=\"https://www.linkedin.com/in/himanshu-narang-630694130/\"> Himanshu Narang</a> and <a href=\"https://www.linkedin.com/in/dhruv-mongia-757862143/\">Dhruv Mongia</a> </p>\n    <a href=\"#\" class=\"fa fa-facebook\" style=\"font-size: 25px;background-color: white;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n     <a href=\"#\" class=\"fa fa-twitter\" style=\"font-size: 25px;background-color: white;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n    <a href=\"#\" class=\"fa fa-linkedin\" style=\"font-size: 25px;background-color: white;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n    <a href=\"#\" class=\"fa fa-youtube\" style=\"font-size: 25px;background-color: white;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n    <a href=\"#\" class=\"fa fa-instagram\" style=\"font-size: 25px;background-color: white;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splash_service__ = __webpack_require__("../../../../../src/app/splash.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        if (token != null) {
            this.service.redirect(token).then(function (res) {
                var brand = localStorage.getItem('isBrand');
                if (brand == 'true')
                    _this.router.navigate(['brandwelcome']);
                else
                    _this.router.navigate(['influencerwelcome']);
            });
        }
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            animationDuration: 2000,
            backgroundColor: "white",
            dataPointWidth: 20,
            data: [
                {
                    type: "bar",
                    bevelEnabled: true,
                    color: "#dc3cdc",
                    dataPoints: [
                        { y: 4.8, label: "Newspaper Advertising" },
                        { y: 5.3, label: "Magazine Advertising" },
                        { y: 5.4, label: "Radio Advertising" },
                        { y: 6, label: "Television Program Official" },
                        { y: 6.2, label: "Television Program Embed" },
                        { y: 6.3, label: "Online Display Advertising" },
                        { y: 6.5, label: "Television Advertising" },
                        { y: 6.8, label: "Celebrity Endorsement" },
                        { y: 7.2, label: "Experiential Marketing" },
                        { y: 7.2, label: "Influencer Marketing" }
                    ]
                }
            ]
        });
        chart.render();
        var chart = AmCharts.makeChart("chartdiv", {
            "type": "serial",
            "theme": "light",
            "handDrawn": true,
            "handDrawScatter": 3,
            "legend": {
                "useGraphSettings": true,
                "markerSize": 12,
                "valueWidth": 0,
                "verticalGap": 0
            },
            "dataProvider": [{
                    "year": "Online Display",
                    "income": 59
                }, {
                    "year": "Influencer Marketing",
                    "income": 53
                }, {
                    "year": "Experiential Marketing",
                    "income": 40
                }, {
                    "year": "Celebrity Endorsement",
                    "income": 19
                }],
            "valueAxes": [{
                    "minorGridAlpha": 0.08,
                    "minorGridEnabled": true,
                    "position": "top",
                    "axisAlpha": 0
                }],
            "startDuration": 1,
            "graphs": [{
                    "balloonText": "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b></span>",
                    "title": "Percentage",
                    "type": "column",
                    "fillAlphas": 0.8,
                    "valueField": "income"
                }, {
                    "balloonText": "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b></span>",
                    "bullet": "round",
                    "bulletBorderAlpha": 1,
                    "bulletColor": "#FFFFFF",
                    "useLineColorForBulletBorder": true,
                    "fillAlphas": 0,
                    "lineThickness": 2,
                    "lineAlpha": 1,
                    "bulletSize": 7
                }],
            "rotate": true,
            "categoryField": "year",
            "categoryAxis": {
                "gridPosition": "start"
            },
            "export": {
                "enabled": true
            }
        });
        new WOW().init();
    };
    HomeComponent.prototype.myFunction = function () {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        }
        else {
            x.className = "topnav";
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__splash_service__["a" /* SplashService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__splash_service__["a" /* SplashService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/inf-update/inf-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nhtml,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,dl,dt,dd,ol,nav ul,nav li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}\narticle, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section {display: block;}\nol,ul{list-style:none;margin:0px;padding:0px;}\nblockquote,q{quotes:none;}\nblockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}\ntable{border-collapse:collapse;border-spacing:0;}\n/*--start editing from here--*/\na{text-decoration:none;}\n.txt-rt{text-align:right;}/* text align right */\n.txt-lt{text-align:left;}/* text align left */\n.txt-center{text-align:center;}/* text align center */\n.float-rt{float:right;}/* float right */\n.float-lt{float:left;}/* float left */\n.clear{clear:both;}/* clear float */\n.pos-relative{position:relative;}/* Position Relative */\n.pos-absolute{position:absolute;}/* Position Absolute */\n.vertical-base{ vertical-align:baseline;}/* vertical align baseline */\n.vertical-top{  vertical-align:top;}/* vertical align top */\nnav.vertical ul li{ display:block;}/* vertical menu */\nnav.horizontal ul li{   display: inline-block;}/* horizontal menu */\nimg{max-width:100%;}\n/*--end reset--*/\nbody {\n    font-family: 'Open Sans', sans-serif;\n    \n    background-attachment: fixed;\n    background-size: cover;\n}\nh1 {\n    font-size: 3em;\n    text-align: center;\n    color: #fff;\n    font-weight: 100;\n}\n/*-- main --*/\nh2 {\n    font-size: 1.1em;\n    text-align: center;\n    padding: 1.2em;\n    background: #02a299;\n    color: #fff;\n    font-weight: 200;\n    letter-spacing: 10px;\n}\n.main {\n    font-family: 'Open Sans', sans-serif;\n    height: 100%;\n    background-attachment: fixed;\n    background-size: cover;\n    padding: 3em 0 0;\n}\n.login-form {\n    width: 35%;\n    margin: 3.5em auto;\n    background: rgba(12, 85, 105, 0.51);\n    padding-bottom: 4em;\n}\n.agileits-top {\n    padding: 2em 3em 3em;\n}\n.login-form input[type=\"text\"], .login-form input[type=\"password\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form input[type=\"url\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form select[type=\"text\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 101%;\n    -moz-appearance: none;\n         appearance: none;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form input[type=\"email\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form input[type=\"tel\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n/*-- input-effect --*/\n.styled-input input:focus ~ label, .styled-input input:valid ~ label {\n    font-size: 1.1em;\n    color: #02a299;\n    top: -2em;\n}\n.styled-input select:focus ~ label, .styled-input select:valid ~ label {\n    font-size: 1.1em;\n    color: #02a299;\n    top: -2em;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.styled-input {\n  width:100%;\n  margin: 2em 0 1em;\n  position: relative;\n}\n\n.styled-input label {\n    color: #fff;\n    padding: 0.8em 1em;\n    position: absolute;\n    top: -2em;\n    left: 0;\n    pointer-events: none;\n    font-weight: 400;\n    font-size: 1.1em;\n    display: block;\n    line-height: 1em;\n}\n.styled-input input ~ span {\n  display: block;\n  width: 0;\n  height:2px;\n  background:#fff;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transition: all 0.125s ease; \n}\n\n.styled-input select ~ span {\n  display: block;\n  width: 0;\n  height:2px;\n  background:#fff;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transition: all 0.125s ease; \n}\n\n.styled-input input:focus { outline: 0; }\n\n.styled-input select:focus { outline: 0; -webkit-appearance: none; -moz-appearance: none; appearance: none;}\n\n.styled-input input:focus ~ span {\n     width: 100%;\n    transition: all 0.075s ease;\n      font-family: 'OpenSans-Regular';\n} \n.styled-input select:focus ~ span {\n     width: 100%;\n     -webkit-appearance: none;\n        -moz-appearance: none;\n             appearance: none;\n    transition: all 0.075s ease;\n      font-family: 'OpenSans-Regular';\n} \n/*-- //input-effect --*/\n.login-form p {\n    font-size: 1em;\n    color: #fff;\n    margin: 1em 0 .5em;\n}\n/*-- checkbox --*/\n.wthree-text input[type=\"checkbox\"] {\n    display: none;\n}\n.wthree-text input[type=\"checkbox\"]+label {\n    position: relative;\n    padding-left: 1.8em;\n    border: none;\n    outline: none;\n    font-size: 1em;\n    color: #fff;\n    cursor: pointer;\n    display: block; \n}\n.wthree-text input[type=\"checkbox\"]+label span:first-child {\n    width: 14px;\n    height: 14px;\n    border: 2px solid #fff;\n    position: absolute;\n    left: 0;\n    top: 2px; \n}\n.wthree-text input[type=\"checkbox\"]:checked+label span:first-child:before {\n    content: \"\";\n    \n    position: absolute;\n    left: 2px;\n    top: 2px;\n    font-size: 10px;\n    width: 10px;\n    height: 10px;\n}\n/*-- //checkbox --*/\n.wthree-text {\n    margin-top: 3em;\n}\n.wthree-text ul li{\n    display:inline-block;\n    float: left;\n}\n.wthree-text ul li:nth-child(2) {\n    float: right;\n}\n.wthree-text ul li a{\n    font-size:1em;\n    color: #fff;\n}\n.wthree-text ul li a:hover{\n    color: #02a299;\n}\n.agileits-bottom{\n    position:relative;\n}\n.agileits-bottom:before {\n    content: '';\n    position: absolute;\n    top: -17px;\n    left: -17px;\n    width: 0;\n    height: 0;\n    border-top: 17px solid transparent;\n    border-right: 18px solid #fff;\n    transition:.5s all ease;\n}\n.agileits-bottom:after {\n    content: '';\n    position: absolute;\n    top: -17px;\n    right: -17px;\n    width: 0;\n    height: 0;\n    border-left: 17px solid #fff;\n    border-top: 17px solid transparent;\n    transition:.5s all ease;\n}\n.agileits-bottom input[type=\"submit\"] {\n    font-size: 1.5em;\n    color: #02a299;\n    background: #fff;\n    outline: none;\n    cursor: pointer;\n    padding: 1em 0;\n    -webkit-appearance: none;\n    border: none;\n    width: 106%; \n    margin-left: -0.7em;\n    text-transform: uppercase; \n}\n.agileits-bottom input[type=\"submit\"]:hover {\n    color: #FFF;\n    background: #02a299;\n    transition:.5s all ease;\n}\n.agileits-bottom:hover:before {\n    border-right-color:#02a299;\n}\n.agileits-bottom:hover:after {\n    border-left-color:#02a299;\n}\n/*-- //main --*/\n/*-- copyright --*/\n.copyright {\n    margin: 2em 0;\n    text-align: center;\n}\n.copyright p {\n    font-size: 1em;\n    color: #fff;\n    line-height:1.8em;\n}\n.copyright p a{\n    color: #fff;\n    transition: 0.5s all;\n}\n.copyright p a:hover{\n    color: #000;    \n}\n/*-- //copyright --*/\n/*-- responsive-design --*/\n@media(max-width:1440px){\n.agileits-bottom input[type=\"submit\"] { \n    width: 106.8%; \n}\n}\n@media(max-width:1366px){\n.login-form {\n    width: 37%; \n    margin: 3em auto;\n}\n}\n@media(max-width:1280px){\n.login-form {\n    width: 40%; \n}\n}\n@media(max-width:1080px){\n.main {\n    padding: 2em 0 0;\n}\n.login-form {\n    width: 48%;\n}\nh1 {\n    font-size: 2.8em; \n}\n}\n@media(max-width:1024px){\nh1 {\n    font-size: 2.6em;\n}\n.login-form {\n    width: 50%;\n    margin: 2em auto;\n}\n}\n@media(max-width:991px){\nh1 {\n    font-size: 2.5em;\n}\n.login-form {\n    width: 52%; \n}\n}\n@media(max-width:900px){\n.agileits-top {\n    padding: 1em 3em 3em;\n}\n.login-form { \n    width: 56%;\n    padding-bottom: 3.5em;\n}\n}\n@media(max-width:800px){\n.login-form {\n    width: 63%; \n}\n.agileits-top {\n    padding: 1em 2.5em 2.5em;\n}\n.agileits-bottom input[type=\"submit\"] {\n    font-size: 1.3em; \n    margin-left: -0.8em; \n}\n}\n@media(max-width:768px){\nh1 {\n    font-size: 2.3em;\n}\n.agileits-bottom input[type=\"submit\"] {\n    width: 107%;\n} \n} \n@media (max-width: 736px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 107.5%;\n} \n} \n@media(max-width:667px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 108%;\n    font-size: 1.1em;\n    margin-left: -0.9em;\n}\n} \n@media(max-width:640px){\n.login-form {\n    width: 67%;\n}\n.agileits-bottom input[type=\"submit\"] {\n    width: 108%;\n}\n}\n@media(max-width:600px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 108.7%;\n}\n}\n@media(max-width:480px){\nh1 {\n    font-size: 1.8em;\n}\nh2 {\n    font-size: 1em; \n    padding: 1em; \n    letter-spacing: 7px;\n}\n.agileits-top {\n    padding: 1em 1.5em 1.5em;\n}\n.login-form input[type=\"text\"], .login-form input[type=\"password\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.login-form input[type=\"url\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.login-form input[type=\"email\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.login-form input[type=\"tel\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.styled-input label { \n    padding: 0.6em 1em; \n    font-size: 0.9em; \n}\n.styled-input input:focus ~ label, .styled-input input:valid ~ label {\n    font-size: 1em; \n    top: -1.5em;\n}\n.styled-input select:focus ~ label, .styled-input select:valid ~ label {\n    font-size: 1em; \n    top: -1.5em;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.wthree-text {\n    margin-top: 2em;\n}\n.wthree-text input[type=\"checkbox\"]+label { \n    font-size: 0.9em; \n    padding-left: 1.5em;\n}\n.wthree-text input[type=\"checkbox\"]+label span:first-child {\n    width: 12px;\n    height: 12px; \n}\n.wthree-text ul li a {\n    font-size: 0.9em; \n}\n.agileits-bottom input[type=\"submit\"] {\n    font-size: 1em;\n    margin-left: -0.6em;\n    width: 105.3%;\n    padding: 0.8em 0;\n}\n.login-form { \n    padding-bottom: 3em;\n}\n.login-form {\n    width: 80%;\n}\n.copyright p {\n    font-size: 0.9em; \n}\n.agileits-bottom:before { \n    top: -11px;\n    left: -11px; \n    border-top: 11px solid transparent;\n    border-right: 11px solid #fff; \n}\n.agileits-bottom:after { \n    top: -11px;\n    right: -11px; \n    border-left: 11px solid #fff;\n    border-top: 11px solid transparent; \n}\n.wthree-text input[type=\"checkbox\"]:checked+label span:first-child:before { \n    left: 1px;\n    top: 1px; \n}\n}\n@media(max-width:414px){\n.main {\n    padding: 1.5em 0 0;\n}\n.styled-input { \n    margin: 1.5em 0 1em; \n}\n.copyright p { \n    padding: 0 1em;\n}\n.agileits-bottom:before {\n    top: -10px;\n    left: -10px;\n    border-top: 10px solid transparent;\n    border-right: 10px solid #fff;\n}\n.agileits-bottom:after { \n    top: -10px;\n    right: -10px;\n    border-left: 10px solid #fff;\n    border-top: 10px solid transparent; \n}\n.agileits-bottom input[type=\"submit\"] { \n    width: 106%; \n}\n}\n@media(max-width:384px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 106.8%;\n    font-size: 0.9em;\n    margin-left: -0.7em;\n}\n}\n@media(max-width:375px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 106.5%;\n    margin-left: -0.6em;\n}\nh1 {\n    font-size: 1.6em;\n}\nh2 { \n    letter-spacing: 5px;\n}\n.login-form { \n    margin: 1.5em auto;\n}\n.wthree-text ul li { \n    float: none;\n    display: block;\n}\n.wthree-text ul li:nth-child(2) {\n    float: none;\n    margin-top: 1em;\n}\n.wthree-text {\n    margin-top: 1.5em;\n}\n}\n@media(max-width:320px){\nh2 {\n    letter-spacing: 3px;\n    padding: 0.8em;\n}\n.login-form {\n    width: 85%;\n}\n.agileits-top {\n    padding:0.5em 1em 1.5em;\n}\n.login-form input[type=\"text\"], .login-form input[type=\"password\"] {\n    font-size: 0.85em;\n    padding: 0.6em;\n    width: 88%;\n}\n.login-form input[type=\"url\"] {\n    font-size: 0.85em;\n    padding: 0.6em;\n    width: 88%;\n}\n.styled-input label {\n    padding: 0.6em;\n    font-size: 0.85em;\n}\n.styled-input input:focus ~ label, .styled-input input:valid ~ label {\n    font-size: 0.9em;\n    top: -1em;\n}\n.styled-input select:focus ~ label, .styled-input select:valid ~ label {\n    font-size: 0.9em;\n    top: -1em;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.login-form {\n    padding-bottom: 2em;\n}\n.agileits-bottom input[type=\"submit\"] {\n    width: 107%;\n    margin-left: -0.6em;\n}\n.styled-select {\n   background: url(http://i62.tinypic.com/15xvbd5.png) no-repeat 96% 0;\n   height: 29px;\n   overflow: hidden;\n   width: 240px;\n}\n.slate   { background-color: #ddd; }\n/*-- //responsive-design --*/\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inf-update/inf-update.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" style=\"background-image: url('assets/images/bbb.jpg')\"> \n  <h1>Influencer Sign Up Form</h1>\n  <div class=\"login-form\"> \n    <h2>Sign Up Form</h2> \n    <form name=\"form\" >\n      <div class=\"agileits-top\">\t\n        <div class=\"styled-input\">\n          <input type=\"password\" name=\"PASSWORD\" id=\"PASSWORD\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"user.password\">\n          <label style=\"color:white;\">PASSWORD*</label>\n          <span></span>\n          </div>\n        <div class=\"styled-input\">\n          <input type=\"url\" name=\"FACEBOOK\" id=\"FACEBOOK\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"user.facebook\">\n          <label style=\"color:white;\">FACEBOOK</label>\n          <span></span>\n          </div>\n          <div class=\"styled-input\">\n          <input type=\"url\" name=\"TWITTER\" id=\"TWITTER\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"user.twitter\">\n          <label style=\"color:white;\">TWITTER</label>\n          <span></span>\n        </div>\t\n        <div class=\"styled-input\">\n          <input type=\"url\" name=\"INSTAGRAM\" id=\"INSTAGRAM\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"user.instagram\">\n          <label style=\"color:white;\">INSTAGRAM*</label>\n          <span></span>\n        </div>\t\n        <div class=\"styled-input\">\n          <input type=\"url\" name=\"YOUTUBE\" id=\"YOUTUBE\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"user.youtube\">\n          <label style=\"color:white;\">YOUTUBE</label>\n          <span></span>\n        </div>\t\n        <div class=\"styled-input\">\n          <input type=\"url\" name=\"BLOG\" id=\"BLOG\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"user.blog\">\n          <label style=\"color:white;\">BLOG</label>\n          <span></span>\n        </div>\t\n        <div class=\"styled-input\">\n            <label style=\"color:white;\">CATEGORY*</label>\n          <select type=\"text\" name=\"CATEGORY\" id=\"CATEGORY\">\n             <option value=\"Fashion\" style=\"color: black;\" (click)=\"selectCategory(1)\">FASHION</option>\n             <option value=\"Beauty&Makeup\" style=\"color: black;\" (click)=\"selectCategory(2)\">BEAUTY & MAKEUP</option>\n             <option value=\"Fitness\" style=\"color: black;\" (click)=\"selectCategory(3)\">FITNESS</option>\n             <option value=\"Auto\" style=\"color: black;\" (click)=\"selectCategory(4)\">AUTO</option>\n             <option value=\"Travel&Lifestyle\" style=\"color: black;\" (click)=\"selectCategory(5)\">TRAVEL & LIFESTYLE</option>\n          <span></span>\n          </select>\n        </div>\t\n        <div class=\"styled-input\">\n          <input type=\"text\" name=\"LOCATION\" id=\"LOCATION\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"user.location\">\n          <label style=\"color:white;\">LOCATION</label>\n          <span></span>\n        </div>\t\n        <div class=\"styled-input\">\n          <input type=\"tel\" name=\"PHONE_NO\" id=\"PHONE_NO\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"user.phone\">\n          <label style=\"color:white;\">PHONE NO.</label>\n          <span></span>\n        </div>\n        <div class=\"styled-input\">\n          <input type=\"email\" name=\"EMAIL_ID\" id=\"EMAIL_ID\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"user.email\">\n          <label style=\"color:white;\">EMAIL ID*</label>\n          <span></span>\n        </div>\n      </div>\n      <div class=\"g-recaptcha\" data-sitekey=\"6LfKFS8UAAAAACYUfuhsWwSaBE4SKdPWYm7V-hJ9\"></div>\n      <div class=\"agileits-bottom\">\n        <input type=\"submit\" name=\"SUBMIT\" (click)=\"postInfluencer()\" value=\"Sign Up\">\n      </div>\n    </form>\n  </div>\t\n</div>\t"

/***/ }),

/***/ "../../../../../src/app/inf-update/inf-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splash_service__ = __webpack_require__("../../../../../src/app/splash.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfUpdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfUpdateComponent = (function () {
    function InfUpdateComponent(service) {
        this.service = service;
        this.user = { facebook: null, twitter: null,
            instagram: null, youtube: null, blog: null,
            location: '', category: 'fashion', username: '', password: '',
            phone: '', email: '', brand: false };
    }
    InfUpdateComponent.prototype.ngOnInit = function () {
        this.token = localStorage.getItem('token');
        this.user.username = localStorage.getItem('username');
    };
    InfUpdateComponent.prototype.selectCategory = function (x) {
        switch (x) {
            case 1:
                this.user.category = "fashion";
                break;
            case 2:
                this.user.category = "beauty";
                break;
            case 3:
                this.user.category = "fitness";
                break;
            case 4:
                this.user.category = "auto";
                break;
            case 5:
                this.user.category = "travel";
                break;
        }
    };
    InfUpdateComponent.prototype.postInfluencer = function () {
        console.log(this.user);
        this.service.update(this.user, this.token).then(function (res) { return alert("Updated successfully"); }, function (err) { return alert("Could not update user details"); });
    };
    return InfUpdateComponent;
}());
InfUpdateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-inf-update',
        template: __webpack_require__("../../../../../src/app/inf-update/inf-update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/inf-update/inf-update.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__splash_service__["a" /* SplashService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__splash_service__["a" /* SplashService */]) === "function" && _a || Object])
], InfUpdateComponent);

var _a;
//# sourceMappingURL=inf-update.component.js.map

/***/ }),

/***/ "../../../../../src/app/influencer-reg/influencer-reg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nhtml,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,dl,dt,dd,ol,nav ul,nav li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}\narticle, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section {display: block;}\nol,ul{list-style:none;margin:0px;padding:0px;}\nblockquote,q{quotes:none;}\nblockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}\ntable{border-collapse:collapse;border-spacing:0;}\n/*--start editing from here--*/\na{text-decoration:none;}\n.txt-rt{text-align:right;}/* text align right */\n.txt-lt{text-align:left;}/* text align left */\n.txt-center{text-align:center;}/* text align center */\n.float-rt{float:right;}/* float right */\n.float-lt{float:left;}/* float left */\n.clear{clear:both;}/* clear float */\n.pos-relative{position:relative;}/* Position Relative */\n.pos-absolute{position:absolute;}/* Position Absolute */\n.vertical-base{ vertical-align:baseline;}/* vertical align baseline */\n.vertical-top{  vertical-align:top;}/* vertical align top */\nnav.vertical ul li{ display:block;}/* vertical menu */\nnav.horizontal ul li{   display: inline-block;}/* horizontal menu */\nimg{max-width:100%;}\n/*--end reset--*/\nbody {\n    font-family: 'Open Sans', sans-serif;\n    \n    background-attachment: fixed;\n    background-size: cover;\n}\nh1 {\n    font-size: 3em;\n    text-align: center;\n    color: #fff;\n    font-weight: 100;\n}\n/*-- main --*/\nh2 {\n    font-size: 1.1em;\n    text-align: center;\n    padding: 1.2em;\n    background: #02a299;\n    color: #fff;\n    font-weight: 200;\n    letter-spacing: 10px;\n}\n.main {\n    font-family: 'Open Sans', sans-serif;\n    height: 100%;\n    background-attachment: fixed;\n    background-size: cover;\n    padding: 3em 0 0;\n}\n.login-form {\n    width: 35%;\n    margin: 3.5em auto;\n    background: rgba(12, 85, 105, 0.51);\n    padding-bottom: 4em;\n}\n.agileits-top {\n    padding: 2em 3em 3em;\n}\n.login-form input[type=\"text\"], .login-form input[type=\"password\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form input[type=\"url\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form select[type=\"text\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 101%;\n    -moz-appearance: none;\n         appearance: none;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form input[type=\"email\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n.login-form input[type=\"tel\"] {\n    font-size: 1em;\n    color: #fff;\n    padding: 0.8em 1em;\n    border: 0;\n    width: 93%;\n    border-bottom: 1px solid #c7c7c7;\n    background: none;\n    -webkit-appearance: none;\n}\n/*-- input-effect --*/\n.styled-input input:focus ~ label, .styled-input input:valid ~ label {\n    font-size: 1.1em;\n    color: #02a299;\n    top: -2em;\n}\n.styled-input select:focus ~ label, .styled-input select:valid ~ label {\n    font-size: 1.1em;\n    color: #02a299;\n    top: -2em;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.styled-input {\n  width:100%;\n  margin: 2em 0 1em;\n  position: relative;\n}\n\n.styled-input label {\n    color: #fff;\n    padding: 0.8em 1em;\n    position: absolute;\n    top: -2em;\n    left: 0;\n    pointer-events: none;\n    font-weight: 400;\n    font-size: 1.1em;\n    display: block;\n    line-height: 1em;\n}\n.styled-input input ~ span {\n  display: block;\n  width: 0;\n  height:2px;\n  background:#fff;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transition: all 0.125s ease; \n}\n\n.styled-input select ~ span {\n  display: block;\n  width: 0;\n  height:2px;\n  background:#fff;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transition: all 0.125s ease; \n}\n\n.styled-input input:focus { outline: 0; }\n\n.styled-input select:focus { outline: 0; -webkit-appearance: none; -moz-appearance: none; appearance: none;}\n\n.styled-input input:focus ~ span {\n     width: 100%;\n    transition: all 0.075s ease;\n      font-family: 'OpenSans-Regular';\n} \n.styled-input select:focus ~ span {\n     width: 100%;\n     -webkit-appearance: none;\n        -moz-appearance: none;\n             appearance: none;\n    transition: all 0.075s ease;\n      font-family: 'OpenSans-Regular';\n} \n/*-- //input-effect --*/\n.login-form p {\n    font-size: 1em;\n    color: #fff;\n    margin: 1em 0 .5em;\n}\n/*-- checkbox --*/\n.wthree-text input[type=\"checkbox\"] {\n    display: none;\n}\n.wthree-text input[type=\"checkbox\"]+label {\n    position: relative;\n    padding-left: 1.8em;\n    border: none;\n    outline: none;\n    font-size: 1em;\n    color: #fff;\n    cursor: pointer;\n    display: block; \n}\n.wthree-text input[type=\"checkbox\"]+label span:first-child {\n    width: 14px;\n    height: 14px;\n    border: 2px solid #fff;\n    position: absolute;\n    left: 0;\n    top: 2px; \n}\n.wthree-text input[type=\"checkbox\"]:checked+label span:first-child:before {\n    content: \"\";\n    \n    position: absolute;\n    left: 2px;\n    top: 2px;\n    font-size: 10px;\n    width: 10px;\n    height: 10px;\n}\n/*-- //checkbox --*/\n.wthree-text {\n    margin-top: 3em;\n}\n.wthree-text ul li{\n    display:inline-block;\n    float: left;\n}\n.wthree-text ul li:nth-child(2) {\n    float: right;\n}\n.wthree-text ul li a{\n    font-size:1em;\n    color: #fff;\n}\n.wthree-text ul li a:hover{\n    color: #02a299;\n}\n.agileits-bottom{\n    position:relative;\n}\n.agileits-bottom:before {\n    content: '';\n    position: absolute;\n    top: -17px;\n    left: -17px;\n    width: 0;\n    height: 0;\n    border-top: 17px solid transparent;\n    border-right: 18px solid #fff;\n    transition:.5s all ease;\n}\n.agileits-bottom:after {\n    content: '';\n    position: absolute;\n    top: -17px;\n    right: -17px;\n    width: 0;\n    height: 0;\n    border-left: 17px solid #fff;\n    border-top: 17px solid transparent;\n    transition:.5s all ease;\n}\n.agileits-bottom input[type=\"submit\"] {\n    font-size: 1.5em;\n    color: #02a299;\n    background: #fff;\n    outline: none;\n    cursor: pointer;\n    padding: 1em 0;\n    -webkit-appearance: none;\n    border: none;\n    width: 106%; \n    margin-left: -0.7em;\n    text-transform: uppercase; \n}\n.agileits-bottom input[type=\"submit\"]:hover {\n    color: #FFF;\n    background: #02a299;\n    transition:.5s all ease;\n}\n.agileits-bottom:hover:before {\n    border-right-color:#02a299;\n}\n.agileits-bottom:hover:after {\n    border-left-color:#02a299;\n}\n/*-- //main --*/\n/*-- copyright --*/\n.copyright {\n    margin: 2em 0;\n    text-align: center;\n}\n.copyright p {\n    font-size: 1em;\n    color: #fff;\n    line-height:1.8em;\n}\n.copyright p a{\n    color: #fff;\n    transition: 0.5s all;\n}\n.copyright p a:hover{\n    color: #000;    \n}\n/*-- //copyright --*/\n/*-- responsive-design --*/\n@media(max-width:1440px){\n.agileits-bottom input[type=\"submit\"] { \n    width: 106.8%; \n}\n}\n@media(max-width:1366px){\n.login-form {\n    width: 37%; \n    margin: 3em auto;\n}\n}\n@media(max-width:1280px){\n.login-form {\n    width: 40%; \n}\n}\n@media(max-width:1080px){\n.main {\n    padding: 2em 0 0;\n}\n.login-form {\n    width: 48%;\n}\nh1 {\n    font-size: 2.8em; \n}\n}\n@media(max-width:1024px){\nh1 {\n    font-size: 2.6em;\n}\n.login-form {\n    width: 50%;\n    margin: 2em auto;\n}\n}\n@media(max-width:991px){\nh1 {\n    font-size: 2.5em;\n}\n.login-form {\n    width: 52%; \n}\n}\n@media(max-width:900px){\n.agileits-top {\n    padding: 1em 3em 3em;\n}\n.login-form { \n    width: 56%;\n    padding-bottom: 3.5em;\n}\n}\n@media(max-width:800px){\n.login-form {\n    width: 63%; \n}\n.agileits-top {\n    padding: 1em 2.5em 2.5em;\n}\n.agileits-bottom input[type=\"submit\"] {\n    font-size: 1.3em; \n    margin-left: -0.8em; \n}\n}\n@media(max-width:768px){\nh1 {\n    font-size: 2.3em;\n}\n.agileits-bottom input[type=\"submit\"] {\n    width: 107%;\n} \n} \n@media (max-width: 736px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 107.5%;\n} \n} \n@media(max-width:667px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 108%;\n    font-size: 1.1em;\n    margin-left: -0.9em;\n}\n} \n@media(max-width:640px){\n.login-form {\n    width: 67%;\n}\n.agileits-bottom input[type=\"submit\"] {\n    width: 108%;\n}\n}\n@media(max-width:600px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 108.7%;\n}\n}\n@media(max-width:480px){\nh1 {\n    font-size: 1.8em;\n}\nh2 {\n    font-size: 1em; \n    padding: 1em; \n    letter-spacing: 7px;\n}\n.agileits-top {\n    padding: 1em 1.5em 1.5em;\n}\n.login-form input[type=\"text\"], .login-form input[type=\"password\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.login-form input[type=\"url\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.login-form input[type=\"email\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.login-form input[type=\"tel\"] {\n    font-size: 0.9em; \n    padding: 0.6em 1em; \n    width: 93%; \n}\n.styled-input label { \n    padding: 0.6em 1em; \n    font-size: 0.9em; \n}\n.styled-input input:focus ~ label, .styled-input input:valid ~ label {\n    font-size: 1em; \n    top: -1.5em;\n}\n.styled-input select:focus ~ label, .styled-input select:valid ~ label {\n    font-size: 1em; \n    top: -1.5em;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.wthree-text {\n    margin-top: 2em;\n}\n.wthree-text input[type=\"checkbox\"]+label { \n    font-size: 0.9em; \n    padding-left: 1.5em;\n}\n.wthree-text input[type=\"checkbox\"]+label span:first-child {\n    width: 12px;\n    height: 12px; \n}\n.wthree-text ul li a {\n    font-size: 0.9em; \n}\n.agileits-bottom input[type=\"submit\"] {\n    font-size: 1em;\n    margin-left: -0.6em;\n    width: 105.3%;\n    padding: 0.8em 0;\n}\n.login-form { \n    padding-bottom: 3em;\n}\n.login-form {\n    width: 80%;\n}\n.copyright p {\n    font-size: 0.9em; \n}\n.agileits-bottom:before { \n    top: -11px;\n    left: -11px; \n    border-top: 11px solid transparent;\n    border-right: 11px solid #fff; \n}\n.agileits-bottom:after { \n    top: -11px;\n    right: -11px; \n    border-left: 11px solid #fff;\n    border-top: 11px solid transparent; \n}\n.wthree-text input[type=\"checkbox\"]:checked+label span:first-child:before { \n    left: 1px;\n    top: 1px; \n}\n}\n@media(max-width:414px){\n.main {\n    padding: 1.5em 0 0;\n}\n.styled-input { \n    margin: 1.5em 0 1em; \n}\n.copyright p { \n    padding: 0 1em;\n}\n.agileits-bottom:before {\n    top: -10px;\n    left: -10px;\n    border-top: 10px solid transparent;\n    border-right: 10px solid #fff;\n}\n.agileits-bottom:after { \n    top: -10px;\n    right: -10px;\n    border-left: 10px solid #fff;\n    border-top: 10px solid transparent; \n}\n.agileits-bottom input[type=\"submit\"] { \n    width: 106%; \n}\n}\n@media(max-width:384px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 106.8%;\n    font-size: 0.9em;\n    margin-left: -0.7em;\n}\n}\n@media(max-width:375px){\n.agileits-bottom input[type=\"submit\"] {\n    width: 106.5%;\n    margin-left: -0.6em;\n}\nh1 {\n    font-size: 1.6em;\n}\nh2 { \n    letter-spacing: 5px;\n}\n.login-form { \n    margin: 1.5em auto;\n}\n.wthree-text ul li { \n    float: none;\n    display: block;\n}\n.wthree-text ul li:nth-child(2) {\n    float: none;\n    margin-top: 1em;\n}\n.wthree-text {\n    margin-top: 1.5em;\n}\n}\n@media(max-width:320px){\nh2 {\n    letter-spacing: 3px;\n    padding: 0.8em;\n}\n.login-form {\n    width: 85%;\n}\n.agileits-top {\n    padding:0.5em 1em 1.5em;\n}\n.login-form input[type=\"text\"], .login-form input[type=\"password\"] {\n    font-size: 0.85em;\n    padding: 0.6em;\n    width: 88%;\n}\n.login-form input[type=\"url\"] {\n    font-size: 0.85em;\n    padding: 0.6em;\n    width: 88%;\n}\n.styled-input label {\n    padding: 0.6em;\n    font-size: 0.85em;\n}\n.styled-input input:focus ~ label, .styled-input input:valid ~ label {\n    font-size: 0.9em;\n    top: -1em;\n}\n.styled-input select:focus ~ label, .styled-input select:valid ~ label {\n    font-size: 0.9em;\n    top: -1em;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.login-form {\n    padding-bottom: 2em;\n}\n.agileits-bottom input[type=\"submit\"] {\n    width: 107%;\n    margin-left: -0.6em;\n}\n.styled-select {\n   background: url(http://i62.tinypic.com/15xvbd5.png) no-repeat 96% 0;\n   height: 29px;\n   overflow: hidden;\n   width: 240px;\n}\n.slate   { background-color: #ddd; }\n/*-- //responsive-design --*/\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/influencer-reg/influencer-reg.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" style=\"background-image: url('assets/images/bbb.jpg')\"> \n  <h1>Influencer Sign Up Form</h1>\n  <div class=\"login-form\"> \n    <h2>Sign Up Form</h2> \n    <form name=\"form\" >\n      <div class=\"agileits-top\">\t\n        <div class=\"styled-input\">\n          <input type=\"text\" id=\"USERNAME\" name=\"USERNAME\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"user.username\">\n          <label style=\"color:white;\">NAME*</label>\n          <span></span>\n        </div>\n        <div class=\"styled-input\">\n          <input type=\"password\" name=\"PASSWORD\" id=\"PASSWORD\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"user.password\">\n          <label style=\"color:white;\">PASSWORD*</label>\n          <span></span>\n          </div>\n        <div class=\"styled-input\">\n          <input type=\"url\" name=\"FACEBOOK\" id=\"FACEBOOK\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"user.facebook\">\n          <label style=\"color:white;\">FACEBOOK</label>\n          <span></span>\n          </div>\n          <div class=\"styled-input\">\n          <input type=\"url\" name=\"TWITTER\" id=\"TWITTER\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"user.twitter\">\n          <label style=\"color:white;\">TWITTER</label>\n          <span></span>\n        </div>\t\n        <div class=\"styled-input\">\n          <input type=\"url\" name=\"INSTAGRAM\" id=\"INSTAGRAM\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"user.instagram\">\n          <label style=\"color:white;\">INSTAGRAM*</label>\n          <span></span>\n        </div>\t\n        <div class=\"styled-input\">\n          <input type=\"url\" name=\"YOUTUBE\" id=\"YOUTUBE\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"user.youtube\">\n          <label style=\"color:white;\">YOUTUBE</label>\n          <span></span>\n        </div>\t\n        <div class=\"styled-input\">\n          <input type=\"url\" name=\"BLOG\" id=\"BLOG\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"user.blog\">\n          <label style=\"color:white;\">BLOG</label>\n          <span></span>\n        </div>\t\n        <div class=\"styled-input\">\n            <label style=\"color:white;\">CATEGORY*</label>\n          <select type=\"text\" name=\"CATEGORY\" id=\"CATEGORY\">\n             <option value=\"Fashion\" style=\"color: black;\" (click)=\"selectCategory(1)\">FASHION</option>\n             <option value=\"Beauty&Makeup\" style=\"color: black;\" (click)=\"selectCategory(2)\">BEAUTY & MAKEUP</option>\n             <option value=\"Fitness\" style=\"color: black;\" (click)=\"selectCategory(3)\">FITNESS</option>\n             <option value=\"Auto\" style=\"color: black;\" (click)=\"selectCategory(4)\">AUTO</option>\n             <option value=\"Travel&Lifestyle\" style=\"color: black;\" (click)=\"selectCategory(5)\">TRAVEL & LIFESTYLE</option>\n          <span></span>\n          </select>\n        </div>\t\n        <div class=\"styled-input\">\n          <input type=\"text\" name=\"LOCATION\" id=\"LOCATION\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"user.location\">\n          <label style=\"color:white;\">LOCATION</label>\n          <span></span>\n        </div>\t\n        <div class=\"styled-input\">\n          <input type=\"tel\" name=\"PHONE_NO\" id=\"PHONE_NO\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"user.phone\">\n          <label style=\"color:white;\">PHONE NO.</label>\n          <span></span>\n        </div>\n        <div class=\"styled-input\">\n          <input type=\"email\" name=\"EMAIL_ID\" id=\"EMAIL_ID\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"user.email\">\n          <label style=\"color:white;\">EMAIL ID*</label>\n          <span></span>\n        </div>\n      </div>\n      <div class=\"g-recaptcha\" data-sitekey=\"6LfKFS8UAAAAACYUfuhsWwSaBE4SKdPWYm7V-hJ9\"></div>\n      <div class=\"agileits-bottom\">\n        <input type=\"submit\" name=\"SUBMIT\" (click)=\"postInfluencer()\" value=\"Sign Up\">\n      </div>\n    </form>\n  </div>\t\n</div>\t"

/***/ }),

/***/ "../../../../../src/app/influencer-reg/influencer-reg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splash_service__ = __webpack_require__("../../../../../src/app/splash.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfluencerRegComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfluencerRegComponent = (function () {
    function InfluencerRegComponent(service) {
        this.service = service;
        this.user = { facebook: null, twitter: null,
            instagram: null, youtube: null, blog: null,
            location: '', category: 'fashion', username: '', password: '',
            phone: '', email: '', brand: false };
    }
    InfluencerRegComponent.prototype.ngOnInit = function () {
    };
    InfluencerRegComponent.prototype.selectCategory = function (x) {
        switch (x) {
            case 1:
                this.user.category = "fashion";
                break;
            case 2:
                this.user.category = "beauty";
                break;
            case 3:
                this.user.category = "fitness";
                break;
            case 4:
                this.user.category = "auto";
                break;
            case 5:
                this.user.category = "travel";
                break;
        }
    };
    InfluencerRegComponent.prototype.postInfluencer = function () {
        console.log(this.user);
        this.service.postUser(this.user).then(function (res) { return alert("Registration Successful"); }, function (err) { return alert("Could not register user"); });
    };
    return InfluencerRegComponent;
}());
InfluencerRegComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-influencer-reg',
        template: __webpack_require__("../../../../../src/app/influencer-reg/influencer-reg.component.html"),
        styles: [__webpack_require__("../../../../../src/app/influencer-reg/influencer-reg.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__splash_service__["a" /* SplashService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__splash_service__["a" /* SplashService */]) === "function" && _a || Object])
], InfluencerRegComponent);

var _a;
//# sourceMappingURL=influencer-reg.component.js.map

/***/ }),

/***/ "../../../../../src/app/influencer-welcome/influencer-welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\n\ttransition:0.5s all;\n\t-webkit-transition:0.5s all;\n\t-moz-transition:0.5s all;\n\t-o-transition:0.5s all;\n\t-ms-transition:0.5s all;\n}\n.parallax{\n    min-height: 500px; \n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n#main-reservation-text h3{\n\tbackground:rgba(0,0,0,0.8);\n\tfont-size: 1.8em;\n\tfont-weight:700;\n\ttext-transform: uppercase;\n\tdisplay: inline-block;\n\tcolor: #fff;\n\tfont-family: 'Open Sans Condensed', sans-serif;\n\tpadding:10px;\n}\n#main-reservation-text p{\n\tbackground:rgba(0,0,0,0.8);\n\tcolor:#fff;\n\tpadding:10px;\n\ttext-transform:capitalize;\n}\n#main-reservation-undertext p {\n\tfont-weight: 300;\n\tcolor: #fff;\n\tmargin-top: 12px;\n\tdisplay: inline-block;\n\tfont-size: 0.7em;\n\ttext-transform: none;\n}\n#reservation-button {\n\tcolor: #fff;\n\tborder: 2px solid #fff;\n\tpadding: 10px 26px;\n\tmargin-top: 0px;\n\tfont-size: 20px;\n\tdisplay: inline-block;\n\tfloat: right;\n\tfont-weight:800;\n\ttransition: all 0.3s;\n\tcursor: pointer;\n\tbackground-color:#00B895;\n}\n.btn.btn-primary {\n\tfont-family: 'Open Sans Condensed', sans-serif;\n\tfont-size:1.8em;\n\tfont-weight: 300;\n\tfont-style: normal;\n\ttext-shadow: none;\n\ttext-transform:uppercase;\n\tcolor: #FFF;\n\tpadding: 10px 26px;\n\tposition: relative;\n\tletter-spacing: 0;\n\tbackground: transparent;\n\tborder-radius: 0;\n\tbox-shadow: none;\n\tborder: none;\n\toutline: none;\n\tborder-radius: 0;\n\tz-index: 1;\n\toverflow: hidden;\n\ttransition: all 0.4s ease;\n}\n.btn {\n\tdisplay: inline-block;\n\tpadding: 4px 12px;\n\tmargin-bottom: 0;\n\tfont-size: 14px;\n\ttext-align: center;\n\tvertical-align: middle;\n\tcursor: pointer;\n\tcolor: #333;\n\ttext-shadow: 0 1px 1px rgba(255,255,255,0.75);\n\tborder: 1px solid #ccc;\n\tborder-bottom-color: #b3b3b3;\n}\n.btn-primary {\n\tcolor: #fff;\n}\n.btn.btn-primary:before {\n\tcontent: \"\";\n\tposition: absolute;\n\twidth: 0;\n\theight: 100%;\n\tbottom: 0;\n\tright: 0;\n\ttop: 0;\n\tz-index: -1;\n\tborder-radius: 0;\n\tbackground:#F94B4B;\n\ttransition: all 0.4s ease;\n}\n.btn.btn-primary:hover:before {\n\twidth: 100%;\n\tleft: 0;\n\ttransition: all 0.3s ease;\n}\n.btn.btn-primary:after {\n\tcontent: \"\";\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tbottom: 0;\n\tleft: 0;\n\tborder-radius: 0;\n\tbackground:#dcbc86;\n\tz-index: -2;\n\ttransition: all 0.4s ease;\n}\n\n.reservation_banner{\n\t\n\tbackground-size: 100% 100%;\n\tbackground-size: cover;\n\tbackground-position: bottom;\n\tpadding: 2em 0 3em;\n}\n.video-container {\n  position: relative;\n}\nvideo {\n  height: auto;\n  width: 100%;\n}\n.overlay-desc {\n  background: rgba(0,0,0,0);\n  position: absolute;\n  top: 0; right: 0; bottom: 0; left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 12%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.button {\n  display: inline-block;\n  border-radius: 4px;\n  background-color: yellow;\n  border: none;\n  color: black;\n  text-align: center;\n  font-size: 28px;\n  padding: 20px;\n  width: 400px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\n\n.button span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n\n.button span:after {\n  content: '\\BB';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  transition: 0.5s;\n}\n\n.button:hover span {\n  padding-right: 25px;\n}\n\n.button:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n#chartdiv {\n\twidth\t: 100%;\n\theight\t: 500px;\n}\t\n.main-header\n{\n    height: 650px;\n}\n.bg-color\n{\n\n    background-color: RGBA(0, 0, 0, 0.41);\n    height: 650px;\n    padding-bottom: 100px;\n}\nvideo#bgvid {\n    position: absolute;\n    min-width: 100%;\n    min-height: inherit;\n    width: 100%;\n    height: inherit;\n    z-index: -100;\n    background-size: cover;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.fa:hover {\n    opacity: 0.7;\n}\n\n#How_It_Works button {\n  margin: 0 auto !important;\n  font-size: 2.0rem;\n  padding: 1.25rem 2.5rem;\n  display: block;\n  width: 200px;\n  background-color: transparent;\n  border: 1px solid white;\n  color: white !important;\n  font-weight: 300;\n  border-radius: 3px;\n  transition: all 0.3s ease-in-out;\n}\n\n#How_It_Works button:hover {\n  background-color: white;\n  color: black !important;\n  border-color: #009ac9;\n}\n.parallax button {\n  margin: 0 auto !important;\n  font-size: 2.0rem;\n  padding: 1.25rem 2.5rem;\n  display: block;\n  width: 200px;\n  background-color: transparent;\n  border: 1px solid white;\n  color: white !important;\n  font-weight: 300;\n  border-radius: 3px;\n  transition: all 0.3s ease-in-out;\n}\n\n.parallax button:hover {\n  background-color: white;\n  color: black !important;\n  border-color: #009ac9;\n}\n\n.overlay-desc {\n  background: rgba(0,0,0,0);\n  position: absolute;\n  top: 0; right: 0; bottom: 0; left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.mobgraph{\n\tvisibility: hidden;\n\tdisplay: none;\n}\n\n.center-pills{\n\tdisplay: inline-block;\n}\n\n@media only screen and (max-width: 500px) {\n    .main-header {\n        \theight: 400px;\n    }\n    .bg-color{\n    \theight: 400px;\n    }\n    .overlay-desc {\n  background: rgba(0,0,0,0);\n  position: absolute;\n  margin-bottom:100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\t}\n\t.desktopgraph{\n\t\tvisibility: hidden;\n\t\tdisplay: none;\n\t}\n\t.mobgraph{\n\t\tvisibility: visible;\n\t\tdisplay: block;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/influencer-welcome/influencer-welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" style=\"background-color: transparent;padding: 15px 0\" id=\"something\">\n  <div class=\"container\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n          <button type=\"button\" data-target=\"#navbarCollapse\" data-toggle=\"collapse\" class=\"navbar-toggle\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" style=\"font-family: 'Bree Serif',Serif;color:white;font-size: 25px;\">SplashFluence</a>\n      </div>\n      <!-- Collection of nav links and other content for toggling -->\n      <div id=\"navbarCollapse\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-right\">\n              <li><a routerLink=\"../live\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Live Campaigns</a></li>\n              <li><a (click)=\"gotoHashtag('seo')\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Scale Up Your Seo</a></li>\n              <li (click)=\"coming()\"><a style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Blog</a></li>\n              <li><a (click)=\"gotoHashtag('contact')\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Contact</a></li>\n              <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: white;\">Howdy, {{username}}<span>&nbsp;&nbsp;<img src=\"assets/images/bg/a4.png\" style=\"height: 30px;margin-top:-3%;\"></span>&nbsp;&nbsp;<span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\">\n                  <li><a routerLink=\"../infupdate\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: red;\">Edit Account</a></li>\n                  <li><a routerLink=\"../applied\" style=\"font-family: 'Bree Serif', serif;font-size: 18px;color: red;\">Applied Campaign</a></li>\n                  <li><a (click)='logout()' style=\"font-family: 'Bree Serif',serif;font-size: 18px;color: red\">LogOut</a></li>\n                </ul>\n             </li>\n          </ul>\n      </div>\n  </div>\n</nav>\n  <!--TOP Navigation Bar Finished //-->\n  <div class=\"parallax\" style=\"background-image: url(assets/images/bg/seo.jpg);min-height: 650px;overflow: hidden;\">\n  </div>\n\n  <div class=\"container-fluid\" id=\"seo\" style=\"min-height: 600px;overflow: hidden;color: black;font-family: 'Bree Serif',serif;\">\n    <div class=\"row text-center\" style=\"margin-top: 3%;\">\n      <h2 style=\"font-size: 40px;color: red;\">CHALLENGES IN SEO<hr style=\"width: 30%;\"></h2>\n    </div>\n    <div class=\"row text-center\" style=\"margin-top: 3%;\">\n      <p style=\"font-size: 18px;\">Getting your website and content to rank in the search engines is tricky and it requires a keen understanding of SEO.<br/> One of the best and proven ways to move your site to the top of Google is to build high-quality backlinksand<br/> influencer marketing does just this.</p>\n    </div>\n    <div class=\"row text-center\" style=\"margin-top: 3%;margin-bottom: 3%;\">\n      <p style=\"font-size: 18px;\">Identifying your key influencers and making sure that they share your content is one of the most neglected SEO<br/> techniques in marketing. It is a great way good way of improving off-the-page SEO</p>\n    </div>\n    <div class=\"row text-center\" style=\"background-color: #f4f4f4;\">\n      <h2 style=\"font-size: 40px;margin-top: 3%;margin-bottom: 3%;color: red;\">Solution<hr style=\"width: 30%;\"></h2>\n      <div class=\"col-md-4 col-lg-4 col-sm-12 col-xs-12 text-center\">\n        <img src=\"assets/images/bg/backlinks.png\">\n        <h3>Organic Backlinks</h3>\n        <p style=\"font-size: 18px;\">Backlinks to your website with appropriate<br/> Anchor Text and Tracking</p>\n      </div>\n      <div class=\"col-md-4 col-lg-4 col-sm-12 col-xs-12 text-center\">\n        <img src=\"assets/images/bg/simplified.png\">\n        <h3>Simplified SEO</h3>\n        <p style=\"font-size: 18px;\">Simplified process to engage with bloggers<br/> and influencers</p>\n      </div>\n      <div class=\"col-md-4 col-lg-4 col-sm-12 col-xs-12 text-center\" style=\"margin-bottom: 5%;\">\n        <img src=\"assets/images/bg/results.png\">\n        <h3>Proven Results</h3>\n        <p style=\"font-size: 18px;\">1X to 3X Growth in SEO traffic</p>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"container-fluid\" id=\"contact\" style=\"min-height: 600px;overflow: hidden;background-color: white;font-family: 'Bree Serif',serif;background-color: white;\">\n    <div class=\"row text-center\">\n      <div class=\"col-md-6 col-lg-6 col-sm-12 col-xs-12\">\n        <h2 style=\"color: black;margin-top: 8%;margin-bottom: 5%;\">Enquire Now<hr style=\"width: 30%;\"></h2>\n        <p style=\"font-size: 18px;margin-bottom: 3%;color: black;\">For enquiries or  quotation requests, please fill in the below form and our team will revert back to you:</p>\n        <form >\n            <div class=\"form-group\">\n               <input type=\"text\" class=\"form-control\" placeholder=\"Name:\" name=\"name\" style=\"height: 60px;font-family: 'Bree Serif', serif;\" required=\"\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"contact.name\"> \n            </div>\n            <div class=\"form-group\">\n               <input type=\"email\" class=\"form-control\" placeholder=\"Email:\" name=\"email\" style=\"height: 60px;font-family: 'Bree Serif', serif;\" required=\"\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"contact.email\">\n                      </div>\n            <textarea rows=\"10\" name=\"message\" cols=\"87\" placeholder=\"Message:\" style=\"border-radius: 4px;padding-left: 10px;font-family: 'Bree Serif', serif;\" required=\"\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"contact.message\"></textarea><br/><br/>\n            <button class=\"button button1\" type=\"submit\" name=\"submit\" value=\"submit\" style=\"font-family: 'Bree Serif', serif;margin-bottom: 5%;font-size: 25px;\" (click) = 'contactUs()'>Submit</button>\n        </form>\n      </div>\n      <div class=\"col-md-6 col-lg-6 col-sm-0 col-xs-0 text-center\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container-fluid\" style=\"background-color:#f4f4f4;min-height: 380px;overflow: hidden;\">\n    <div class=\"row\" style=\"margin-top: 3%;margin-bottom: 3%;\">\n      <div class=\"col-md-1 col-lg-1 col-sm-0 col-xs-0\">\n      </div>\n      <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-6\">\n        <h4><a href=\"#About_Us\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">About Us</a></h4>\n        <h4><a href=\"#About_Us\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">How It Works</a></h4>\n        <h4><a href=\"#About_Us\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">Why Influencer Marketing</a></h4>\n        <h4><a href=\"#About_Us\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">Top Influencers</a></h4>\n        <h4><a href=\"#About_Us\" style=\"color: black;font-size: 20px;font-family: 'Bree Serif',serif;\">Get started Now</a></h4>\n      </div>\n      <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-6 \">\n        <h4><a routerLink=\"infreg\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Influencer SignIn</a></h4>\n        <h4><a routerLink=\"brandreg\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Brand SignIn</a></h4>\n        <h4><a routerLink=\"brandlogin\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Influencer LogIn</a></h4>\n        <h4><a routerLink=\"brandlogin\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Brand LogIn</a></h4>\n      </div>\n      <div class=\"col-md-2 col-lg-2 col-sm-6 col-xs-6 \">\n        <h4><a href=\"#\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Blog</a></h4>\n        <h4><a href=\"#\" style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Privacy Policy</a></h4>\n      </div>\n      <div class=\"col-md-3 col-lg-3 col-sm-12 col-xs-12 text-center\">\n        <h4 style=\"font-size: 25px;color: black;font-family: 'Bree Serif',serif;\">Contact Us<hr style=\"width: 30%;\"></h4>\n        <h4 style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">Phone No: 9871370285</h4>\n        <h4 style=\"font-size: 20px;color: black;font-family: 'Bree Serif',serif;\">splashfluence@gmail.com</h4>\n      </div>\n    </div>\n    <hr style=\"width: 90%;\">\n       <div class=\"row\" style=\"margin-top: 2%;\">\n           <p style=\"font-family: 'Bree Serif',serif;font-size: 20px;float: left;color: black;margin-top:2%;margin-left:3%;margin-right: 15%;\" class=\"wow fadeInUp\" data-wow-duration=\"2s\">&copy; SplashFluence  2017 All Rights Reserved. Designed by<a href=\"https://www.linkedin.com/in/himanshu-narang-630694130/\"> Himanshu Narang</a> </p>\n          <a href=\"#\" class=\"fa fa-facebook\" style=\"font-size: 25px;background-color: #f4f4f4;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n          <a href=\"#\" class=\"fa fa-twitter\" style=\"font-size: 25px;background-color: #f4f4f4;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n          <a href=\"#\" class=\"fa fa-linkedin\" style=\"font-size: 25px;background-color: #f4f4f4;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n          <a href=\"#\" class=\"fa fa-youtube\" style=\"font-size: 25px;background-color: #f4f4f4;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n          <a href=\"#\" class=\"fa fa-instagram\" style=\"font-size: 25px;background-color: #f4f4f4;color: black;padding: 20px;width: 50px;margin: 5px 2px;\"></a>\n       </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/influencer-welcome/influencer-welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splash_service__ = __webpack_require__("../../../../../src/app/splash.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfluencerWelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfluencerWelcomeComponent = (function () {
    function InfluencerWelcomeComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.username = '';
        this.contact = { name: '', email: '', message: '' };
    }
    InfluencerWelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        if (token == null)
            this.router.navigate(['../']);
        else {
            this.service.redirect(token).then(function (res) { return console.log('Authenticated'); }, function (err) { return _this.router.navigate(['../']); });
        }
        this.username = this.service.getUsername();
    };
    InfluencerWelcomeComponent.prototype.contactUs = function () {
        this.service.contactUs(this.contact).then(function (res) { return alert("Your message was sent successfully"); }, function (err) { return alert("Could not deliver the message"); });
    };
    InfluencerWelcomeComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['']);
    };
    InfluencerWelcomeComponent.prototype.coming = function () {
        alert("Coming soon!! Please be patient");
    };
    InfluencerWelcomeComponent.prototype.gotoHashtag = function (fragment) {
        var url = '';
        var urlWithSegments = this.router.url.split('#');
        if (urlWithSegments.length) {
            url = urlWithSegments[0];
        }
        window.location.hash = fragment;
        var element = document.querySelector("#" + fragment);
        if (element)
            element.scrollIntoView();
    };
    return InfluencerWelcomeComponent;
}());
InfluencerWelcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-influencer-welcome',
        template: __webpack_require__("../../../../../src/app/influencer-welcome/influencer-welcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/influencer-welcome/influencer-welcome.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__splash_service__["a" /* SplashService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__splash_service__["a" /* SplashService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], InfluencerWelcomeComponent);

var _a, _b, _c;
//# sourceMappingURL=influencer-welcome.component.js.map

/***/ }),

/***/ "../../../../../src/app/splash.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SplashService = (function () {
    function SplashService(http) {
        this.http = http;
        this.base = 'http://localhost:3000/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    SplashService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        // for demo purposes only
        var token = this.headers.get('x-access-token');
        if (token != null)
            this.headers.delete('x-access-token');
        return Promise.reject(error.message || error);
    };
    SplashService.prototype.setIsBrand = function (x) {
        this.store('isBrand', x);
    };
    SplashService.prototype.setToken = function (x) {
        this.store('token', x);
    };
    SplashService.prototype.setBrand = function (x) {
        this.store('brand', x);
    };
    SplashService.prototype.getBrand = function () {
        return this.retrieve('brand');
    };
    SplashService.prototype.setInfluencer = function (x) {
        this.store('influencer', x);
    };
    SplashService.prototype.getInfluencer = function () {
        return this.retrieve('influencer');
    };
    SplashService.prototype.setUsername = function (x) {
        this.store('username', x);
    };
    SplashService.prototype.getUsername = function () {
        return this.retrieve('username');
    };
    SplashService.prototype.getToken = function () {
        return this.retrieve('token');
    };
    SplashService.prototype.store = function (key, content) {
        localStorage.setItem(key, content);
    };
    SplashService.prototype.retrieve = function (key) {
        return localStorage.getItem(key);
    };
    SplashService.prototype.postUser = function (userDetails) {
        return this.http
            .post(this.base + 'users/register', userDetails, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SplashService.prototype.login = function (user) {
        return this.http
            .post(this.base + 'users/login', user, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SplashService.prototype.postCampaign = function (camp) {
        return this.http
            .post(this.base + 'camp', camp, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SplashService.prototype.resetPassword = function (password, token) {
        return this.http
            .post(this.base + 'users/resetpass/' + token, { password: password }, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SplashService.prototype.putCampaign = function (campId, influencerId) {
        return this.http
            .put(this.base + 'camp/' + campId, { influencerId: influencerId }, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SplashService.prototype.putInfluencer = function (campId) {
        return this.http
            .put(this.base + 'influencer/' + this.getInfluencer(), { campId: campId }, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SplashService.prototype.getInfluencerDetails = function (influencerId) {
        return this.http
            .get(this.base + 'influencer/' + influencerId, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SplashService.prototype.getCampaign = function () {
        return this.http
            .get(this.base + 'camp', { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SplashService.prototype.addInfluncer = function (influencer) {
        return this.http
            .post(this.base + 'camp/' + influencer.id, {}, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SplashService.prototype.contactUs = function (contact) {
        return this.http
            .post(this.base + 'users/contact', contact, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SplashService.prototype.update = function (update, token) {
        var _this = this;
        this.headers.append('x-access-token', token);
        return this.http
            .post(this.base + 'users/update', update, { headers: this.headers })
            .toPromise()
            .then(function (res) { return _this.headers.delete('x-access-token'); })
            .catch(this.handleError);
    };
    SplashService.prototype.redirect = function (token) {
        var _this = this;
        this.headers.append('x-access-token', token);
        return this.http
            .get(this.base + 'users/redirect', { headers: this.headers })
            .toPromise()
            .then(function (res) { return _this.headers.delete('x-access-token'); })
            .catch(this.handleError);
    };
    SplashService.prototype.forgot = function (email) {
        return this.http
            .post(this.base + 'users/forgot', email, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return SplashService;
}());
SplashService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], SplashService);

var _a;
//# sourceMappingURL=splash.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map