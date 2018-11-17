(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-details-product-details-module"],{

/***/ "./src/app/product-details/product-details-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/product-details/product-details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProductDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsRoutingModule", function() { return ProductDetailsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details.component */ "./src/app/product-details/product-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _product_details_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailsComponent"] }
];
var ProductDetailsRoutingModule = /** @class */ (function () {
    function ProductDetailsRoutingModule() {
    }
    ProductDetailsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProductDetailsRoutingModule);
    return ProductDetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/product-details/product-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product-details/product-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-pills .show>.nav-link{\n    color: #4fbfa8;\n    border-left: 5px solid #4fbfa8;\n    border-top: 1px dotted #4fbfa8;\n    border-right: 1px dotted #4fbfa8;\n    border-bottom: 2px solid #0a2d26;\n    background: #e8f3ff !important;\n    font-weight: bold !important;\n}"

/***/ }),

/***/ "./src/app/product-details/product-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/product-details/product-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"heading-breadcrumbs\">\n  <div class=\"container\">\n    <div class=\"row d-flex align-items-center flex-wrap\">\n      <div class=\"col-md-7\">\n        <h1 class=\"h2\">Products</h1>\n      </div>\n      <div class=\"col-md-5\">\n        <ul class=\"breadcrumb d-flex justify-content-end\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n          <li class=\"breadcrumb-item\"><a routerLink=\"/products\">Products</a></li>\n          <li class=\"breadcrumb-item active\" *ngIf=\"product\">{{ product.name }}</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"content\" *ngIf=\"product\">\n  <div class=\"container\">\n    <div class=\"row bar\">\n      <!-- LEFT COLUMN _________________________________________________________-->\n      <div class=\"col-lg-3\">\n        <!-- MENUS AND FILTERS-->\n        <div class=\"panel panel-default sidebar-menu\">\n          <div class=\"panel-heading\">\n            <h3 class=\"h4 panel-title\">Categories</h3>\n            <button type=\"button\"data-toggle=\"collapse\" data-target=\"#product-category\" aria-expanded=\"true\" aria-controls=\"multiCollapseExample2\" class=\"navbar-toggler btn-template-outlined pull-right\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <i class=\"fa fa-th\"></i>\n              <i class=\"fa fa-remove\"></i>\n            </button>\n          </div>\n          <div class=\"panel-body\">\n            <ul class=\"nav nav-pills flex-column text-sm category-menu  collapse show\" id=\"product-category\">\n              <li class=\"nav-item\"><a routerLink=\"/products\" [queryParams]=\"{ category: 'latest' }\" [ngClass]=\"{ 'nav-link d-flex align-items-center justify-content-between': true, 'active': category == 'latest' }\"><span>Latest </span><span class=\"badge badge-secondary\">6</span></a>\n                <ul class=\"nav nav-pills flex-column\" *ngIf=\"products\">\n                  <li [ngClass]=\"{ 'nav-item':true, 'show': code == product.code }\" *ngFor=\"let product of products\"><a  *ngIf=\"product.category == 'latest'\" routerLink=\"/product-details\" [queryParams]=\"{ code:product.code }\" class=\"nav-link\">{{ product.name }}</a></li>\n                </ul>\n              </li>\n              <li class=\"nav-item\"><a routerLink=\"/products\" [queryParams]=\"{ category: 'featured' }\" [ngClass]=\"{ 'nav-link d-flex align-items-center justify-content-between': true, 'active': category == 'featured' }\"><span>Featured </span><span class=\"badge badge-light\">3</span></a>\n                <ul class=\"nav nav-pills flex-column\" *ngIf=\"products\">\n                  <li [ngClass]=\"{ 'nav-item':true, 'show': code == product.code }\" *ngFor=\"let product of products\"><a  *ngIf=\"product.category == 'featured'\"   routerLink=\"/product-details\" [queryParams]=\"{ code:product.code }\" class=\"nav-link\">{{ product.name }}</a></li>\n                </ul>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-9\">\n        <p class=\"goToDescription\"><a href=\"#details\" class=\"scroll-to text-uppercase\">Scroll to product details, technical specification and sizing</a></p>\n        <div id=\"productMain\" class=\"row\">\n          <div class=\"col-sm-6\">\n            <carousel [interval]=\"5000\">\n              <slide>\n                <div> <img src=\"{{ product.img }}\" alt=\"\" class=\"img-fluid\"></div>\n              </slide>\n              <slide>\n                <div> <img src=\"{{ product.img }}\" alt=\"\" class=\"img-fluid\"></div>\n              </slide>\n              <slide>\n                <div> <img src=\"{{ product.img }}\" alt=\"\" class=\"img-fluid\"></div>\n              </slide>\n            </carousel>\n          </div>\n          <!-- <div class=\"col-sm-6\">\n            <div class=\"box\">\n              <form>\n                <div class=\"sizes\">\n                  <h3>Available sizes</h3>\n                  <select class=\"bs-select\">\n                    <option value=\"small\">Small</option>\n                    <option value=\"medium\">Medium</option>\n                    <option value=\"large\">Large</option>\n                    <option value=\"x-large\">X Large</option>\n                  </select>\n                </div>\n                <p class=\"price\">$124.00</p>\n                <p class=\"text-center\">\n                  <button type=\"submit\" class=\"btn btn-template-outlined\"><i class=\"fa fa-shopping-cart\"></i> Add to cart</button>\n                  <button type=\"submit\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add to wishlist\" class=\"btn btn-default\"><i class=\"fa fa-heart-o\"></i></button>\n                </p>\n              </form>\n            </div>\n            <div data-slider-id=\"1\" class=\"owl-thumbs\">\n              <button class=\"owl-thumb-item\"><img src=\"{{ product.img }}\" alt=\"\" class=\"img-fluid\"></button>\n              <button class=\"owl-thumb-item\"><img src=\"{{ product.img }}\" alt=\"\" class=\"img-fluid\"></button>\n              <button class=\"owl-thumb-item\"><img src=\"{{ product.img }}\" alt=\"\" class=\"img-fluid\"></button>\n            </div>\n          </div> -->\n        </div>\n        <div id=\"details\" class=\"box mb-4 mt-4\">\n          <p></p>\n          <h4>Product details</h4>\n          <p>{{ product.details }}</p>\n          <h4>Teachnical Specification</h4>\n          <ul *ngIf=\"product.tech_spec\">\n            <li *ngFor=\"let spec of product.tech_spec\">{{ spec }}</li>\n          </ul>\n          <h4>Usage</h4>\n          <ul *ngIf=\"product.usage\">\n            <li *ngFor=\"let u of product.usage\">{{ u }}</li>\n          </ul>\n          <blockquote class=\"blockquote\">\n            <p class=\"mb-0\"><em>{{ product.main_content }}</em></p>\n          </blockquote>\n        </div>\n        <div id=\"product-social\" class=\"box social text-center mb-5 mt-5\">\n          <h4 class=\"heading-light\">Show it to your friends</h4>\n          <ul class=\"social list-inline\">\n            <li class=\"list-inline-item\"><a href=\"#\" data-animate-hover=\"pulse\" class=\"external facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n            <li class=\"list-inline-item\"><a href=\"#\" data-animate-hover=\"pulse\" class=\"external gplus\"><i class=\"fa fa-google-plus\"></i></a></li>\n            <li class=\"list-inline-item\"><a href=\"#\" data-animate-hover=\"pulse\" class=\"external twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n            <li class=\"list-inline-item\"><a href=\"#\" data-animate-hover=\"pulse\" class=\"email\"><i class=\"fa fa-envelope\"></i></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product-details/product-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product-details/product-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
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



var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(dataServices, activatedRoute) {
        var _this = this;
        this.dataServices = dataServices;
        this.activatedRoute = activatedRoute;
        this.product = [];
        this.temp = "";
        this.oneAtATime = true;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.code = params['code'];
            _this.products = _this.dataServices.products;
            _this.product = _this.products.find(function (item) { return item.code == _this.code; });
            _this.category = _this.product["category"];
            console.log(_this.product);
        });
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        /* this.product = this.productArray.find(item => item.code == "laf");
        console.log(this.product); */
    };
    ProductDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/product-details/product-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_services__WEBPACK_IMPORTED_MODULE_2__["DataServices"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/product-details/product-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsModule", function() { return ProductDetailsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _product_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-details-routing.module */ "./src/app/product-details/product-details-routing.module.ts");
/* harmony import */ var _product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/index.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProductDetailsModule = /** @class */ (function () {
    function ProductDetailsModule() {
    }
    ProductDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _product_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsRoutingModule"],
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"].forRoot()
            ],
            declarations: [
                _product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"]
            ],
            providers: [],
            exports: []
        })
    ], ProductDetailsModule);
    return ProductDetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=product-details-product-details-module.js.map