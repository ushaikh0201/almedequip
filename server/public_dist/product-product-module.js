(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "./src/app/product/product-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/product/product-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component */ "./src/app/product/product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"] },
];
var ProductRoutingModule = /** @class */ (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"heading-breadcrumbs\">\n  <div class=\"container\">\n    <div class=\"row d-flex align-items-center flex-wrap\">\n      <div class=\"col-md-7\">\n        <h1 class=\"h2\">Products</h1>\n      </div>\n      <div class=\"col-md-5\">\n        <ul class=\"breadcrumb d-flex justify-content-end\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n          <li class=\"breadcrumb-item active\">Products</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"content\">\n  <div class=\"container\">\n    <div class=\"row bar\">\n      <div class=\"col-md-3\">\n        <!-- MENUS AND FILTERS-->\n        <div class=\"panel panel-default sidebar-menu\">\n          <div class=\"panel-heading\">\n            <h3 class=\"h4 panel-title\">Categories</h3>\n            <button type=\"button\"data-toggle=\"collapse\" data-target=\"#product-category\" aria-expanded=\"true\" aria-controls=\"multiCollapseExample2\" class=\"navbar-toggler btn-template-outlined pull-right\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <i class=\"fa fa-th\"></i>\n              <i class=\"fa fa-remove\"></i>\n            </button>\n          </div>\n          <div class=\"panel-body\">\n            <ul class=\"nav nav-pills flex-column text-sm category-menu collapse show\" id=\"product-category\">\n              <li class=\"nav-item\"><a routerLink=\"/products\" [queryParams]=\"{ category: 'latest' }\" [ngClass]=\"{ 'nav-link d-flex align-items-center justify-content-between': true, 'active': category == 'latest' }\"><span>Latest </span><span class=\"badge badge-secondary\">6</span></a>\n                <ul class=\"nav nav-pills flex-column\" *ngIf=\"products\">\n                  <li class=\"nav-item\" *ngFor=\"let product of products\"><a  *ngIf=\"product.category == 'latest'\" routerLink=\"/product-details\" [queryParams]=\"{ code:product.code }\" class=\"nav-link\">{{ product.name }}</a></li>\n                </ul>\n              </li>\n              <li class=\"nav-item\"><a routerLink=\"/products\" [queryParams]=\"{ category: 'featured' }\" [ngClass]=\"{ 'nav-link d-flex align-items-center justify-content-between': true, 'active': category == 'featured' }\"><span>Featured </span><span class=\"badge badge-light\">3</span></a>\n                <ul class=\"nav nav-pills flex-column\" *ngIf=\"products\">\n                  <li class=\"nav-item\" *ngFor=\"let product of products\"><a  *ngIf=\"product.category == 'featured'\"   routerLink=\"/product-details\" [queryParams]=\"{ code:product.code }\" class=\"nav-link\">{{ product.name }}</a></li>\n                </ul>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-9\">\n        <p class=\"text-muted lead\">We are engaged in manufacturing an extensive spectrum of medical equipment that is used for various process applications. Our precision finished range is developed using excellent quality raw material and finds application in several industries such as pharmaceutical companies, hospitals etc. Some of our exclusive assortment of medical equipment is as follows:</p>\n        <div class=\"row products products-big\">\n          <div class=\"col-lg-4 col-md-6\" *ngFor=\"let product of productByCategory\">\n            <div class=\"product\">\n              <div class=\"image\"><a href=\"shop-detail.html\"><img src=\"{{ product.img }}\" alt=\"laf\" class=\"img-fluid image1\"></a></div>\n              <div class=\"text\">\n                <h6><a routerLink=\"/product-details\" [queryParams]=\"{ code:product.code }\">{{ product.name }}</a></h6>\n              </div>\n              <div class=\"ribbon-holder\">\n                <div class=\"ribbon sale\">SALE</div>\n                <div class=\"ribbon new\">NEW</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"pages\">\n          <p class=\"loadMore text-center\"><a href=\"#\" class=\"btn btn-template-outlined\"><i class=\"fa fa-chevron-down\"></i> Load more</a></p>\n          <nav aria-label=\"Page navigation example\" class=\"d-flex justify-content-center\">\n            <ul class=\"pagination\">\n              <li class=\"page-item\"><a href=\"#\" class=\"page-link\"> <i class=\"fa fa-angle-double-left\"></i></a></li>\n              <li class=\"page-item active\"><a href=\"#\" class=\"page-link\">1</a></li>\n              <li class=\"page-item\"><a href=\"#\" class=\"page-link\">2</a></li>\n              <li class=\"page-item\"><a href=\"#\" class=\"page-link\">3</a></li>\n              <li class=\"page-item\"><a href=\"#\" class=\"page-link\">4</a></li>\n              <li class=\"page-item\"><a href=\"#\" class=\"page-link\">5</a></li>\n              <li class=\"page-item\"><a href=\"#\" class=\"page-link\"><i class=\"fa fa-angle-double-right\"></i></a></li>\n            </ul>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
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



var ProductComponent = /** @class */ (function () {
    function ProductComponent(dataServices, activatedRoute) {
        var _this = this;
        this.dataServices = dataServices;
        this.activatedRoute = activatedRoute;
        this.oneAtATime = true;
        this.isOpened = false;
        this.productByCategory = [];
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.category = params['category'];
            _this.products = _this.dataServices.products;
            _this.getProductByCategory();
        });
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.ngAfterViewInit = function () {
    };
    ProductComponent.prototype.getProductByCategory = function () {
        var _this = this;
        this.productByCategory = [];
        if (this.category) {
            this.products.forEach(function (arr) {
                if (arr.category == _this.category) {
                    _this.productByCategory.push(arr);
                }
            });
        }
        else {
            this.productByCategory = this.products;
        }
        console.log("this.productByCategory", this.productByCategory);
    };
    ProductComponent.prototype.openPanelBody = function () {
        console.log("Clicked");
        $('.panel accordion-toggle').attr('area-expanded', 'true');
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")],
        }),
        __metadata("design:paramtypes", [_services_data_services__WEBPACK_IMPORTED_MODULE_2__["DataServices"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/product/product-routing.module.ts");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product.component */ "./src/app/product/product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _product_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            declarations: [
                _product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"]
            ],
            providers: [],
            exports: []
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ })

}]);
//# sourceMappingURL=product-product-module.js.map