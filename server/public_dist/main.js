(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./portfolio-details/portfolio-details.module": [
		"./src/app/portfolio-details/portfolio-details.module.ts",
		"portfolio-details-portfolio-details-module~portfolio-portfolio-module~product-details-product-detail~6a8104a1",
		"portfolio-details-portfolio-details-module~portfolio-portfolio-module~product-product-module~service~f6967972",
		"portfolio-details-portfolio-details-module"
	],
	"./portfolio/portfolio.module": [
		"./src/app/portfolio/portfolio.module.ts",
		"portfolio-details-portfolio-details-module~portfolio-portfolio-module~product-details-product-detail~6a8104a1",
		"portfolio-details-portfolio-details-module~portfolio-portfolio-module~product-product-module~service~f6967972",
		"portfolio-portfolio-module"
	],
	"./product-details/product-details.module": [
		"./src/app/product-details/product-details.module.ts",
		"portfolio-details-portfolio-details-module~portfolio-portfolio-module~product-details-product-detail~6a8104a1",
		"product-details-product-details-module"
	],
	"./product/product.module": [
		"./src/app/product/product.module.ts",
		"portfolio-details-portfolio-details-module~portfolio-portfolio-module~product-details-product-detail~6a8104a1",
		"portfolio-details-portfolio-details-module~portfolio-portfolio-module~product-product-module~service~f6967972",
		"product-product-module"
	],
	"./service-details/service-details.module": [
		"./src/app/service-details/service-details.module.ts",
		"portfolio-details-portfolio-details-module~portfolio-portfolio-module~product-details-product-detail~6a8104a1",
		"portfolio-details-portfolio-details-module~portfolio-portfolio-module~product-product-module~service~f6967972",
		"service-details-service-details-module"
	],
	"./service/service.module": [
		"./src/app/service/service.module.ts",
		"service-service-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"heading-breadcrumbs\">\n  <div class=\"container\">\n    <div class=\"row d-flex align-items-center flex-wrap\">\n      <div class=\"col-md-7\">\n        <h1 class=\"h2\">About Us</h1>\n      </div>\n      <div class=\"col-md-5\">\n        <ul class=\"breadcrumb d-flex justify-content-end\">\n          <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a></li>\n          <li class=\"breadcrumb-item active\">About Us</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"content\">\n  <div class=\"container\">\n    <section class=\"bar\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"heading\">\n            <h2>About Almed Equipment</h2>\n          </div>\n          <p class=\"lead\">\n            Established in the year 2001, at Navi Mumbai, Maharashtra, India, we “Al Med Equipments,” are leading manufacturers of Medical equipment. These comprise Oxygen Generator, CardioFax 3R,Surgical Pendent, Surgical Instruments and others with attributes like automatic and manual mode, high performance, high resolution display, dimension accuracy and others. Here, our expertise also lies in offering customers services related to inspection, installation, service & maintenance for the offered equipment range.\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-8\">\n          <accordion [closeOthers]=\"oneAtATime\">\n            <accordion-group heading=\"Philosophy\">\n              <div class=\"row\">\n                <div class=\"col-md-4\"><img src=\"assets/img/our-team/1.jpg\" alt=\"\" class=\"img-fluid\"></div>\n                <div class=\"col-md-8\">\n                  <p>Our business operations are led by Mr. Zakir Shaikh, who has with him rich experience in our industry sector. His visionary business approach as well as strong service support provided by our experienced team of industry professionals has helped us to emerge as a leading name in our industry sector. The offered Medical equipment range finds application in areas like Hospital, Medical college, Clinics and other similar areas.</p>\n                </div>\n              </div>\n            </accordion-group>\n            <accordion-group heading=\"Vision\">\n              <p>Today, our consistent business approach while working in close coordination of each other helps us in enhancing the production process, thus meeting client's given specifications. We also hold expertise in making effective use of cutting edge process technology so as to incorporate latest process based features in the offered range of Medical equipment. Other than this, our comprehensive range is also stringently checked at our quality testing laboratory so as to ensure in them high performance standards.</p>\n            </accordion-group>\n            <accordion-group heading=\"Mission\">\n              <p>Comming soon..</p>\n            </accordion-group>\n          </accordion>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"video\">\n            <div class=\"embed-responsive embed-responsive-4by3\">\n              <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/7yTbFvXKD78?rel=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <section class=\"bar mt-0\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"heading\">\n            <h2>Our skills</h2>\n          </div>\n          <div style=\" height: 20px; border-radius: 0; margin-bottom: 20px;\" class=\"progress\">\n            <div role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\" class=\"progress-bar bg-primary\">Modular OT</div>\n          </div>\n          <div style=\" height: 20px; border-radius: 0; margin-bottom: 20px;\" class=\"progress\">\n            <div role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\" class=\"progress-bar bg-primary\">Epoxy Flooring</div>\n          </div>\n          <div style=\" height: 20px; border-radius: 0; margin-bottom: 20px;\" class=\"progress\">\n            <div role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\" class=\"progress-bar bg-primary\">Service & Support</div>\n          </div>\n          <div style=\" height: 20px; border-radius: 0; margin-bottom: 20px;\" class=\"progress\">\n            <div role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 85%;\" class=\"progress-bar bg-primary\">O2 Gen Setup</div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"heading\">\n            <h2>Our Focus</h2>\n          </div>\n          <ul class=\"ul-icons list-unstyled\">\n            <li>\n              <div class=\"icon-filled\"><i class=\"fa fa-check\"></i></div>Approach to the healthcare sector & present our work.\n            </li>\n            <li>\n              <div class=\"icon-filled\"><i class=\"fa fa-check\"></i></div>Make an flexible quotation.\n            </li>\n            <li>\n              <div class=\"icon-filled\"><i class=\"fa fa-check\"></i></div>Start working and implement within given period of time.\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"heading\">\n            <h2>Our values</h2>\n          </div>\n          <ul class=\"ul-icons list-unstyled\">\n            <li>\n              <div class=\"icon-filled\"><i class=\"fa fa-check\"></i></div>Dedication and percpective thinking towards the work.\n            </li>\n            <li>\n              <div class=\"icon-filled\"><i class=\"fa fa-check\"></i></div>Don't disturb hospital environment.\n            </li>\n            <li>\n              <div class=\"icon-filled\"><i class=\"fa fa-check\"></i></div>Ensure all equipment implements are proper.\n            </li>\n          </ul>\n        </div>\n      </div>\n    </section>\n  </div>\n  <section class=\"bar bg-gray no-mb\">\n    <div class=\"container\">\n      <div class=\"row showcase text-center\">\n        <div class=\"col-md-3 col-sm-6\">\n          <div class=\"item\">\n            <div class=\"icon-outlined icon-sm icon-thin\"><i class=\"fa fa-align-justify\"></i></div>\n            <h4><span class=\"h1 counter\">10</span><br> Products</h4>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6\">\n          <div class=\"item\">\n            <div class=\"icon-outlined icon-sm icon-thin\"><i class=\"fa fa-users\"></i></div>\n            <h4><span class=\"h1 counter\">85</span><br>Satisfied Clients</h4>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6\">\n          <div class=\"item\">\n            <div class=\"icon-outlined icon-sm icon-thin\"><i class=\"fa fa-copy\"></i></div>\n            <h4><span class=\"h1 counter\">56</span><br>Projects</h4>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6\">\n          <div class=\"item\">\n            <div class=\"icon-outlined icon-sm icon-thin\"><i class=\"fa fa-font\"></i></div>\n            <h4><span class=\"h1 counter\">23</span><br>AMC</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"bar text-center background-pentagon no-mb\">\n    <div class=\"container\">\n      <div class=\"col-md-12\">\n        <div class=\"heading\">\n          <h2>Meet Our Team</h2>\n        </div>\n        <div class=\"row text-center\">\n          <div class=\"col-md-3\">\n            <div data-animate=\"fadeInUp\" class=\"team-member\">\n              <div class=\"image\"><a href=\"team-member.html\"><img src=\"assets/img/our-team/1.jpg\" alt=\"\" class=\"img-fluid rounded-circle\"></a></div>\n              <h3><a href=\"javascript:void()\">Mr. Zakir Shaikh</a></h3>\n              <p class=\"role\">Founder</p>\n              <ul class=\"social list-inline\">\n                <li class=\"list-inline-item\"><a href=\"#\" class=\"external facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n                <li class=\"list-inline-item\"><a href=\"#\" class=\"external gplus\"><i class=\"fa fa-google-plus\"></i></a></li>\n                <li class=\"list-inline-item\"><a href=\"#\" class=\"external twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n                <li class=\"list-inline-item\"><a href=\"#\" class=\"email\"><i class=\"fa fa-envelope\"></i></a></li>\n              </ul>\n              <div class=\"text\">\n                <p>Well known personality into health care service sector, his is an esteemated speaker and key of Almed Equipment.</p>\n              </div>\n            </div>\n          </div>\n          <!-- /.team-member-->\n          <div data-animate=\"fadeInUp\" class=\"col-md-3\">\n            <div class=\"team-member\">\n              <div class=\"image\"><a href=\"team-member.html\"><img src=\"assets/img/our-team/2.jpg\" alt=\"\" class=\"img-fluid rounded-circle\"></a></div>\n              <h3><a href=\"javascript:void()\">Mrs. Hasina Shaikh</a></h3>\n              <p class=\"role\">CEO</p>\n              <ul class=\"social list-inline\">\n                <li class=\"list-inline-item\"><a href=\"#\" class=\"external facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n                <li class=\"list-inline-item\"><a href=\"#\" class=\"external gplus\"><i class=\"fa fa-google-plus\"></i></a></li>\n                <li class=\"list-inline-item\"><a href=\"#\" class=\"external twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n                <li class=\"list-inline-item\"><a href=\"#\" class=\"email\"><i class=\"fa fa-envelope\"></i></a></li>\n              </ul>\n              <div class=\"text\">\n                <p>Backborn support of the Almed Equipment, provide number valuable suggestion which leads deliver an successful products and service.</p>\n              </div>\n            </div>\n          </div>\n          <!-- /.team-member-->\n          <div data-animate=\"fadeInUp\" class=\"col-md-3\">\n            <div class=\"team-member\">\n              <div class=\"image\"><a href=\"team-member.html\"><img src=\"assets/img/our-team/2.jpg\" alt=\"\" class=\"img-fluid rounded-circle\"></a></div>\n              <h3><a href=\"javascript:void()\">Anjum Shaikh</a></h3>\n              <p class=\"role\">Office Administrative</p>\n              <ul class=\"social list-inline\">\n                <li class=\"list-inline-item\"><a href=\"#\" class=\"external facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n                <li class=\"list-inline-item\"><a href=\"#\" class=\"external gplus\"><i class=\"fa fa-google-plus\"></i></a></li>\n                <li class=\"list-inline-item\"><a href=\"#\" class=\"external twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n                <li class=\"list-inline-item\"><a href=\"#\" class=\"email\"><i class=\"fa fa-envelope\"></i></a></li>\n              </ul>\n              <div class=\"text\">\n                <p>She is an knowlegeable and well skilled admin of Almed Equipment. Help to figure out the quotation and billing of client.</p>\n              </div>\n            </div>\n          </div>\n          <!-- /.team-member-->\n          <div data-animate=\"fadeInUp\" class=\"col-md-3\">\n            <div class=\"team-member\">\n              <div class=\"image\"><a href=\"team-member.html\"><img src=\"assets/img/our-team/3.jpg\" alt=\"\" class=\"img-fluid rounded-circle\"></a></div>\n              <h3><a href=\"#\">Usman Shaikh</a></h3>\n              <p class=\"role\">Technical Officer</p>\n              <ul class=\"social list-inline\">\n                <li class=\"list-inline-item\"><a href=\"#\" class=\"external facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n                <li class=\"list-inline-item\"><a href=\"#\" class=\"external gplus\"><i class=\"fa fa-google-plus\"></i></a></li>\n                <li class=\"list-inline-item\"><a href=\"#\" class=\"external twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n                <li class=\"list-inline-item\"><a href=\"#\" class=\"email\"><i class=\"fa fa-envelope\"></i></a></li>\n              </ul>\n              <div class=\"text\">\n                <p>He is one of the key person, whose make all online work for Almed Equipment and gives best effort by ustilizing his technical skills.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"see-more text-center\"><a href=\"javascript:void()\" class=\"btn btn-template-outlined\">See all our team members</a></div>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
        this.oneAtATime = true;
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app-footer/app-footer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/app-footer/app-footer.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer.main-footer .copyrights{\n    padding: 10px 0 !important;\n}\n.footer.main-footer .footer-blog-list li{\n    margin-bottom: 0 !important;\n}\n.footer .fa .fa-anchor{\n    font-size: 10px;\n}"

/***/ }),

/***/ "./src/app/app-footer/app-footer.component.html":
/*!******************************************************!*\
  !*** ./src/app/app-footer/app-footer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- FOOTER -->\n<footer class=\"main-footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-5\">\n                <h4 class=\"h6\">About Us</h4>\n                <p>Established in the year 2001, at Navi Mumbai, Maharashtra, India, we “Al Med Equipments,” are leading manufacturers of Medical equipment.</p>\n                <hr>\n                <h4 class=\"h6\">Join Our Monthly Newsletter</h4>\n                <form>\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\">\n                    <div class=\"input-group-append\">\n                    <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-send\"></i></button>\n                    </div>\n                </div>\n                </form>\n                <hr class=\"d-block d-lg-none\">\n            </div>\n            <div class=\"col-lg-4\">\n                <h4 class=\"h6 text-center\">Site Map</h4>\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <ul class=\"list-unstyled footer-blog-list\">\n                            <li class=\"d-flex align-items-center\">\n                                <a routerLink=\"/about-us\"><i class=\"fa fa-anchor\"></i> About us</a>\n                            </li>\n                            <li class=\"d-flex align-items-center\">\n                                <a routerLink=\"contact-us\"><i class=\"fa fa-anchor\"></i> Contact us</a>\n                            </li>\n                            <li class=\"d-flex align-items-center\">\n                                <a routerLink=\"/products\"><i class=\"fa fa-anchor\"></i> Products</a>\n                            </li>\n                            <li class=\"d-flex align-items-center\">\n                                <a routerLink=\"/services\"><i class=\"fa fa-anchor\"></i> Services</a>\n                            </li>\n                            <li class=\"d-flex align-items-center\">\n                                <a routerLink=\"/portfolio\"><i class=\"fa fa-anchor\"></i> Portfolio</a>\n                            </li>\n                            <li class=\"d-flex align-items-center\">\n                                <a routerLink=\"/support\"><i class=\"fa fa-anchor\"></i> Support</a>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"col-6\">\n                        <ul class=\"list-unstyled footer-blog-list\">\n                            <li class=\"d-flex align-items-center\">\n                                <a routerLink=\"/faq\"><i class=\"fa fa-anchor\"></i> FAQ</a>\n                            </li>\n                            <li class=\"d-flex align-items-center\">\n                                <a routerLink=\"/news\"><i class=\"fa fa-anchor\"></i> News</a>\n                            </li>\n                            <li class=\"d-flex align-items-center\">\n                                <a routerLink=\"/events\"><i class=\"fa fa-anchor\"></i> Events</a>\n                            </li>\n                            <li class=\"d-flex align-items-center\">\n                                <a routerLink=\"/campaign\"><i class=\"fa fa-anchor\"></i> Campaign</a>\n                            </li>\n                            <li class=\"d-flex align-items-center\">\n                                <a routerLink=\"/offer\"><i class=\"fa fa-anchor\"></i> Offers</a>\n                            </li>\n                            <li class=\"d-flex align-items-center\">\n                                <a routerLink=\"/blog\"><i class=\"fa fa-anchor\"></i> Blogs</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                \n                <hr class=\"d-block d-lg-none\">\n            </div>\n            <div class=\"col-lg-3\">\n                <h4 class=\"h6\">Contact</h4>\n                <p class=\"text-uppercase\">\n                    <strong>Almed Equipment</strong><br>\n                    Nerul, Navi Mumbai, <br>Maharashtra, India \n                </p>\n                <a routerLink=\"/contact-us\" class=\"btn btn-template-main\">Go to contact page</a>\n                <hr class=\"d-block d-lg-none\">\n            </div>\n        </div>\n    </div>\n    <div class=\"copyrights\">\n        <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-4 text-center-md\">\n            <p>&copy; 2018. Almed Equipment</p>\n            </div>\n            <div class=\"col-lg-8 text-right text-center-md\">\n            <p>Template design by <a routerLink=\"/\">Ushaikh</a></p>\n            </div>\n        </div>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/app-footer/app-footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/app-footer/app-footer.component.ts ***!
  \****************************************************/
/*! exports provided: AppFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function() { return AppFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent() {
    }
    AppFooterComponent.prototype.ngOnInit = function () {
    };
    AppFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./app-footer.component.html */ "./src/app/app-footer/app-footer.component.html"),
            styles: [__webpack_require__(/*! ./app-footer.component.css */ "./src/app/app-footer/app-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppFooterComponent);
    return AppFooterComponent;
}());



/***/ }),

/***/ "./src/app/app-header/app-header.component.css":
/*!*****************************************************!*\
  !*** ./src/app/app-header/app-header.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navbar .navbar-nav > li > a{\n    /* padding: 0.6rem 1rem 0.6rem !important; */\n    letter-spacing:0 !important;\n    font-size: 0.8rem !important;\n}\n.dropdown:hover .dropdown-menu {\n    display: block;\n }\n.mt-35{\n    margin-top: 35px;\n}"

/***/ }),

/***/ "./src/app/app-header/app-header.component.html":
/*!******************************************************!*\
  !*** ./src/app/app-header/app-header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Top bar-->\n<div class=\"top-bar\">\n    <div class=\"container\">\n        <div class=\"row d-flex align-items-center\">\n        <div class=\"col-md-6 d-md-block d-none\">\n            <p>Contact us on +91 9322065136 or almedequip@gmail.com.</p>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"d-flex justify-content-md-end justify-content-between\">\n            <ul class=\"list-inline contact-info d-block d-md-none\">\n                <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-phone\"></i></a></li>\n                <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-envelope\"></i></a></li>\n            </ul>\n            <div class=\"login\"><a href=\"javascript:void()\" data-toggle=\"modal\" data-target=\"#login-modal\" class=\"login-btn\"><i class=\"fa fa-sign-in\"></i><span class=\"d-none d-md-inline-block\">Sign In</span></a><a href=\"javascript:void()\" class=\"signup-btn\"><i class=\"fa fa-user\"></i><span class=\"d-none d-md-inline-block\">Sign Up</span></a></div>\n            <ul class=\"social-custom list-inline\">\n                <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n                <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                <li class=\"list-inline-item\"><a href=\"#\"><i class=\"fa fa-envelope\"></i></a></li>\n            </ul>\n            </div>\n        </div>\n        </div>\n    </div>\n</div>\n<!-- Top bar end-->\n<!-- Login Modal-->\n<div id=\"login-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"login-modalLabel\" aria-hidden=\"true\" class=\"modal fade\">\n    <div role=\"document\" class=\"modal-dialog\">\n        <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h4 id=\"login-modalLabel\" class=\"modal-title\">Customer Login</h4>\n            <button type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\" class=\"close\"><span aria-hidden=\"true\">×</span></button>\n        </div>\n        <div class=\"modal-body\">\n            <form action=\"customer-orders.html\" method=\"get\">\n            <div class=\"form-group\">\n                <input id=\"email_modal\" type=\"text\" placeholder=\"email\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <input id=\"password_modal\" type=\"password\" placeholder=\"password\" class=\"form-control\">\n            </div>\n            <p class=\"text-center\">\n                <button class=\"btn btn-template-outlined\"><i class=\"fa fa-sign-in\"></i> Log in</button>\n            </p>\n            </form>\n            <p class=\"text-center text-muted\">Not registered yet?</p>\n            <p class=\"text-center text-muted\"><a href=\"customer-register.html\"><strong>Register now</strong></a>! It is easy and done in 1 minute and gives you access to special discounts and much more!</p>\n        </div>\n        </div>\n    </div>\n</div>\n<!-- Login modal end-->\n\n<!-- Navbar Start-->\n<header class=\"nav-holder make-sticky\">\n    <div id=\"navbar\" role=\"navigation\" class=\"navbar navbar-expand-lg\">\n        <div class=\"container\"><a routerLink=\"/\" class=\"navbar-brand home\"><img src=\"assets/img/almed-logo.png\" alt=\"Universal logo\" class=\"d-none d-md-inline-block\"><img src=\"assets/img/almed-logo-small.png\" alt=\"Universal logo\" class=\"d-inline-block d-md-none\"><span class=\"sr-only\">Almed - go to homepage</span></a>\n        <button type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" class=\"navbar-toggler btn-template-outlined\"><span class=\"sr-only\">Toggle navigation</span><i class=\"fa fa-align-justify\"></i></button>\n        <div id=\"navigation\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav ml-auto\">\n                <li class=\"nav-item\" routerLinkActive=\"active\"><a routerLink=\"/dashboard\">Home </a></li>\n                <li class=\"nav-item\" routerLinkActive=\"active\"><a routerLink=\"/about-us\">About us </a></li>\n                <!-- ========== PRODUCT START ==================-->\n                <li class=\"nav-item dropdown menu-large\" routerLinkActive=\"active\"><a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">Products<b class=\"caret\"></b></a>\n                    <ul class=\"dropdown-menu megamenu\">\n                    <li>\n                        <div class=\"row\">\n                        <div class=\"col-lg-4\"><img src=\"assets/img/template-easy-code.png\" alt=\"\" class=\"img-fluid d-none d-lg-block mt-35\"></div>\n                            <div class=\"col-lg-4 col-md-6\">\n                                <h5><a routerLink=\"/products\" [queryParams]=\"{ category: 'latest' }\"> Latest Products</a></h5>\n                                <ul class=\"list-unstyled mb-3\" *ngIf=\"products\">\n                                    <li class=\"nav-item\" *ngFor=\"let product of products\"><a  *ngIf=\"product.category == 'latest'\"   routerLink=\"/product-details\" [queryParams]=\"{ code:product.code }\" class=\"nav-link\">{{ product.name }}</a></li>\n                                </ul>\n                            </div>\n                            <div class=\"col-lg-4 col-md-6\">\n                                <h5><a routerLink=\"/products\" [queryParams]=\"{ category: 'featured' }\"> Featured Products</a></h5>\n                                <ul class=\"list-unstyled mb-3\" *ngIf=\"products\">\n                                    <li class=\"nav-item\" *ngFor=\"let product of products\"><a  *ngIf=\"product.category == 'featured'\"   routerLink=\"/product-details\" [queryParams]=\"{ code:product.code }\" class=\"nav-link\">{{ product.name }}</a></li>\n                                </ul>\n                            </div>\n                        </div>\n                    </li>\n                    </ul>\n                </li>\n                <!-- ========== PRODUCT END ==================-->\n                <!-- ========== SERVICE START ==================-->\n                <li class=\"nav-item dropdown menu-large\" routerLinkActive=\"active\"><a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">Services <b class=\"caret\"></b></a>\n                    <ul class=\"dropdown-menu megamenu\">\n                        <li>\n                            <div class=\"row\" *ngIf=\"serviceCategories\">\n                                <div class=\"col-lg-3\"><img src=\"assets/img/template-homepage.png\" alt=\"\" class=\"img-fluid d-none d-lg-block mt-35\"></div>\n                                <div class=\"col-lg-3 col-md-4\" *ngFor=\"let category of serviceCategories\">\n                                    <h5><a routerLink=\"/services\">{{ category.name }}</a></h5>\n                                    <ul class=\"list-unstyled mb-3\" *ngIf=\"category.list\">\n                                        <li class=\"nav-item\" *ngFor=\"let service of category.list\"><a routerLink=\"/service-details\" [queryParams]=\"{ code:service.code }\" class=\"nav-link\">{{ service.name }}</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </li>\n                    </ul>\n                </li>\n                <!-- ========== SERVICES END ==================-->\n                <!-- ========== PORTFOLIO START ==================-->\n                <li class=\"nav-item dropdown menu-large\" routerLinkActive=\"active\"><a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">Portfolio<b class=\"caret\"></b></a>\n                    <ul class=\"dropdown-menu megamenu\">\n                    <li>\n                        <div class=\"row\" *ngIf=\"portfolioCategories\">\n                            <div class=\"col-lg-3\"><img src=\"assets/img/template-easy-code.png\" alt=\"\" class=\"img-fluid d-none d-lg-block mt-35\"></div>\n                            <div class=\"col-lg-3 col-md-6\" *ngFor=\"let portfolio of portfolioCategories\">\n                                <h5><a routerLink=\"/portfolio\" [queryParams]=\"{ code: portfolio.code }\"> {{ portfolio.name }}</a></h5>\n                                <ul class=\"list-unstyled mb-3\" *ngIf=\"portfolio.list\">\n                                    <li class=\"nav-item\" *ngFor=\"let project of portfolio.list\"><a routerLink=\"/portfolio\" [queryParams]=\"{ code: project }\" class=\"nav-link\">{{ project.name }}</a></li>\n                                </ul>\n                            </div>\n                        </div>\n                    </li>\n                    </ul>\n                </li>\n                <!-- ========== PORTFOLIO END ==================-->\n                <!-- <li class=\"nav-item\"><a routerLink=\"/support\">Support </a></li> -->\n                <li class=\"nav-item\" routerLinkActive=\"active\"><a routerLink=\"/contact-us\">Contact us </a></li>\n                <!-- ========== More Menu dropdown ==================-->\n                <li class=\"nav-item dropdown\" routerLinkActive=\"active\"><a href=\"javascript: void(0)\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">More <b class=\"caret\"></b></a>\n                    <ul class=\"dropdown-menu\">\n                      <li class=\"dropdown-item\"><a routerLink=\"/support\" class=\"nav-link\">Support</a></li>\n                      <li class=\"dropdown-item\"><a routerLink=\"/faq\" class=\"nav-link\">FAQ</a></li>\n                      <li class=\"dropdown-item\"><a routerLink=\"/news\" class=\"nav-link\">News</a></li>\n                      <li class=\"dropdown-item\"><a routerLink=\"/events\" class=\"nav-link\">Events</a></li>\n                      <li class=\"dropdown-item\"><a routerLink=\"/blog\" class=\"nav-link\">Blog</a></li>\n                      <li class=\"dropdown-item\"><a routerLink=\"/campaign\" class=\"nav-link\">Campaign</a></li>\n                      <li class=\"dropdown-item\"><a routerLink=\"/offer\" class=\"nav-link\">Offer</a></li>\n                    </ul>\n                </li>\n                <!-- ========== More Menu dropdown end ==================-->\n            </ul>\n        </div>\n        <div id=\"search\" class=\"collapse clearfix\">\n            <form role=\"search\" class=\"navbar-form\">\n                <div class=\"input-group\">\n                    <input type=\"text\" placeholder=\"Search\" class=\"form-control\"><span class=\"input-group-btn\">\n                    <button type=\"submit\" class=\"btn btn-template-main\"><i class=\"fa fa-search\"></i></button></span>\n                </div>\n            </form>\n        </div>\n        </div>\n    </div>\n</header>\n<!-- Navbar End-->"

/***/ }),

/***/ "./src/app/app-header/app-header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/app-header/app-header.component.ts ***!
  \****************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data-services */ "./src/app/services/data-services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(dataServices) {
        this.dataServices = dataServices;
        this.dataArray = [];
        this.products = this.dataServices.products;
        this.services = this.dataServices.services;
        this.serviceCategories = this.dataServices.getServiceByCategory();
        this.portfolioCategories = this.dataServices.getPortfolioByCategory();
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
        // console.log("dataArray", this.serviceCategories);
    };
    AppHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./app-header.component.html */ "./src/app/app-header/app-header.component.html"),
            styles: [__webpack_require__(/*! ./app-header.component.css */ "./src/app/app-header/app-header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_services__WEBPACK_IMPORTED_MODULE_1__["DataServices"]])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./full-layout/full-layout.component */ "./src/app/full-layout/full-layout.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _offer_offer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./offer/offer.component */ "./src/app/offer/offer.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _campaign_campaign_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./campaign/campaign.component */ "./src/app/campaign/campaign.component.ts");
/* harmony import */ var _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./video-list/video-list.component */ "./src/app/video-list/video-list.component.ts");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/index.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { ProductComponent } from './product/product.component';












// const routes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashboard', component: DashboardComponent},
//   { path: 'full', component: FullLayoutComponent},
// ];
var appRoutes = [
    {
        path: '',
        component: _full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_3__["FullLayoutComponent"],
        //canActivate: [AuthGuard],
        children: [
            { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
            { path: 'about-us', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"] },
            { path: 'contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"] },
            { path: 'products', loadChildren: './product/product.module#ProductModule' },
            { path: 'product-details', loadChildren: './product-details/product-details.module#ProductDetailsModule' },
            { path: 'services', loadChildren: './service/service.module#ServiceModule' },
            { path: 'service-details', loadChildren: './service-details/service-details.module#ServiceDetailsModule' },
            { path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioModule' },
            { path: 'portfolio-details', loadChildren: './portfolio-details/portfolio-details.module#PortfolioDetailsModule' },
            { path: 'support', component: _support_support_component__WEBPACK_IMPORTED_MODULE_6__["SupportComponent"] },
            { path: 'faq', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_7__["FaqComponent"] },
            { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_8__["NewsComponent"] },
            { path: 'events', component: _events_events_component__WEBPACK_IMPORTED_MODULE_9__["EventsComponent"] },
            { path: 'campaign', component: _campaign_campaign_component__WEBPACK_IMPORTED_MODULE_12__["CampaignComponent"] },
            { path: 'offer', component: _offer_offer_component__WEBPACK_IMPORTED_MODULE_10__["OfferComponent"] },
            { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_11__["BlogComponent"] },
        ]
    },
    // {
    //   path: 'simpleLayout',
    //   component: SimpleLayoutComponent,
    //   children: [
    //     { path: 'login', component: LoginComponent },
    //   ]
    // }
    {
        path: '**',
        redirectTo: '/'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes),
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"].forRoot()
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"],
                _support_support_component__WEBPACK_IMPORTED_MODULE_6__["SupportComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_7__["FaqComponent"],
                _events_events_component__WEBPACK_IMPORTED_MODULE_9__["EventsComponent"],
                _offer_offer_component__WEBPACK_IMPORTED_MODULE_10__["OfferComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_11__["BlogComponent"],
                _campaign_campaign_component__WEBPACK_IMPORTED_MODULE_12__["CampaignComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_8__["NewsComponent"],
                _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_13__["VideoListComponent"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\n<router-outlet></router-outlet>\n<!-- <app-footer></app-footer> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        $('.nav a').click(function () {
            $('.navbar-collapse').hide();
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-header/app-header.component */ "./src/app/app-header/app-header.component.ts");
/* harmony import */ var _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-footer/app-footer.component */ "./src/app/app-footer/app-footer.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./full-layout/full-layout.component */ "./src/app/full-layout/full-layout.component.ts");
/* harmony import */ var _services_data_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/data-services */ "./src/app/services/data-services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Import generated components






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_5__["AppHeaderComponent"],
                _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_6__["AppFooterComponent"],
                _full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_8__["FullLayoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            exports: [],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"], useValue: '/' }, _services_data_services__WEBPACK_IMPORTED_MODULE_9__["DataServices"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"heading-breadcrumbs\">\n  <div class=\"container\">\n    <div class=\"row d-flex align-items-center flex-wrap\">\n      <div class=\"col-md-7\">\n        <h1 class=\"h2\">Blog</h1>\n      </div>\n      <div class=\"col-md-5\">\n        <ul class=\"breadcrumb d-flex justify-content-end\">\n          <li class=\"breadcrumb-item\">\n            <a routerLink=\"/\">Home</a>\n          </li>\n          <li class=\"breadcrumb-item active\">Blog</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n  \n<div id=\"content\">\n  <div class=\"container\">\n    <section>\n      <div class=\"row bar\">\n          <div class=\"col-md-12 text-center\">\n            <div class=\"alert alert-info\">Coming Soon...</div>\n          </div>\n        </div>\n    </section>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/campaign/campaign.component.css":
/*!*************************************************!*\
  !*** ./src/app/campaign/campaign.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/campaign/campaign.component.html":
/*!**************************************************!*\
  !*** ./src/app/campaign/campaign.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"heading-breadcrumbs\">\n    <div class=\"container\">\n      <div class=\"row d-flex align-items-center flex-wrap\">\n        <div class=\"col-md-7\">\n          <h1 class=\"h2\">Campaign</h1>\n        </div>\n        <div class=\"col-md-5\">\n          <ul class=\"breadcrumb d-flex justify-content-end\">\n            <li class=\"breadcrumb-item\">\n              <a routerLink=\"/\">Home</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Campaign</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n    \n  <div id=\"content\">\n    <div class=\"container\">\n      <section>\n        <div class=\"row bar\">\n            <div class=\"col-md-12 text-center\">\n              <div class=\"alert alert-info\">Coming Soon...</div>\n            </div>\n          </div>\n      </section>\n    </div>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/campaign/campaign.component.ts":
/*!************************************************!*\
  !*** ./src/app/campaign/campaign.component.ts ***!
  \************************************************/
/*! exports provided: CampaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignComponent", function() { return CampaignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CampaignComponent = /** @class */ (function () {
    function CampaignComponent() {
    }
    CampaignComponent.prototype.ngOnInit = function () {
    };
    CampaignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-campaign',
            template: __webpack_require__(/*! ./campaign.component.html */ "./src/app/campaign/campaign.component.html"),
            styles: [__webpack_require__(/*! ./campaign.component.css */ "./src/app/campaign/campaign.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CampaignComponent);
    return CampaignComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      \n      <div id=\"heading-breadcrumbs\" class=\"brder-top-0 border-bottom-0\">\n        <div class=\"container\">\n          <div class=\"row d-flex align-items-center flex-wrap\">\n            <div class=\"col-md-7\">\n              <h1 class=\"h2\">Contact</h1>\n            </div>\n            <div class=\"col-md-5\">\n              <ul class=\"breadcrumb d-flex justify-content-end\">\n                <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a></li>\n                <li class=\"breadcrumb-item active\">Contact</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"content\">\n        <div id=\"contact\" class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-lg-8\">\n              <section class=\"bar\">\n                <div class=\"heading\">\n                  <h2>We are here to help you</h2>\n                </div>\n                <p class=\"lead\">Are you curious about something? Do you have some kind of problem with our products? As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built gay party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.</p>\n                <p class=\"text-sm\">Please feel free to contact us, our customer service center is working for you 24/7.</p>\n                <div class=\"heading\">\n                  <h3>Contact form</h3>\n                </div>\n                <form>\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label for=\"firstname\">Firstname</label>\n                        <input id=\"firstname\" type=\"text\" class=\"form-control\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label for=\"lastname\">Lastname</label>\n                        <input id=\"lastname\" type=\"text\" class=\"form-control\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label for=\"email\">Email</label>\n                        <input id=\"email\" type=\"text\" class=\"form-control\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label for=\"subject\">Subject</label>\n                        <input id=\"subject\" type=\"text\" class=\"form-control\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <label for=\"message\">Message</label>\n                        <textarea id=\"message\" class=\"form-control\"></textarea>\n                      </div>\n                    </div>\n                    <div class=\"col-md-12 text-center\">\n                      <button type=\"submit\" class=\"btn btn-template-outlined\"><i class=\"fa fa-envelope-o\"></i> Send message</button>\n                    </div>\n                  </div>\n                </form>\n              </section>\n            </div>\n            <div class=\"col-lg-4\">\n              <section class=\"bar mb-0\">\n                <h3 class=\"text-uppercase\">Address</h3>\n                <p class=\"text-sm\">13/25 New Avenue<br>New Heaven<br>45Y 73J<br>England<br><strong>Great Britain</strong></p>\n                <h3 class=\"text-uppercase\">Call center</h3>\n                <p class=\"text-muted text-sm\">This number is toll free if calling from Great Britain otherwise we advise you to use the electronic form of communication.</p>\n                <p><strong>+33 555 444 333</strong></p>\n                <h3 class=\"text-uppercase\">Electronic support</h3>\n                <p class=\"text-muted text-sm\">Please feel free to write an email to us or to use our electronic ticketing system.</p>\n                <ul class=\"text-sm\">\n                  <li><strong><a href=\"mailto:\">info@fakeemail.com</a></strong></li>\n                  <li><strong><a href=\"#\">Ticketio</a></strong> - our ticketing support platform</li>\n                </ul>\n              </section>\n            </div>\n          </div>\n        </div>\n        <div id=\"map\"></div>\n      </div>\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-blog-post .image{\n    width: 200px;\n    height: 175px;\n}\n.home-blog-post h4{\n    height: 75px;\n}\n.home-blog-post .text .intro  {\n    min-height: 130px !important;\n}\n.dashboard-carousel{\n    background: url('photogrid.jpg') center center repeat; background-size: cover;\n}\n.bar {\n    padding: 20px 0 !important;\n}\n.testimonial .icon .fa-quote-left{\n    font-size: medium !important;\n}\n.video .card-body{\n    overflow-y: scroll;\n    height: 350px !important;\n}\n.video .panel{\n    margin-bottom: 0px !important;\n}\n.card-header:first-child{\n    margin: 0 !important;\n    padding: 0 !important;\n}\n.card {\n    margin-bottom: 5px !important;\n}\n.home-carousel h2{\n    font-size: 28px;\n    font-weight: bolder;\n    text-shadow: -1px 0 #ffffff, 0 1px black, 1px 0 #ffffff, 0 -1px #fff;\n    color: initial;\n    margin-top: 20px;\n}\n.one-edge-shadow {\n\tbox-shadow: 0 10px 20px -4px black;\n}\n.image-wrap{\n    /* -webkit-border-radius: 20px;\n\t-webkit-border-radius: 20px;\n\t-moz-border-radius: 20px;\n\t-moz-border-radius: 20px;\n\tborder-radius: 20px;\n    border-radius: 20px; */\n\tbox-shadow: inset 0 -1px 0 rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.6);\n\ttransition: 1s;\n\tborder-radius: 20px;\n}\n.image-shadow{\n    width: 97%;\n    height: 97%;\n    box-shadow: 10px 10px 5px #2f2f2f;\n}\n.image-wrap:before {\n\tposition: absolute;\n\tcontent: ' ';\n\twidth: 100%;\n\theight: 50%;\n\ttop: 0;\n\tleft: 0;\n\tborder-radius: 20px;\n\n\t/* background: -moz-linear-gradient(top, rgba(255,255,255,0.7) 0%, rgba(255,255,255,.1) 100%);\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0.7)), color-stop(100%,rgba(255,255,255,.1)));\n\tbackground: linear-gradient(top, rgba(255,255,255,0.7) 0%,rgba(255,255,255,.1) 100%); */\n}\n.image-wrap:after {\n\tposition: absolute;\n\tcontent: ' ';\n\twidth: 100%;\n\theight: 30px;\n\tbottom: -31px;\n\tleft: 0;\n\n\t-webkit-border-top-left-radius: 20px;\n\t-webkit-border-top-right-radius: 20px;\n\t-moz-border-radius-topleft: 20px;\n\t-moz-border-radius-topright: 20px;\n\tborder-top-left-radius: 20px;\n\tborder-top-right-radius: 20px;\n\n\t/* background: -moz-linear-gradient(top, rgba(230,230,230,.3) 0%, rgba(230,230,230,0) 100%);\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(230,230,230,.3)), color-stop(100%,rgba(230,230,230,0)));\n\tbackground: linear-gradient(top, rgba(230,230,230,.3) 0%,rgba(230,230,230,0) 100%); */\n}\n.shadow-b{\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.img-style-1{\n    max-width: 100%;\n    height: auto;\n}\n.img-style-1:before, .img-style-1:after {\n    z-index: -1;\n    position: absolute;\n    content: \"\";\n    bottom: 25px;\n    left: 10px;\n    width: 50%;\n    top: 80%;\n    max-width:300px;\n    background: #777;\n    box-shadow: 0 35px 20px #777;\n    -webkit-transform: rotate(-8deg);\n    transform: rotate(-8deg);\n }\n.img-style-1:after {\n    -webkit-transform: rotate(8deg);\n    transform: rotate(8deg);\n    right: 10px;\n    left: auto;\n }\n.warnign-check-color{\n    color: #ed143d;\n}\n.ok-check-color{\n    color:#006400;\n}\n@media(max-width:768px){\n    .dashboard-carousel h1, .dashboard-carousel h2{\n        font-size: 130%;\n        margin-top: 20px;\n    }\n    .dashboard-carousel p{\n        font-size: 65%;\n    }\n    .home-blog-post .image{\n        width: 100%;\n        height: auto;\n    }\n\n    .home-blog-post .text .intro  {\n        min-height: 0 !important;\n    }\n    .home-carousel li, .home-carousel p{\n        font-size: 0.75rem;\n        text-align: left;\n    }\n    .home-carousel p, .home-carousel h1, .home-carousel ul{\n        text-align: left;\n    }\n    p.lead{\n        font-size: 100%\n    }\n    .heading h1, .panel-heading h1, .heading h2, .panel-heading h2, .heading h3, .panel-heading h3, .heading h4, .panel-heading h4, .heading h5, .panel-heading h5, .heading h6, .panel-heading h6{\n        font-size: 130%;\n    }\n    .h4, h4 {\n        font-size: 1rem;\n    }\n    .btn{\n        font-size: 0.6rem;\n    }\n    .card-body{\n        padding: 5px;\n    }\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Home carousel -->\n<section class=\"bar background-white relative-positioned dashboard-carousel\">\n    <div class=\"container\">\n        <!-- Carousel Start-->\n        <div class=\"home-carousel\">\n            <div class=\"dark-mask mask-primary\"></div>\n            <style>\n                ol .carousel-indicators{\n                    bottom: -35px !important;\n                }\n            </style>\n            <carousel [interval]=\"5000\">\n                <slide>\n                    <div class=\"row\">\n                        <div class=\"col-md-6 text-right\">\n                            <!-- <p><img src=\"assets/img/almed-logo-small.png\" alt=\"\" class=\"ml-auto\"></p> -->\n                            <h1>Innovative Solution for SSI</h1>\n                            <p>Infection at or near surgical incisions within 30 days of an operative procedure contributes substantially to surgical morbidity and mortality each year</p>\n                        </div>\n                        <div class=\"col-md-6 text-center\"><img src=\"assets/img/carousel/home-slide1.png\" alt=\"\" class=\"img-fluid image-wrap image-shadow\"></div>\n                    </div>\n                </slide>\n                <slide>\n                    <div class=\"row\">\n                        <div class=\"col-md-6 text-center\"><img src=\"assets/img/carousel/home-slide2.png\" alt=\"\" class=\"img-fluid image-wrap image-shadow\"></div>\n                        <div class=\"col-md-6\">\n                            <h2>Source of Surgical site infections</h2>\n                            <ul class=\"list-unstyled\">\n                                <li><i class=\"fa fa-times-rectangle-o warnign-check-color\"></i> Window & slite AC should be used</li>\n                                <li><i class=\"fa fa-times-rectangle-o warnign-check-color\"></i> Duct is breeding ground for bacteria, fungus, mauld & virus</li>\n                                <li><i class=\"fa fa-times-rectangle-o warnign-check-color\"></i> Hospitality bugs kills more than cars</li>\n                                <li><i class=\"fa fa-check-square-o ok-check-color\"></i> NABH given guideline for controlling the infection in OT</li>\n                            </ul>\n                        </div>\n                    </div>\n                </slide>\n                <slide>\n                    <div class=\"row\">\n                        <div class=\"col-md-6 text-center\"><img src=\"assets/img/carousel/home-slide3.png\" alt=\"\" class=\"img-fluid image-wrap image-shadow\"></div>\n                        <div class=\"col-md-5\">\n                            <h1>Magical Disinfectant</h1>\n                            <ul class=\"list-unstyled\">\n                                <li><i class=\"fa fa-check-square-o ok-check-color\"></i>Elegant product of almed</li>\n                                <li><i class=\"fa fa-check-square-o ok-check-color\"></i>Clean stink smell</li>\n                                <li><i class=\"fa fa-check-square-o ok-check-color\"></i>Distroy bacteria</li>\n                                <li><i class=\"fa fa-check-square-o ok-check-color\"></i>Control air born infection</li>\n                            </ul>\n                        </div>\n                    </div>\n                </slide>\n                <slide>\n                    <div class=\"row\">\n                        <div class=\"col-md-5\">\n                            <h1>Air Flow Circulation Pattern</h1>\n                            <p>Ductless Laminar Air Flow & Positive Pressure System with AC. Ozon producing UV Light given to avoid growth of the bacteria, fungus etc on HEPA filter</p>\n                        </div>\n                        <div class=\"col-md-6 text-center\"><img src=\"assets/img/carousel/home-slide4.png\" alt=\"\" class=\"img-fluid image-wrap image-shadow\"></div>\n                    </div>\n                </slide>\n            </carousel>\n        </div>\n      <!-- Carousel End-->\n    </div>\n</section>\n<!-- /.bar -->\n\n<!-- Product section -->\n<section class=\"bg-white bar\">\n    <div class=\"container\">\n        <div class=\"heading text-center\">\n            <h2>Our Innovative Products</h2>\n        </div>\n        <p class=\"lead\">\n            Browse the comprehensive range of medical equipment, surgical instruments & hospital products manufactured by Almed Equipment\n            <span class=\"accent\">Check our products!</span>\n        </p>\n        <div class=\"row\">\n            <div class=\"col-lg-3\">\n                <div class=\"home-blog-post\">\n                    <div class=\"image text-center\">\n                        <img src=\"assets/img/products/o3-gen.png\" alt=\"o3 gen\" class=\"img-fluid\">\n                        <div class=\"overlay d-flex align-items-center justify-content-center\"><a routerLink=\"/products\" class=\"btn btn-template-outlined-white\"><i class=\"fa fa-chain\"> </i> Read More</a></div>\n                    </div>\n                    <div class=\"text\">\n                        <h4><a href=\"#\">O3 Gen Magical Disinfectant</a></h4>\n                        <p class=\"author-category\">Brand <a href=\"#\">Almed Equipment</a></p>\n                        <p class=\"intro\">Go for the unique solution to improve the quality of air inside operation theater, special rooms, hotel & resort etc.</p><a href=\"#\" class=\"btn btn-template-outlined\">Continue Reading</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3\">\n                <div class=\"home-blog-post\">\n                <div class=\"image text-center\">\n                        <img src=\"assets/img/products/surgeon-control-panel.gif\" alt=\"surgeon-control-panel\" class=\"img-fluid\">\n                    <div class=\"overlay d-flex align-items-center justify-content-center\"><a routerLink=\"/products\" class=\"btn btn-template-outlined-white\"><i class=\"fa fa-chain\"> </i> Read More</a></div>\n                </div>\n                <div class=\"text\">\n                    <h4><a href=\"#\">Surgeon Control Panel</a></h4>\n                    <p class=\"author-category\">Brand <a href=\"#\">Almed Equipment</a></p>\n                    <p class=\"intro\">One of the most useful things for Operation theater, which can be build to control operation theater's activity. Its main feature is that it can be operated using android app from mobile device. </p><a href=\"#\" class=\"btn btn-template-outlined\">Continue Reading</a>\n                </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3\">\n                <div class=\"home-blog-post\">\n                    <div class=\"image text-center\">\n                        <img src=\"assets/img/products/positive-pressure-system.jpg\" alt=\"positive-pressure-system\" class=\"img-fluid\">\n                        <div class=\"overlay d-flex align-items-center justify-content-center\"><a routerLink=\"/products\" class=\"btn btn-template-outlined-white\"><i class=\"fa fa-chain\"> </i> Read More</a></div>\n                    </div>\n                    <div class=\"text\">\n                        <h4><a href=\"#\">PPS with air conditioning</a></h4>\n                        <p class=\"author-category\">Brand <a href=\"#\">Almed Equipment</a></p>\n                        <p class=\"intro\">Main the positive pressure as per NABH.</p><a href=\"#\" class=\"btn btn-template-outlined\">Continue Reading</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3\">\n                <div class=\"home-blog-post\">\n                    <div class=\"image text-center\">\n                        <img src=\"assets/img/products/shoe-wrapper-machine.jpg\" alt=\"shoe-wrapper-machine\" class=\"img-fluid\">\n                        <div class=\"overlay d-flex align-items-center justify-content-center\"><a routerLink=\"/products\" class=\"btn btn-template-outlined-white\"><i class=\"fa fa-chain\"> </i> Read More</a></div>\n                    </div>\n                    <div class=\"text\">\n                        <h4><a href=\"#\">Shoes Wrapper Machine</a></h4>\n                        <p class=\"author-category\">Brand <a href=\"#\">Almed Equipment</a></p>\n                        <p class=\"intro\">Wrapp the shoes using machine, plastic wrapper are also available.</p><a href=\"#\" class=\"btn btn-template-outlined\">Continue Reading</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- /.bar -->\n\n<!-- Service section -->\n<section class=\"bar background-white\">\n    <div class=\"container text-center\">\n        <div class=\"heading text-center\">\n            <h2>Our Main Focus</h2>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-4 col-md-6\">\n                <div class=\"box-simple\">\n                <div class=\"icon-outlined\"><i class=\"fa fa-desktop\"></i></div>\n                <h3 class=\"h4\">Modular OT</h3>\n                <p>Supplier & Manufacturer of Operation Theatre Equipments & LED Operation Theatre Lights</p>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6\">\n                <div class=\"box-simple\">\n                <div class=\"icon-outlined\"><i class=\"fa fa-print\"></i></div>\n                <h3 class=\"h4\">Oxygen Genrator Plant</h3>\n                <p>Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an.</p>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6\">\n                <div class=\"box-simple\">\n                <div class=\"icon-outlined\"><i class=\"fa fa-globe\"></i></div>\n                <h3 class=\"h4\">Epoxy Services</h3>\n                <p>Our expertise are available to help for expoxy flooring. We have given best service to several clients and received positive feedback of our work    from them </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- /.bar -->\n\n<!-- Video and achivements collections -->\n<section style=\"background: url(assets/img/texture-turquoise.png) center top no-repeat; background-size: cover;\" class=\"bar no-mb bg-fixed relative-positioned\">\n    <div class=\"video container\">\n        <div class=\"heading text-center\">\n            <h2>Collections</h2>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <accordion [closeOthers]=\"oneAtATime\">\n                    <accordion-group heading=\"Videos\" [isOpen]=\"true\" [panelClass]=\"customClass\">\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <app-video-list></app-video-list>\n                                </div>\n                            </div>\n                        </div>\n                    </accordion-group>\n                    <accordion-group heading=\"Achievements\">\n                        <div class=\"card-body\">\n                            <div class=\"container\">\n                                <section class=\"bar\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <p class=\"lead\">Our company get the awards and certificates on the behalf of valuable services, dedication towards the medical sector. Mr. Zakir Shaikh as a esteemated speaker whose participating into conferences, exhibitions to spread his knowledge.</p>\n                                        </div>\n                                    </div>\n                                  <div class=\"row portfolio text-center\">\n                                    <div class=\"col-md-4\">\n                                     \n                                        <div class=\"box-image\">\n                                        <div class=\"image\"><img src=\"assets/img/achievements/1.jpg\" alt=\"\" class=\"img-fluid\">\n                                          <div class=\"overlay d-flex align-items-center justify-content-center\">\n                                            <div class=\"content\">\n                                              <div class=\"name\">\n                                                <h3><a href=\"javascript:void()\" class=\"color-white\">8th MT HEALTHCARE AWARDS</a></h3>\n                                              </div>\n                                              <div class=\"text\">\n                                                <p class=\"d-none d-sm-block\">For Meaningful services and dedication to the the healthcare sector</p>\n                                                <p class=\"buttons\"><a href=\"javascript:void()\" class=\"btn btn-template-outlined-white\">2018</a></p>\n                                              </div>\n                                            </div>\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                      <div class=\"box-image\">\n                                        <div class=\"image\"><img src=\"assets/img/achievements/2.jpg\" alt=\"\" class=\"img-fluid\">\n                                          <div class=\"overlay d-flex align-items-center justify-content-center\">\n                                            <div class=\"content\">\n                                              <div class=\"name\">\n                                                <h3><a href=\"javascript:void()\" class=\"color-white\">MEDGATE TODAY MAGZINE</a></h3>\n                                              </div>\n                                              <div class=\"text\">\n                                                <p class=\"d-none d-sm-block\">For innovative solutions of infections control in modular OT</p>\n                                                <p class=\"buttons\"><a href=\"javascript:void()\" class=\"btn btn-template-outlined-white\">2018</a></p>\n                                              </div>\n                                            </div>\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                      <div class=\"box-image\">\n                                        <div class=\"image\"><img src=\"assets/img/achievements/3.jpg\" alt=\"\" class=\"img-fluid\">\n                                          <div class=\"overlay d-flex align-items-center justify-content-center\">\n                                            <div class=\"content\">\n                                              <div class=\"name\">\n                                                <h3><a href=\"javascript:void()\" class=\"color-white\">VOH 2ND INTERNATIONAL CONFERENCE</a></h3>\n                                              </div>\n                                              <div class=\"text\">\n                                                <p class=\"d-none d-sm-block\">For sharing valuable knowledge as a esteemated speaker</p>\n                                                <p class=\"buttons\"><a href=\"javascript:void()\" class=\"btn btn-template-outlined-white\">2018</a></p>\n                                              </div>\n                                            </div>\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </section>\n                            </div>              \n                        </div>\n                    </accordion-group>\n                    <accordion-group heading=\"FAQ\">\n                        <div class=\"card-body\">\n                            <ul class=\"list-unstyled\">\n                                <li><b>Q: Question 1 </b></li>\n                                <li><b>A:</b> Answer 1</li>\n                                <li><b>Q: Question 2 </b></li>\n                                <li><b>A:</b> Answer 2</li>\n                                <li><b>Q: Question 3 </b></li>\n                                <li><b>A:</b> Answer 3</li>\n                                <li><b>Q: Question 4 </b></li>\n                                <li><b>A:</b> Answer 4</li>\n                            </ul>\n                        </div>\n                    </accordion-group>\n                    <accordion-group heading=\"News\" [panelClass]=\"customClass\">\n                        <div class=\"card-body\">\n                            Comming soon...\n                        </div>\n                    </accordion-group>\n                    <accordion-group heading=\"Offers\">\n                        <div class=\"card-body\">\n                            Comming soon...\n                        </div>\n                    </accordion-group>\n                    <accordion-group heading=\"Capaign\">\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4\"><img src=\"assets/img/campaign/1.jpg\" alt=\"\" class=\"img-fluid\"></div>\n                                <div class=\"col-md-8\">\n                                    <p>It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad.</p>\n                                    <p>It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad.</p>\n                                </div>\n                            </div>\n                        </div>\n                    </accordion-group>\n                </accordion>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- collections end  -->\n\n<!-- Clients section -->\n<section class=\"bar bg-gray\">\n    <div class=\"container\">\n        <div class=\"heading text-center\">\n            <h2>Our Clients</h2>\n        </div>\n        <div class=\"customers\">\n        <carousel>\n            <slide>\n                <div  class=\"item\">\n                    <img src=\"assets/img/customer-1.png\" alt=\"\" class=\"img-fluid\">\n                    <img src=\"assets/img/customer-2.png\" alt=\"\" class=\"img-fluid\">\n                    <img src=\"assets/img/customer-3.png\" alt=\"\" class=\"img-fluid\">\n                    <img src=\"assets/img/customer-4.png\" alt=\"\" class=\"img-fluid\">\n                    <img src=\"assets/img/customer-5.png\" alt=\"\" class=\"img-fluid\">\n                </div>\n            </slide>\n            <slide class=\"item\">\n                <div  class=\"item\">\n                    <img src=\"assets/img/customer-6.png\" alt=\"\" class=\"img-fluid\">\n                    <img src=\"assets/img/customer-1.png\" alt=\"\" class=\"img-fluid\">\n                    <img src=\"assets/img/customer-2.png\" alt=\"\" class=\"img-fluid\">\n                    <img src=\"assets/img/customer-3.png\" alt=\"\" class=\"img-fluid\">\n                    <img src=\"assets/img/customer-4.png\" alt=\"\" class=\"img-fluid\">\n                </div>\n            </slide>\n        </carousel>\n        </div>\n    </div>\n</section>\n<!-- /.bar -->\n\n<!-- Testimonial section -->\n<section class=\"bar background-pentagon no-mb text-md-center\">\n    <div class=\"container\">\n        <div class=\"heading text-center\">\n        <h2>Testimonials</h2>\n        </div>\n        <p class=\"lead\">Our client's and vendor's feedback</p>\n        <!-- Carousel Start-->\n        <div class=\"testimonials\">\n        <carousel>\n            <slide>\n                <div class=\"testimonial d-flex flex-wrap\">\n                    <div class=\"text\">\n                        <p>------Sample Testimonial------</p>\n                        <p>We have installed a modular OT by Almed Equipments, We are thankfull to their expertise and utilization of best technology for our OT installment. They are coorpareted us to build a environment which help to avoid the surgical sight infection. We are specially thankful to Mr. Zakir Shaikh for his effort and innovative idea.</p>\n                    </div>\n                    <div class=\"bottom d-flex align-items-center justify-content-between align-self-end\">\n                        <div class=\"icon\"><i class=\"fa fa-quote-left\"></i></div>\n                        <div class=\"testimonial-info d-flex\">\n                        <div class=\"title\">\n                            <h5>Usman Shaikh</h5>\n                            <p>CEO, UTechSolutions</p>\n                        </div>\n                        <div class=\"avatar\"><img alt=\"\" src=\"assets/img/testimonials/ushaikh6.jpg\" class=\"img-fluid\"></div>\n                        </div>\n                    </div>\n                </div>\n            </slide>\n            <slide>\n                <div class=\"testimonial d-flex flex-wrap\">\n                <div class=\"text\">\n                        <p>------Sample Testimonial------</p>\n                        <p>We have installed a modular OT by Almed Equipments, We are thankfull to their expertise and utilization of best technology for our OT installment. They are coorpareted us to build a environment which help to avoid the surgical sight infection. We are specially thankful to Mr. Zakir Shaikh for his effort and innovative idea.</p>\n                </div>\n                <div class=\"bottom d-flex align-items-center justify-content-between align-self-end\">\n                    <div class=\"icon\"><i class=\"fa fa-quote-left\"></i></div>\n                    <div class=\"testimonial-info d-flex\">\n                    <div class=\"title\">\n                        <h5>Usman Shaikh</h5>\n                        <p>CEO, UTechSolutions</p>\n                    </div>\n                    <div class=\"avatar\"><img alt=\"\" src=\"assets/img/testimonials/ushaikh2.jpg\" class=\"img-fluid\"></div>\n                    </div>\n                </div>\n                </div>\n            </slide>\n            <slide>\n                <div class=\"testimonial d-flex flex-wrap\">\n                <div class=\"text\">\n                        <p>------Sample Testimonial------</p>\n                        <p>We have installed a modular OT by Almed Equipments, We are thankfull to their expertise and utilization of best technology for our OT installment. They are coorpareted us to build a environment which help to avoid the surgical sight infection. We are specially thankful to Mr. Zakir Shaikh for his effort and innovative idea.</p>\n                </div>\n                <div class=\"bottom d-flex align-items-center justify-content-between align-self-end\">\n                    <div class=\"icon\"><i class=\"fa fa-quote-left\"></i></div>\n                    <div class=\"testimonial-info d-flex\">\n                    <div class=\"title\">\n                        <h5>Usman Shaikh</h5>\n                        <p>CEO, UTechSolutions</p>\n                    </div>\n                    <div class=\"avatar\"><img alt=\"\" src=\"assets/img/testimonials/ushaikh3.jpg\" class=\"img-fluid\"></div>\n                    </div>\n                </div>\n                </div>\n            </slide>\n            <slide>\n                <div class=\"testimonial d-flex flex-wrap\">\n                <div class=\"text\">\n                        <p>------Sample Testimonial------</p>\n                        <p>We have installed a modular OT by Almed Equipments, We are thankfull to their expertise and utilization of best technology for our OT installment. They are coorpareted us to build a environment which help to avoid the surgical sight infection. We are specially thankful to Mr. Zakir Shaikh for his effort and innovative idea.</p>\n                </div>\n                <div class=\"bottom d-flex align-items-center justify-content-between align-self-end\">\n                    <div class=\"icon\"><i class=\"fa fa-quote-left\"></i></div>\n                    <div class=\"testimonial-info d-flex\">\n                    <div class=\"title\">\n                        <h5>Usman Shaikh</h5>\n                        <p>CEO, UTechSolutions</p>\n                    </div>\n                    <div class=\"avatar\"><img alt=\"\" src=\"assets/img/testimonials/ushaikh4.jpg\" class=\"img-fluid\"></div>\n                    </div>\n                </div>\n                </div>\n            </slide>\n            <slide>\n                <div class=\"testimonial d-flex flex-wrap\">\n                <div class=\"text\">\n                    <p>------Sample Testimonial------</p>\n                    <p>We have installed a modular OT by Almed Equipments, We are thankfull to their expertise and utilization of best technology for our OT installment. They are coorpareted us to build a environment which help to avoid the surgical sight infection. We are specially thankful to Mr. Zakir Shaikh for his effort and innovative idea.</p>\n                </div>\n                <div class=\"bottom d-flex align-items-center justify-content-between align-self-end\">\n                    <div class=\"icon\"><i class=\"fa fa-quote-left\"></i></div>\n                    <div class=\"testimonial-info d-flex\">\n                    <div class=\"title\">\n                        <h5>Usman Shaikh</h5>\n                        <p>CEO, UTechSolutions</p>\n                    </div>\n                    <div class=\"avatar\"><img alt=\"\" src=\"assets/img/testimonials/ushaikh5.jpg\" class=\"img-fluid\"></div>\n                    </div>\n                </div>\n                </div>\n            </slide>\n        </carousel>\n        </div>\n        <!-- Carousel End-->\n    </div>\n</section>\n<!-- /.bar -->\n\n<!-- Request for demo section -->\n<section style=\"background: url(assets/img/fixed-background-2.jpg) center top no-repeat; background-size: cover;\" class=\"bar no-mb color-white text-center bg-fixed relative-positioned\">\n    <div class=\"dark-mask\"></div>\n    <div class=\"container\">\n        <div class=\"icon icon-outlined icon-lg\"><i class=\"fa fa-file-code-o\"></i></div>\n        <h3 class=\"text-uppercase\">Do you want quotation?</h3>\n        <p class=\"lead\">You can ask for quote for installation and service for your hospital/organization.</p>\n        <p class=\"text-center\"><a href=\"#\" class=\"btn btn-template-outlined-white btn-lg\">Request for quote</a></p>\n    </div>\n</section>\n<!-- /.bar -->"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        //@ViewChild('owlElement') owlElement: OwlCarousel
        this.oneAtATime = true;
        this.customClass = 'customClass';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.images = [
        //   {img:'assets/img/testimonials/ushaikh1.jpg'},
        //   {img:'assets/img/testimonials/ushaikh1.jpg'}
        // ];
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        //$("#exampleModalCenter").modal("show");
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            //$('.owl-carousel').owlCarousel();
            // (<any>$('.owl-carousel')).owlCarousel();
        });
        //   navigation: true, // Show next and prev buttons
        //   slideSpeed: 300,
        //   paginationSpeed: 400,
        //   singleItem: true,
        //   transitionStyle: "fadeUp",
        //   autoPlay: true,
        //   navigationText: [
        //     "<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"
        //   ]
        // });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/events/events.component.css":
/*!*********************************************!*\
  !*** ./src/app/events/events.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/events/events.component.html":
/*!**********************************************!*\
  !*** ./src/app/events/events.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"heading-breadcrumbs\">\n    <div class=\"container\">\n      <div class=\"row d-flex align-items-center flex-wrap\">\n        <div class=\"col-md-7\">\n          <h1 class=\"h2\">Events</h1>\n        </div>\n        <div class=\"col-md-5\">\n          <ul class=\"breadcrumb d-flex justify-content-end\">\n            <li class=\"breadcrumb-item\">\n              <a routerLink=\"/\">Home</a>\n            </li>\n            <li class=\"breadcrumb-item active\">Events</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n    \n  <div id=\"content\">\n    <div class=\"container\">\n      <section>\n        <div class=\"row bar\">\n            <div class=\"col-md-12 text-center\">\n              <div class=\"alert alert-info\">Coming Soon...</div>\n            </div>\n          </div>\n      </section>\n    </div>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/events/events.component.ts":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsComponent = /** @class */ (function () {
    function EventsComponent() {
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/events/events.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/faq/faq.component.css":
/*!***************************************!*\
  !*** ./src/app/faq/faq.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/faq/faq.component.html":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"heading-breadcrumbs\">\n    <div class=\"container\">\n      <div class=\"row d-flex align-items-center flex-wrap\">\n        <div class=\"col-md-7\">\n          <h1 class=\"h2\">FAQ</h1>\n        </div>\n        <div class=\"col-md-5\">\n          <ul class=\"breadcrumb d-flex justify-content-end\">\n            <li class=\"breadcrumb-item\">\n              <a routerLink=\"/\">Home</a>\n            </li>\n            <li class=\"breadcrumb-item active\">FAQ</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n    \n  <div id=\"content\">\n    <div class=\"container\">\n      <section>\n        <div class=\"row bar\">\n            <div class=\"col-md-12 text-center\">\n              <div class=\"alert alert-info\">Coming Soon...</div>\n            </div>\n          </div>\n      </section>\n    </div>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/full-layout/full-layout.component.css":
/*!*******************************************************!*\
  !*** ./src/app/full-layout/full-layout.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/full-layout/full-layout.component.html":
/*!********************************************************!*\
  !*** ./src/app/full-layout/full-layout.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/full-layout/full-layout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/full-layout/full-layout.component.ts ***!
  \******************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent() {
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
    };
    FullLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-full-layout',
            template: __webpack_require__(/*! ./full-layout.component.html */ "./src/app/full-layout/full-layout.component.html"),
            styles: [__webpack_require__(/*! ./full-layout.component.css */ "./src/app/full-layout/full-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/news/news.component.css":
/*!*****************************************!*\
  !*** ./src/app/news/news.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"heading-breadcrumbs\">\n    <div class=\"container\">\n        <div class=\"row d-flex align-items-center flex-wrap\">\n        <div class=\"col-md-7\">\n            <h1 class=\"h2\">News</h1>\n        </div>\n        <div class=\"col-md-5\">\n            <ul class=\"breadcrumb d-flex justify-content-end\">\n            <li class=\"breadcrumb-item\">\n                <a routerLink=\"/\">Home</a>\n            </li>\n            <li class=\"breadcrumb-item active\">News</li>\n            </ul>\n        </div>\n        </div>\n    </div>\n    </div>\n    \n    <div id=\"content\">\n    <div class=\"container\">\n        <section>\n        <div class=\"row bar\">\n            <div class=\"col-md-12 text-center\">\n                <div class=\"alert alert-info\">Coming Soon...</div>\n            </div>\n            </div>\n        </section>\n    </div>\n    </div>\n    \n    "

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/offer/offer.component.css":
/*!*******************************************!*\
  !*** ./src/app/offer/offer.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/offer/offer.component.html":
/*!********************************************!*\
  !*** ./src/app/offer/offer.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"heading-breadcrumbs\">\n  <div class=\"container\">\n    <div class=\"row d-flex align-items-center flex-wrap\">\n      <div class=\"col-md-7\">\n        <h1 class=\"h2\">Offer</h1>\n      </div>\n      <div class=\"col-md-5\">\n        <ul class=\"breadcrumb d-flex justify-content-end\">\n          <li class=\"breadcrumb-item\">\n            <a routerLink=\"/\">Home</a>\n          </li>\n          <li class=\"breadcrumb-item active\">Offer</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n  \n<div id=\"content\">\n  <div class=\"container\">\n    <section>\n      <div class=\"row bar\">\n          <div class=\"col-md-12 text-center\">\n            <div class=\"alert alert-info\">Coming Soon...</div>\n          </div>\n        </div>\n    </section>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/offer/offer.component.ts":
/*!******************************************!*\
  !*** ./src/app/offer/offer.component.ts ***!
  \******************************************/
/*! exports provided: OfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferComponent", function() { return OfferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OfferComponent = /** @class */ (function () {
    function OfferComponent() {
    }
    OfferComponent.prototype.ngOnInit = function () {
    };
    OfferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offer',
            template: __webpack_require__(/*! ./offer.component.html */ "./src/app/offer/offer.component.html"),
            styles: [__webpack_require__(/*! ./offer.component.css */ "./src/app/offer/offer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OfferComponent);
    return OfferComponent;
}());



/***/ }),

/***/ "./src/app/services/data-services.ts":
/*!*******************************************!*\
  !*** ./src/app/services/data-services.ts ***!
  \*******************************************/
/*! exports provided: DataServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServices", function() { return DataServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _assets_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/data */ "./src/assets/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataServices = /** @class */ (function () {
    function DataServices(http) {
        this.http = http;
        this.dataArray = _assets_data__WEBPACK_IMPORTED_MODULE_2__["data"];
        this.products = this.dataArray.products;
        this.services = this.dataArray.services;
        this.serviceCategories = this.dataArray.service_categories;
        this.portfolio = this.dataArray.portfolio;
        this.portfolioCategories = this.dataArray.portfolio_categories;
    }
    DataServices.prototype.getJSONData = function () {
        return this.dataArray;
    };
    DataServices.prototype.getAllProduct = function () {
        return this.products;
    };
    DataServices.prototype.getAllService = function () {
        return this.services;
    };
    DataServices.prototype.getAllServiceCategories = function () {
        return this.serviceCategories;
    };
    DataServices.prototype.getServiceByCategory = function () {
        var _this = this;
        this.serviceCategories.forEach(function (value, key) {
            var tempArr = [];
            _this.services.forEach(function (ele) {
                if (value.id == ele.cat_id) {
                    tempArr.push(ele);
                }
            });
            value.list = tempArr;
        });
        return this.serviceCategories;
    };
    DataServices.prototype.getPortfolioByCategory = function () {
        var _this = this;
        this.portfolioCategories.forEach(function (value, key) {
            var tempArr = [];
            _this.portfolio.forEach(function (ele) {
                if (value.id == ele.cat_id) {
                    tempArr.push(ele);
                }
            });
            value.list = tempArr;
        });
        return this.portfolioCategories;
    };
    DataServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataServices);
    return DataServices;
}());



/***/ }),

/***/ "./src/app/support/support.component.css":
/*!***********************************************!*\
  !*** ./src/app/support/support.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/support/support.component.html":
/*!************************************************!*\
  !*** ./src/app/support/support.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"heading-breadcrumbs\">\n  <div class=\"container\">\n    <div class=\"row d-flex align-items-center flex-wrap\">\n      <div class=\"col-md-7\">\n        <h1 class=\"h2\">Support</h1>\n      </div>\n      <div class=\"col-md-5\">\n        <ul class=\"breadcrumb d-flex justify-content-end\">\n          <li class=\"breadcrumb-item\">\n            <a routerLink=\"/\">Home</a>\n          </li>\n          <li class=\"breadcrumb-item active\">Support</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n  \n<div id=\"content\">\n  <div class=\"container\">\n    <section>\n      <div class=\"row bar\">\n          <div class=\"col-md-12 text-center\">\n            <div class=\"alert alert-info\">Coming Soon...</div>\n          </div>\n        </div>\n    </section>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/support/support.component.ts":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SupportComponent = /** @class */ (function () {
    function SupportComponent() {
    }
    SupportComponent.prototype.ngOnInit = function () {
    };
    SupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.component.html */ "./src/app/support/support.component.html"),
            styles: [__webpack_require__(/*! ./support.component.css */ "./src/app/support/support.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "./src/app/video-list/video-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/video-list/video-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-list{\n    overflow-y: scroll;\n    height: 245px !important;\n}\n.video-list .image{\n    margin-right:5px;\n}\n.video-list h4 a{\n    font-size: 14px;\n}\n.title {\n    width: 100%;\n    max-width: 854px;\n    margin: 0 auto;\n}\n.caption {\n    width: 100%;\n    max-width: 854px;\n    margin: 0 auto;\n    padding: 20px 0;\n}\n.container {\n    width: 100%;\n    max-width: 854px;\n    min-width: 440px;\n    background: #fff;\n    margin: 0 auto;\n}\n/*  VIDEO PLAYER CONTAINER\n############################### */\n.vid-container {\n  position: relative;\n  padding-bottom: 52%;\n  padding-top: 30px; \n  height: 0; \n}\n.vid-container iframe,\n.vid-container object,\n.vid-container embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*  VIDEOS PLAYLIST \n############################### */\n.vid-list-container {\n  width: 92%;\n  overflow: hidden;\n  margin-top: 20px;\n  margin-left:4%;\n  padding-bottom: 20px;\n}\n.vid-list {\n  width: 1344px;\n  position: relative;\n  top:0;\n  left: 0;\n}\n.vid-item {\n  display: block;\n  width: 148px;\n  height: 148px;\n  float: left;\n  margin: 0;\n  padding: 10px;\n}\n.thumb {\n  /*position: relative;*/\n  overflow:hidden;\n  height: 84px;\n}\n.thumb img {\n  width: 100%;\n  position: relative;\n  top: -13px;\n}\n.vid-item .desc {\n  color: #21A1D2;\n  font-size: 15px;\n  margin-top:5px;\n}\n.vid-item:hover {\n  background: #eee;\n  cursor: pointer;\n}\n.arrows {\n  position:relative;\n  width: 100%;\n}\n.arrow-left {\n  color: #fff;\n  position: absolute;\n  background: #777;\n  padding: 15px;\n  left: -25px;\n  top: -130px;\n  z-index: 99;\n  cursor: pointer;\n}\n.arrow-right {\n  color: #fff;\n  position: absolute;\n  background: #777;\n  padding: 15px;\n  right: -25px;\n  top: -130px;\n  z-index:100;\n  cursor: pointer;\n}\n.arrow-left:hover {\n  background: #CC181E;\n}\n.arrow-right:hover {\n  background: #CC181E;\n}\n@media (max-width: 624px) {\n  body {\n      margin: 15px;\n  }\n  .caption {\n      margin-top: 40px;\n  }\n  .vid-list-container {\n      padding-bottom: 20px;\n  }\n\n  /* reposition left/right arrows */\n  .arrows {\n      position:relative;\n      margin: 0 auto;\n      width:96px;\n  }\n  .arrow-left {\n      left: 0;\n      top: -17px;\n  }\n\n  .arrow-right {\n      right: 0;\n      top: -17px;\n  }\n}\n@media(max-width:768px){\n  .vid-container iframe, .vid-container object, .vid-container embed{\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75);\n  }\n}"

/***/ }),

/***/ "./src/app/video-list/video-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/video-list/video-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <!-- THE YOUTUBE PLAYER -->\n  <div class=\"vid-container\">\n    <!-- <iframe id=\"vid_frame\" src=\"http://www.youtube.com/embed/eg6kNoJmzkY?rel=0&showinfo=0&autohide=1\" frameborder=\"0\" width=\"560\" height=\"315\"></iframe> -->\n    <iframe id=\"vid_frame\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/MqTXWAxCocI?rel=0&showinfo=0&autohide=1\"\n      frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n  </div>\n\n  <!-- THE PLAYLIST -->\n  <div class=\"vid-list-container\">\n    <div class=\"vid-list\">\n\n      <div class=\"vid-item\" onClick=\"document.getElementById('vid_frame').src='https://www.youtube.com/embed/MqTXWAxCoc?rel=0&showinfo=0&autohide=1'\">\n        <div class=\"thumb\">\n          <img src=\"https://img.youtube.com/vi/MqTXWAxCocI/0.jpg\">\n        </div>\n        <div class=\"desc\">Interview of Mr.Zakir Hussain</div>\n      </div>\n\n      <div class=\"vid-item\" onClick=\"document.getElementById('vid_frame').src='https://www.youtube.com/embed/7yTbFvXKD78?autoplay=1&rel=0&showinfo=0&autohide=1'\">\n        <div class=\"thumb\">\n          <img src=\"https://img.youtube.com/vi/7yTbFvXKD78/0.jpg\">\n        </div>\n        <div class=\"desc\">Almed Equipments presentation final</div>\n      </div>\n      <div class=\"vid-item\" onClick=\"document.getElementById('vid_frame').src='https://www.youtube.com/embed/ssveTKFyrMo?autoplay=1&rel=0&showinfo=0&autohide=1'\">\n        <div class=\"thumb\">\n          <img src=\"https://img.youtube.com/vi/ssveTKFyrMo/0.jpg\">\n        </div>\n        <div class=\"desc\">Almed Equipments introductions</div>\n      </div>\n\n      <div class=\"vid-item\" onClick=\"document.getElementById('vid_frame').src='https://www.youtube.com/embed/m_oP7nbgwxk?autoplay=1&rel=0&showinfo=0&autohide=1'\">\n        <div class=\"thumb\">\n          <img src=\"https://img.youtube.com/vi/m_oP7nbgwxk/0.jpg\">\n        </div>\n        <div class=\"desc\">Almed Equipment: class I air Quality on operation theatre with Ductless Laminar air flow, part-1</div>\n      </div>\n\n      <div class=\"vid-item\" onClick=\"document.getElementById('vid_frame').src='https://www.youtube.com/embed/hUmPheZFQE0?autoplay=1&rel=0&showinfo=0&autohide=1'\">\n        <div class=\"thumb\">\n          <img src=\"https://img.youtube.com/vi/hUmPheZFQE0/0.jpg\">\n        </div>\n        <div class=\"desc\">Almed Equipment: class I air Quality on operation theatre with Ductless Laminar air flow, part-2</div>\n      </div>\n\n      <div class=\"vid-item\" onClick=\"document.getElementById('vid_frame').src='https://www.youtube.com/embed/cX7y_R0C3mM?autoplay=1&rel=0&showinfo=0&autohide=1'\">\n        <div class=\"thumb\">\n          <img src=\"https://img.youtube.com/vi/cX7y_R0C3mM/0.jpg\">\n        </div>\n        <div class=\"desc\">Innovative & practical solutions for infection control</div>\n      </div>\n\n      <div class=\"vid-item\" onClick=\"document.getElementById('vid_frame').src='https://www.youtube.com/embed/CmmQjcVbD2U?autoplay=1&rel=0&showinfo=0&autohide=1'\">\n        <div class=\"thumb\">\n          <img src=\"https://img.youtube.com/vi/CmmQjcVbD2U/0.jpg\">\n        </div>\n        <div class=\"desc\">Air flow pattern with ductless Air Handling unit in wall to Laminar air flow in ceiling by AL-MED EQ</div>\n      </div>\n\n      <div class=\"vid-item\" onClick=\"document.getElementById('vid_frame').src='https://www.youtube.com/embed/mho3jGkPEN0?autoplay=1&rel=0&showinfo=0&autohide=1'\">\n        <div class=\"thumb\">\n          <img src=\"https://img.youtube.com/vi/mho3jGkPEN0/0.jpg\">\n        </div>\n        <div class=\"desc\">NABH - Surgical Site Infection SSI Prevention</div>\n      </div>\n\n      <div class=\"vid-item\" onClick=\"document.getElementById('vid_frame').src='https://www.youtube.com/embed/6R_odksmsZo?autoplay=1&rel=0&showinfo=0&autohide=1'\">\n        <div class=\"thumb\">\n          <img src=\"https://img.youtube.com/vi/6R_odksmsZo/0.jpg\">\n        </div>\n        <div class=\"desc\">Causes & prevention of surgical site infections</div>\n      </div>\n\n    </div>\n  </div>\n\n  <!-- LEFT AND RIGHT ARROWS -->\n  <div class=\"arrows\">\n    <div class=\"arrow-left\">\n      <i class=\"fa fa-chevron-left fa-lg\"></i>\n    </div>\n    <div class=\"arrow-right\">\n      <i class=\"fa fa-chevron-right fa-lg\"></i>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/video-list/video-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/video-list/video-list.component.ts ***!
  \****************************************************/
/*! exports provided: VideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListComponent", function() { return VideoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoListComponent = /** @class */ (function () {
    function VideoListComponent() {
    }
    VideoListComponent.prototype.ngOnInit = function () {
    };
    VideoListComponent.prototype.ngAfterViewInit = function () {
        $(".arrow-right").bind("click", function (event) {
            event.preventDefault();
            $(".vid-list-container").stop().animate({
                scrollLeft: "+=336"
            }, 750);
        });
        $(".arrow-left").bind("click", function (event) {
            event.preventDefault();
            $(".vid-list-container").stop().animate({
                scrollLeft: "-=336"
            }, 750);
        });
    };
    VideoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-list',
            template: __webpack_require__(/*! ./video-list.component.html */ "./src/app/video-list/video-list.component.html"),
            styles: [__webpack_require__(/*! ./video-list.component.css */ "./src/app/video-list/video-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VideoListComponent);
    return VideoListComponent;
}());



/***/ }),

/***/ "./src/assets/data.ts":
/*!****************************!*\
  !*** ./src/assets/data.ts ***!
  \****************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
var data = {
    "products": [
        {
            "name": "Laminar Air Flow",
            "code": "laf",
            "img": "assets/img/default.jpg",
            "price": "",
            "category": "latest",
            "status": 1,
            "new": 1,
            "offer": 1,
            "details": "",
            "tech_spec": [
                "1.",
                "2.",
                "3."
            ],
            "usage": [
                "1.",
                "2.",
                "3."
            ],
            "main_content": ""
        },
        {
            "name": "Positive Pressure System",
            "code": "pps",
            "img": "assets/img/default.jpg",
            "price": "",
            "category": "latest",
            "status": 1,
            "new": 1,
            "offer": 0,
            "details": "",
            "tech_spec": "",
            "usage": "",
            "main_content": ""
        },
        {
            "name": "Surgical Control Panel",
            "code": "scp",
            "img": "assets/img/default.jpg",
            "price": "",
            "category": "latest",
            "status": 1,
            "new": 1,
            "offer": 0,
            "details": "",
            "tech_spec": "",
            "usage": "",
            "main_content": ""
        },
        {
            "name": "O3 Gen",
            "code": "o3gen",
            "img": "assets/img/default.jpg",
            "price": "",
            "category": "latest",
            "status": 1,
            "new": 1,
            "offer": 0,
            "details": "",
            "tech_spec": "",
            "usage": "",
            "main_content": ""
        },
        {
            "name": "ECG Machine",
            "code": "ecg",
            "img": "assets/img/default.jpg",
            "price": "",
            "category": "latest",
            "status": 1,
            "new": 1,
            "offer": 0,
            "details": "",
            "tech_spec": "",
            "usage": "",
            "main_content": ""
        },
        {
            "name": "OT Steel Door",
            "code": "otsl",
            "img": "assets/img/default.jpg",
            "price": "",
            "category": "featured",
            "status": 1,
            "new": 1,
            "offer": 1,
            "details": "",
            "tech_spec": "",
            "usage": "",
            "main_content": ""
        },
        {
            "name": "OT PPGI Door",
            "code": "otpl",
            "img": "assets/img/default.jpg",
            "price": "",
            "category": "featured",
            "status": 1,
            "new": 1,
            "offer": 1,
            "details": "",
            "tech_spec": "",
            "usage": "",
            "main_content": ""
        },
        {
            "name": "Pass Box",
            "code": "pb",
            "img": "assets/img/default.jpg",
            "price": "",
            "category": "featured",
            "status": 1,
            "new": 1,
            "offer": 1,
            "details": "",
            "tech_spec": "",
            "usage": "",
            "main_content": ""
        },
        {
            "name": "Shoes Wrapper Machine",
            "code": "otsl",
            "img": "assets/img/default.jpg",
            "price": "",
            "category": "featured",
            "status": 1,
            "new": 1,
            "offer": 1,
            "details": "",
            "tech_spec": "",
            "usage": "",
            "main_content": ""
        },
        {
            "name": "Surgical Equipments",
            "code": "se",
            "img": "assets/img/default.jpg",
            "price": "",
            "category": "featured",
            "status": 1,
            "new": 1,
            "offer": 1,
            "details": "",
            "tech_spec": "",
            "usage": "",
            "main_content": ""
        }
    ],
    "service_categories": [
        {
            "id": 1,
            "name": "Modular OT",
            "description": ""
        },
        {
            "id": 2,
            "name": "Epoxy",
            "description": ""
        },
        {
            "id": 3,
            "name": "Repairing & Maintenance",
            "description": ""
        }
    ],
    "services": [
        {
            "name": "PPGI Modular OT",
            "code": "pmot",
            "img": "assets/img/default.jpg",
            "price": "",
            "cat_id": 1,
            "status": 1,
            "new": 1,
            "offer": 1,
            "details": "",
            "tech_spec": [
                "1.",
                "2.",
                "3."
            ],
            "usage": [
                "1.",
                "2.",
                "3."
            ],
            "main_content": ""
        },
        {
            "name": "Steel Modular OT",
            "code": "smot",
            "img": "assets/img/default.jpg",
            "price": "",
            "cat_id": 1,
            "status": 1,
            "new": 1,
            "offer": 1,
            "details": "",
            "tech_spec": [
                "1.",
                "2.",
                "3."
            ],
            "usage": [
                "1.",
                "2.",
                "3."
            ],
            "main_content": ""
        },
        {
            "name": "General Modular OT",
            "code": "gmot",
            "img": "assets/img/default.jpg",
            "price": "",
            "cat_id": 1,
            "status": 1,
            "new": 1,
            "offer": 1,
            "details": "",
            "tech_spec": [
                "1.",
                "2.",
                "3."
            ],
            "usage": [
                "1.",
                "2.",
                "3."
            ],
            "main_content": ""
        },
        {
            "name": "HPL Modular OT",
            "code": "hmot",
            "img": "assets/img/default.jpg",
            "price": "",
            "cat_id": 1,
            "status": 1,
            "new": 1,
            "offer": 1,
            "details": "",
            "tech_spec": [
                "1.",
                "2.",
                "3."
            ],
            "usage": [
                "1.",
                "2.",
                "3."
            ],
            "main_content": ""
        },
        {
            "name": "Epoxy Flooring",
            "code": "ef",
            "img": "assets/img/default.jpg",
            "price": "",
            "cat_id": 2,
            "status": 1,
            "new": 1,
            "offer": 1,
            "details": "",
            "tech_spec": [
                "1.",
                "2.",
                "3."
            ],
            "usage": [
                "1.",
                "2.",
                "3."
            ],
            "main_content": ""
        },
        {
            "name": "Epoxy Coving",
            "code": "ec",
            "img": "assets/img/default.jpg",
            "price": "",
            "cat_id": 2,
            "status": 1,
            "new": 1,
            "offer": 1,
            "details": "",
            "tech_spec": [
                "1.",
                "2.",
                "3."
            ],
            "usage": [
                "1.",
                "2.",
                "3."
            ],
            "main_content": ""
        },
        {
            "name": "All Equipments",
            "code": "ae",
            "img": "assets/img/default.jpg",
            "price": "",
            "cat_id": 3,
            "status": 1,
            "new": 1,
            "offer": 1,
            "details": "",
            "tech_spec": [
                "1.",
                "2.",
                "3."
            ],
            "usage": [
                "1.",
                "2.",
                "3."
            ],
            "main_content": ""
        }
    ],
    "portfolio_categories": [
        {
            "id": 1,
            "name": "Modular OT Installment",
            "code": "moi",
        },
        {
            "id": 2,
            "name": "Epoxy",
            "code": "epo",
        },
        {
            "id": 3,
            "name": "Others",
            "code": "otr",
        }
    ],
    "portfolio": [
        {
            "id": 1,
            "name": "PPGI Modular OT",
            "cat_id": 1,
            "code": "pmot",
            "projects": [
                {
                    "id": 1,
                    "project_name": "Test Project 1",
                    "client_name": "Test",
                    "location": "",
                    "description": "",
                    "start_date": "",
                    "end_date": "",
                    "review": "",
                    "img": "assets/img/default.jpg",
                    "more_img": ["assets/img/default.jpg", "assets/img/default.jpg", "assets/img/default.jpg"],
                    "services": ["service1", "service2", "service3"],
                    "technologies": [],
                },
                {
                    "id": 2,
                    "project_name": "Test Project 2",
                    "client_name": "Test",
                    "location": "",
                    "description": "",
                    "start_date": "",
                    "end_date": "",
                    "review": "",
                    "img": "assets/img/default.jpg",
                    "more_img": ["assets/img/default.jpg", "assets/img/default.jpg", "assets/img/default.jpg"],
                    "services": [],
                    "technologies": [],
                },
                {
                    "id": 3,
                    "project_name": "",
                    "client_name": "Test",
                    "location": "",
                    "description": "",
                    "start_date": "",
                    "end_date": "",
                    "review": "",
                    "img": "assets/img/default.jpg",
                    "more_img": ["assets/img/default.jpg", "assets/img/default.jpg", "assets/img/default.jpg"],
                    "services": [],
                    "technologies": [],
                }
            ]
        },
        {
            "id": 2,
            "name": "Steel Modular OT",
            "cat_id": 1,
            "code": "sto",
            "projects": [
                {
                    "id": 1,
                    "project_name": "",
                    "client_name": "Test",
                    "location": "",
                    "description": "",
                    "start_date": "",
                    "end_date": "",
                    "review": "",
                    "img": "assets/img/default.jpg",
                    "more_img": ["assets/img/default.jpg", "assets/img/default.jpg", "assets/img/default.jpg"],
                    "services": [],
                    "technologies": [],
                }
            ]
        },
        {
            "id": 3,
            "name": "General Modular OT",
            "cat_id": 1,
            "code": "gmo",
            "projects": [
                {
                    "id": 1,
                    "project_name": "",
                    "client_name": "Test",
                    "location": "",
                    "description": "",
                    "start_date": "",
                    "end_date": "",
                    "review": "",
                    "img": "assets/img/default.jpg",
                    "more_img": ["assets/img/default.jpg", "assets/img/default.jpg", "assets/img/default.jpg"],
                    "services": [],
                    "technologies": [],
                }
            ]
        },
        {
            "id": 4,
            "name": "HPL Modular OT",
            "cat_id": 1,
            "code": "hmo",
            "projects": [
                {
                    "id": 1,
                    "project_name": "",
                    "client_name": "Test",
                    "location": "",
                    "description": "",
                    "start_date": "",
                    "end_date": "",
                    "review": "",
                    "img": "assets/img/default.jpg",
                    "more_img": ["assets/img/default.jpg", "assets/img/default.jpg", "assets/img/default.jpg"],
                    "services": [],
                    "technologies": [],
                }
            ]
        },
        {
            "id": 5,
            "name": "O2 Generation Plant",
            "cat_id": 2,
            "code": "ogp",
            "projects": [
                {
                    "id": 1,
                    "project_name": "",
                    "client_name": "Test",
                    "location": "",
                    "description": "",
                    "start_date": "",
                    "end_date": "",
                    "review": "",
                    "img": "assets/img/default.jpg",
                    "more_img": ["assets/img/default.jpg", "assets/img/default.jpg", "assets/img/default.jpg"],
                    "services": [],
                    "technologies": [],
                }
            ]
        },
        {
            "id": 6,
            "name": "Epoxy",
            "cat_id": 2,
            "code": "epo",
            "projects": [
                {
                    "id": 1,
                    "project_name": "",
                    "client_name": "Test",
                    "location": "",
                    "description": "",
                    "start_date": "",
                    "end_date": "",
                    "review": "",
                    "img": "assets/img/default.jpg",
                    "more_img": ["assets/img/default.jpg", "assets/img/default.jpg", "assets/img/default.jpg"],
                    "services": [],
                    "technologies": [],
                }
            ]
        },
        {
            "id": 7,
            "name": "Others",
            "cat_id": 3,
            "code": "otr",
            "projects": [
                {
                    "id": 1,
                    "project_name": "",
                    "client_name": "Test",
                    "location": "",
                    "description": "",
                    "start_date": "",
                    "end_date": "",
                    "review": "",
                    "img": "assets/img/default.jpg",
                    "more_img": ["assets/img/default.jpg", "assets/img/default.jpg", "assets/img/default.jpg"],
                    "services": [],
                    "technologies": [],
                }
            ]
        }
    ]
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ushaikh/ushaikh/projects/almedequip/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map