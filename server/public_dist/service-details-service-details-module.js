(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-details-service-details-module"],{

/***/ "./src/app/service-details/service-details-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/service-details/service-details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ServiceDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDetailsRoutingModule", function() { return ServiceDetailsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-details.component */ "./src/app/service-details/service-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _service_details_component__WEBPACK_IMPORTED_MODULE_2__["ServiceDetailsComponent"] },
];
var ServiceDetailsRoutingModule = /** @class */ (function () {
    function ServiceDetailsRoutingModule() {
    }
    ServiceDetailsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ServiceDetailsRoutingModule);
    return ServiceDetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/service-details/service-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/service-details/service-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item.carousel-item{\n    text-align: center;\n}\nul.social a {\n    width: 45px;\n    height: 45px;\n    line-height: 42px;\n    color: #fff;\n    text-align: center;\n    border-radius: 50%;\n    margin: 5px 2px;\n    font-size: 22px;\n}\n"

/***/ }),

/***/ "./src/app/service-details/service-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/service-details/service-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"heading-breadcrumbs\" *ngIf=\"service\">\n  <div class=\"container\">\n    <div class=\"row d-flex align-items-center flex-wrap\">\n      <div class=\"col-md-7\">\n        <h1 class=\"h2\">Services</h1>\n      </div>\n      <div class=\"col-md-5\">\n        <ul class=\"breadcrumb d-flex justify-content-end\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n          <li class=\"breadcrumb-item\"><a routerLink=\"/services\">Services</a></li>\n          <li class=\"breadcrumb-item active\" *ngIf=\"service\">{{ service.name }}</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"content\" class=\"team-member-detail\" *ngIf=\"service\">\n  <div class=\"container\">\n    <section class=\"bar\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"heading\">\n            <h2>{{ service.name | uppercase }}</h2>\n          </div>\n          <p class=\"lead\">{{ service.main_content }}</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <p>{{ service.details }}</p>\n        </div>\n        <div class=\"col-md-4\"><img alt=\"\" src=\"{{ service.img }}\" class=\"img-fluid rounded-circle\"></div>\n      </div>\n    </section>\n    <section class=\"bar pt-0\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"heading\">\n            <h3>Technical Specification</h3>\n          </div>\n          <ul class=\"ul-icons list-unstyled\" *ngIf=\"service.tech_spec\">\n            <li *ngFor=\"let spec of service.tech_spec\">\n              <div class=\"icon-filled\"><i class=\"fa fa-check\"></i></div><a href=\"#\">{{ spec }}</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"heading\">\n            <h3>Usage</h3>\n          </div>\n          <ul class=\"ul-icons list-unstyled\" *ngIf=\"service.usage\">\n            <li *ngFor=\"let use of service.usage\">\n              <div class=\"icon-filled\"><i class=\"fa fa-check\"></i></div><a href=\"#\">{{ use }}</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"heading\">\n            <h3>Share it</h3>\n          </div>\n          <ul class=\"social list-inline\">\n            <li class=\"list-inline-item\"><a href=\"#\" class=\"external facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n            <li class=\"list-inline-item\"><a href=\"#\" class=\"external gplus\"><i class=\"fa fa-google-plus\"></i></a></li>\n            <li class=\"list-inline-item\"><a href=\"#\" class=\"external twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n            <li class=\"list-inline-item\"><a href=\"#\" class=\"email\"><i class=\"fa fa-envelope\"></i></a></li>\n          </ul>\n        </div>\n      </div>\n    </section>\n  </div>\n  <section class=\"bar bg-gray\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"heading text-center\">\n            <h2>Relevant services</h2>\n          </div>\n          <ul class=\"list-unstyled customers no-mb\" *ngIf=\"relevantService\">\n            <carousel>\n              <slide *ngFor=\"let rs of relevantService\">\n                <div class=\"slide-content\">\n                  <img src=\"{{ rs.img }}\" alt=\"\" class=\"img-fluid\">\n                  <h5>{{ rs.name }}</h5>\n                </div>\n                \n              </slide>\n            </carousel>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/service-details/service-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/service-details/service-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ServiceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDetailsComponent", function() { return ServiceDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-services */ "./src/app/services/data-services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServiceDetailsComponent = /** @class */ (function () {
    function ServiceDetailsComponent(dataServices, activatedRoute) {
        var _this = this;
        this.dataServices = dataServices;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.code = params['code'];
            _this.services = _this.dataServices.services;
            _this.service = _this.services.find(function (item) { return item.code == _this.code; });
            _this.relevantService = _this.services.filter(function (item) { return item.cat_id == _this.service.cat_id; });
        });
    }
    ServiceDetailsComponent.prototype.ngOnInit = function () {
    };
    ServiceDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service-details',
            template: __webpack_require__(/*! ./service-details.component.html */ "./src/app/service-details/service-details.component.html"),
            styles: [__webpack_require__(/*! ./service-details.component.css */ "./src/app/service-details/service-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_services__WEBPACK_IMPORTED_MODULE_2__["DataServices"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ServiceDetailsComponent);
    return ServiceDetailsComponent;
}());



/***/ }),

/***/ "./src/app/service-details/service-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/service-details/service-details.module.ts ***!
  \***********************************************************/
/*! exports provided: ServiceDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDetailsModule", function() { return ServiceDetailsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _service_details_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service-details-routing.module */ "./src/app/service-details/service-details-routing.module.ts");
/* harmony import */ var _service_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-details.component */ "./src/app/service-details/service-details.component.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ServiceDetailsModule = /** @class */ (function () {
    function ServiceDetailsModule() {
    }
    ServiceDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _service_details_routing_module__WEBPACK_IMPORTED_MODULE_4__["ServiceDetailsRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"]
            ],
            declarations: [
                _service_details_component__WEBPACK_IMPORTED_MODULE_5__["ServiceDetailsComponent"]
            ],
            providers: [],
            exports: []
        })
    ], ServiceDetailsModule);
    return ServiceDetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=service-details-service-details-module.js.map