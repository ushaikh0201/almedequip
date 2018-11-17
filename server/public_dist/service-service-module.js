(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-service-module"],{

/***/ "./src/app/service/service-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/service/service-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ServiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceRoutingModule", function() { return ServiceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service.component */ "./src/app/service/service.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _service_component__WEBPACK_IMPORTED_MODULE_2__["ServiceComponent"] },
];
var ServiceRoutingModule = /** @class */ (function () {
    function ServiceRoutingModule() {
    }
    ServiceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ServiceRoutingModule);
    return ServiceRoutingModule;
}());



/***/ }),

/***/ "./src/app/service/service.component.css":
/*!***********************************************!*\
  !*** ./src/app/service/service.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".service-list li{\n    list-style: none;\n    text-align: left;\n    text-indent: 5px;\n}"

/***/ }),

/***/ "./src/app/service/service.component.html":
/*!************************************************!*\
  !*** ./src/app/service/service.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      \n      <div id=\"heading-breadcrumbs\">\n        <div class=\"container\">\n          <div class=\"row d-flex align-items-center flex-wrap\">\n            <div class=\"col-md-7\">\n              <h1 class=\"h2\">Services</h1>\n            </div>\n            <div class=\"col-md-5\">\n              <ul class=\"breadcrumb d-flex justify-content-end\">\n                <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n                <li class=\"breadcrumb-item active\">Services</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"content\">\n        <div class=\"container\">\n          <section class=\"bar\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"heading\">\n                  <h2>Our main services</h2>\n                </div>\n                <p class=\"lead\">Our services are given with dedication and within time period, we have number of statisfied customer. Our main service cover are under the following category.</p>\n              </div>\n            </div>\n            <div class=\"row services text-center\" *ngIf=\"serviceCategories\">\n              <div class=\"col-md-4\" *ngFor=\"let sc of serviceCategories\">\n                <div class=\"box-simple\">\n                  <div class=\"icon-outlined\"><i class=\"fa fa-desktop\"></i></div>\n                  <h3 class=\"h4\">{{ sc.name }}</h3>\n                  <p>{{ sc.description }}</p>\n                  <ul class=\"service-list\" *ngIf=\"sc.list\">\n                    <li *ngFor=\"let service of sc.list\"><a routerLink=\"/service-details\" [queryParams]=\"{ code: service.code }\"> <i class=\"fa fa-check\"></i> {{ service.name }}</a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </section>\n          <section class=\"bar pt-0\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"heading\">\n                  <h2>Why choose us</h2>\n                </div>\n                <p class=\"lead\">Why choose our service and more ...</p>\n              </div>\n              <div class=\"col-md-6\">\n                <p class=\"text-sm\">More details come here...</p>\n                <ul class=\"text-xs\">\n                  <li>Point 1</li>\n                  <li>Point 2</li>\n                  <li>Point 3</li>\n                </ul>\n              </div>\n              <div class=\"col-md-6\">\n                <p class=\"text-sm\">Second para...</p>\n              </div>\n            </div>\n          </section>\n        </div>\n      </div>\n"

/***/ }),

/***/ "./src/app/service/service.component.ts":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
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


var ServiceComponent = /** @class */ (function () {
    function ServiceComponent(dataServices) {
        this.dataServices = dataServices;
    }
    ServiceComponent.prototype.ngOnInit = function () {
        this.serviceCategories = this.dataServices.serviceCategories;
    };
    ServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.css */ "./src/app/service/service.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_services__WEBPACK_IMPORTED_MODULE_1__["DataServices"]])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/service/service.module.ts":
/*!*******************************************!*\
  !*** ./src/app/service/service.module.ts ***!
  \*******************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service.component */ "./src/app/service/service.component.ts");
/* harmony import */ var _service_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-routing.module */ "./src/app/service/service-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServiceModule = /** @class */ (function () {
    function ServiceModule() {
    }
    ServiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _service_routing_module__WEBPACK_IMPORTED_MODULE_3__["ServiceRoutingModule"]
            ],
            declarations: [
                _service_component__WEBPACK_IMPORTED_MODULE_2__["ServiceComponent"],
            ],
            providers: [],
            exports: []
        })
    ], ServiceModule);
    return ServiceModule;
}());



/***/ })

}]);
//# sourceMappingURL=service-service-module.js.map