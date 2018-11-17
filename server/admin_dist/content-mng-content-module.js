(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-mng-content-module"],{

/***/ "./common/services/content-mng.service.ts":
/*!************************************************!*\
  !*** ./common/services/content-mng.service.ts ***!
  \************************************************/
/*! exports provided: ContentMngService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentMngService", function() { return ContentMngService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentMngService = /** @class */ (function () {
    function ContentMngService(http) {
        this.http = http;
    }
    ContentMngService.prototype.insertProductContent = function (product) {
        console.log(product);
        return this.http.post('/content-mng/product/insert-product', product).map(function (response) { return response.json(); });
    };
    ContentMngService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ContentMngService);
    return ContentMngService;
}());



/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/observable/of.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/observable/of.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].of = rxjs__WEBPACK_IMPORTED_MODULE_0__["of"];
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "./src/app/pages/content-mng/content-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/content-mng/content-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ContentRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRoutingModule", function() { return ContentRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/product.component */ "./src/app/pages/content-mng/products/product.component.ts");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content.component */ "./src/app/pages/content-mng/content.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: _content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"],
        children: [
            {
                path: 'products',
                component: _products_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"],
            }
        ],
    }];
var ContentRoutingModule = /** @class */ (function () {
    function ContentRoutingModule() {
    }
    ContentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            ],
        })
    ], ContentRoutingModule);
    return ContentRoutingModule;
}());

var routedComponents = [
    _content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"],
    _products_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]
];


/***/ }),

/***/ "./src/app/pages/content-mng/content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/content-mng/content.component.ts ***!
  \********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-content-mng',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/pages/content-mng/content.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/content-mng/content.module.ts ***!
  \*****************************************************/
/*! exports provided: ContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentModule", function() { return ContentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _content_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-routing.module */ "./src/app/pages/content-mng/content-routing.module.ts");
/* harmony import */ var _validators_validation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../validators/validation.module */ "./src/app/validators/validation.module.ts");
/* harmony import */ var _validators_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validators/validation.service */ "./src/app/validators/validation.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_services_content_mng_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/services/content-mng.service */ "./common/services/content-mng.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ContentModule = /** @class */ (function () {
    function ContentModule() {
    }
    ContentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
                _content_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContentRoutingModule"],
                _validators_validation_module__WEBPACK_IMPORTED_MODULE_3__["ValidationModule"]
            ],
            providers: [_validators_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"], _common_services_content_mng_service__WEBPACK_IMPORTED_MODULE_6__["ContentMngService"]],
            declarations: _content_routing_module__WEBPACK_IMPORTED_MODULE_2__["routedComponents"].slice(),
        })
    ], ContentModule);
    return ContentModule;
}());



/***/ }),

/***/ "./src/app/pages/content-mng/products/product.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/content-mng/products/product.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n    <nb-card-header>Block form</nb-card-header>\n    <nb-card-body *ngIf=\"productForm\">\n        <form [formGroup]=\"productForm\" (ngSubmit)=\"formProductSubmit()\" novalidate>\n            <div class=\"row\">\n                <div class=\"form-group col-md-6\">\n                    <label>Product Name</label>\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\" (blur)=\"validateOnBlur('name',$event)\"/>\n                    <control-messages [control]=\"productForm.controls.name\"></control-messages>\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <label>Product Code</label>\n                    <input type=\"text\" formControlName=\"code\" class=\"form-control\" (blur)=\"validateOnBlur('code',$event)\"/>\n                    <control-messages [control]=\"productForm.controls.code\"></control-messages>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col-md-3\">\n                    <label>Price</label>\n                    <input type=\"text\" formControlName=\"price\" class=\"form-control\" (blur)=\"validateOnBlur('price',$event)\"/>\n                    <control-messages [control]=\"productForm.controls.price\"></control-messages>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Status</label>\n                    <select formControlName=\"status\" class=\"form-control\" (blur)=\"validateOnBlur('status',$event)\">\n                        <option value=\"1\">Active</option>\n                        <option value=\"2\">InActive</option>\n                    </select>\n                    <control-messages [control]=\"productForm.controls.status\"></control-messages>\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <label>Category</label>\n                    <select formControlName=\"category\" class=\"form-control\" (blur)=\"validateOnBlur('category',$event)\">\n                        <option value=\"1\">Latest</option>\n                        <option value=\"2\">Featured</option>\n                    </select>\n                    <control-messages [control]=\"productForm.controls.category\"></control-messages>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col-md-6\">\n                    <label>Leading Content</label>\n                    <textarea formControlName=\"main_content\"  cols=\"30\" rows=\"8\" class=\"form-control\" (blur)=\"validateOnBlur('main_content',$event)\"></textarea>\n                    <control-messages [control]=\"productForm.controls.main_content\"></control-messages>\n                    <div class=\"validation-checkboxes row\">\n                        <nb-checkbox status=\"success\" class=\"col-sm-4\" formControlName=\"type\">New</nb-checkbox>\n                        <nb-checkbox status=\"warning\" class=\"col-sm-4\" formControlName=\"type\">Offer</nb-checkbox>\n                        <nb-checkbox status=\"danger\" class=\"col-sm-4\" formControlName=\"type\">Publish</nb-checkbox>\n                    </div>\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <label>Description</label>\n                    <textarea formControlName=\"description\"  cols=\"30\" rows=\"10\" class=\"form-control\" (blur)=\"validateOnBlur('description',$event)\"></textarea>\n                    <control-messages [control]=\"productForm.controls.description\"></control-messages>\n                </div>\n            </div>\n            <!-- https://stackblitz.com/edit/angular-5e2qjd?file=src%2Fapp%2Fapp.component.html -->\n            <div class=\"row\">\n                <div class=\"col-md-6\" formArrayName=\"tech_spec\">\n                    <button type=\"button\" class=\"btn btn-success btn-block\" (click)=\"addSpecField()\"><i class=\"fa fa-plus\"></i> Technical Specification</button>\n                    <div class=\"input-group\"  *ngFor=\"let specification of productForm.controls.tech_spec.controls; let i=index\" [formGroupName]=\"i\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"specification\">\n                        <span class=\"input-group-append\">\n                            <button type=\"button\" class=\"btn btn-danger input-group-text\" (click)=\"removeSpecField()\">\n                            <i class=\"fa fa-minus text-default\"></i>\n                            </button>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-md-6\" formArrayName=\"usage\">\n                    <button type=\"button\" class=\"btn btn-success btn-block\" (click)=\"addUsageField()\"><i class=\"fa fa-plus\"></i> Usage of Product</button>\n                    <div class=\"input-group\"  *ngFor=\"let language of productForm.controls.usage.controls; let i=index\" [formGroupName]=\"i\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"usagelist\">\n                        <span class=\"input-group-append\">\n                            <button type=\"button\" class=\"btn btn-danger input-group-text\" (click)=\"removeUsageField()\">\n                            <i class=\"fa fa-minus text-default\"></i>\n                            </button>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n    </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/content-mng/products/product.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/content-mng/products/product.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host .full-width {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-width: 220px; }\n.nb-theme-default :host nb-checkbox {\n  margin-bottom: 1rem; }\n[dir=ltr] .nb-theme-default :host .form-inline > * {\n  margin: 0 1.5rem 1.5rem 0; }\n[dir=rtl] .nb-theme-default :host .form-inline > * {\n  margin: 0 0 1.5rem 1.5rem; }\n.nb-theme-default :host nb-card.inline-form-card nb-card-body {\n  padding-bottom: 0; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host .full-width {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-width: 220px; }\n.nb-theme-cosmic :host nb-checkbox {\n  margin-bottom: 1rem; }\n[dir=ltr] .nb-theme-cosmic :host .form-inline > * {\n  margin: 0 1.5rem 1.5rem 0; }\n[dir=rtl] .nb-theme-cosmic :host .form-inline > * {\n  margin: 0 0 1.5rem 1.5rem; }\n.nb-theme-cosmic :host nb-card.inline-form-card nb-card-body {\n  padding-bottom: 0; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host .full-width {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-width: 220px; }\n.nb-theme-corporate :host nb-checkbox {\n  margin-bottom: 1rem; }\n[dir=ltr] .nb-theme-corporate :host .form-inline > * {\n  margin: 0 1.5rem 1.5rem 0; }\n[dir=rtl] .nb-theme-corporate :host .form-inline > * {\n  margin: 0 0 1.5rem 1.5rem; }\n.nb-theme-corporate :host nb-card.inline-form-card nb-card-body {\n  padding-bottom: 0; }\n.validation-checkboxes {\n  margin-top: 15px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/pages/content-mng/products/product.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/content-mng/products/product.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../validators/validation.service */ "./src/app/validators/validation.service.ts");
/* harmony import */ var _common_services_content_mng_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../common/services/content-mng.service */ "./common/services/content-mng.service.ts");
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
    function ProductComponent(formBuilder, _renderer, contentMngService) {
        this.formBuilder = formBuilder;
        this._renderer = _renderer;
        this.contentMngService = contentMngService;
        this.submitted = false;
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.productForm = this.formBuilder.group({
            "name": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_validators_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].requiredValidator]),
            "code": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_validators_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].requiredValidator]),
            "price": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_validators_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].requiredValidator]),
            "status": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1, [_validators_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].requiredValidator]),
            "category": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1, [_validators_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].requiredValidator]),
            "type": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, [_validators_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].requiredValidator]),
            "main_content": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_validators_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].requiredValidator]),
            "description": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_validators_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].requiredValidator]),
            "tech_spec": this.formBuilder.array([
                this.initTechSpec()
            ]),
            "usage": this.formBuilder.array([
                this.initUsage()
            ])
        });
    };
    ProductComponent.prototype.initTechSpec = function () {
        return this.formBuilder.group({
            specification: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    };
    ProductComponent.prototype.initUsage = function () {
        return this.formBuilder.group({
            usagelist: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    };
    ProductComponent.prototype.addSpecField = function () {
        var control = this.productForm.controls['tech_spec'];
        control.push(this.initTechSpec());
    };
    ProductComponent.prototype.addUsageField = function () {
        var control = this.productForm.controls['usage'];
        control.push(this.initUsage());
    };
    ProductComponent.prototype.removeSpecField = function (i) {
        var control = this.productForm.controls['tech_spec'];
        control.removeAt(i);
    };
    ProductComponent.prototype.removeUsageField = function (i) {
        var control = this.productForm.controls['usage'];
        control.removeAt(i);
    };
    ProductComponent.prototype.validateOnBlur = function (field, ev) {
        if (this.productForm.get(field).invalid && (this.productForm.get(field).dirty || this.productForm.get(field).touched)) {
            this._renderer.setElementClass(ev.target, "form-control-danger", true);
        }
        else {
            this._renderer.setElementClass(ev.target, "form-control-danger", false);
            this._renderer.setElementClass(ev.target, "form-control-success", true);
        }
    };
    ProductComponent.prototype.formProductSubmit = function () {
        if (this.productForm.valid) {
            // console.log(this.productForm.value);
            this.contentMngService.insertProductContent(this.productForm.value).subscribe(function (res) {
                console.log(res);
            });
        }
        else {
            this.validateAllFields(this.productForm);
        }
    };
    ProductComponent.prototype.validateAllFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                _this.validateAllFields(control);
            }
        });
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-product',
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/pages/content-mng/products/product.component.scss")],
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/pages/content-mng/products/product.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _common_services_content_mng_service__WEBPACK_IMPORTED_MODULE_3__["ContentMngService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/validators/control-messages.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/validators/control-messages.component.ts ***!
  \**********************************************************/
/*! exports provided: ControlMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlMessagesComponent", function() { return ControlMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation.service */ "./src/app/validators/validation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlMessagesComponent = /** @class */ (function () {
    function ControlMessagesComponent() {
    }
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return _validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"])
    ], ControlMessagesComponent.prototype, "control", void 0);
    ControlMessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'control-messages',
            template: "<div *ngIf=\"errorMessage !== null\" class=\"text-danger\">{{errorMessage}}</div>"
        }),
        __metadata("design:paramtypes", [])
    ], ControlMessagesComponent);
    return ControlMessagesComponent;
}());



/***/ }),

/***/ "./src/app/validators/validation.module.ts":
/*!*************************************************!*\
  !*** ./src/app/validators/validation.module.ts ***!
  \*************************************************/
/*! exports provided: ValidationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationModule", function() { return ValidationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _control_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-messages.component */ "./src/app/validators/control-messages.component.ts");
/* harmony import */ var _validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation.service */ "./src/app/validators/validation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ValidationModule = /** @class */ (function () {
    function ValidationModule() {
    }
    ValidationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
            ],
            declarations: [
                _control_messages_component__WEBPACK_IMPORTED_MODULE_2__["ControlMessagesComponent"]
            ],
            providers: [_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"]],
            exports: [
                // AlertComponent
                _control_messages_component__WEBPACK_IMPORTED_MODULE_2__["ControlMessagesComponent"]
            ]
        })
    ], ValidationModule);
    return ValidationModule;
}());



/***/ }),

/***/ "./src/app/validators/validation.service.ts":
/*!**************************************************!*\
  !*** ./src/app/validators/validation.service.ts ***!
  \**************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");



var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': "This field is required!",
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Please enter valid email address.',
            'invalidPassword': 'Password must be between 6 and 20 characters!',
            'minlength': "You need to enter at least " + validatorValue.requiredLength + " characters.",
            'notMatchPassword': 'Password confirmation does not match password!',
            'mustChecked': 'This must be checked',
            'notValidBondValue': 'Number of bond must be less than or equal to available bond!',
            'maxLength': "You can only enter " + validatorValue.requiredLength + " characters.",
            'dateInvalid': 'Invalid date!',
            'endDateLessThanStartDate': 'End Date should be greater than start date!',
            'notLessThanOrEqualtoZeroValue': 'This field should not be less than or equal to zero',
            'notAvailableToSold': 'Not available to sold',
            'amountLessThanRequiredAmount': 'Amount must be less than required amount',
            'invalidMobileNumber': 'Invalid mobile number!',
        };
        return config[validatorName];
    };
    ValidationService.requiredValidator = function (control) {
        if (control.value == null || control.value == '' || control.value == 0) {
            return { 'required': true };
        }
        else {
            return null;
        }
    };
    /* static requiredIfValidator(control: AbstractControl){
        const formGroup = control.parent;
        if(formGroup){
            const prevControl = formGroup.get('')
        }
    } */
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value == null || control.value == '') {
            return null;
        }
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (!control.value) {
            return null;
        }
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,20}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    ValidationService.confirmPasswordValidator = function (AC) {
        var formGroup = AC.parent;
        if (formGroup) {
            var passwordControl = formGroup.get('password'); // to get value in input tag
            var confirmPasswordControl = formGroup.get('confirmPassword'); // to get value in input tag
            if (passwordControl && confirmPasswordControl) {
                var password = passwordControl.value;
                var confirmPassword = confirmPasswordControl.value;
                if (password !== confirmPassword) {
                    return { notMatchPassword: true };
                }
                else {
                    return null;
                }
            }
        }
        return null;
    };
    ValidationService.isChecked = function (control) {
        if (!control.value) {
            return { mustChecked: true };
        }
        else {
            return null;
        }
    };
    ValidationService.numberOfBondValidator = function (AC) {
        var formGroup = AC.parent;
        //if (formGroup) {
        var numberOfBondControl = formGroup.get('number_of_bond');
        var totalAvailableBond = formGroup.get('total_available_bond');
        if (totalAvailableBond.value == 0) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]
                .of(numberOfBondControl.value == '' || numberOfBondControl.value == 0 || numberOfBondControl.value < 0)
                .map(function (result) { return !!result ? { 'notAvailableToSold': true } : null; });
        }
        if (numberOfBondControl.value == '' || numberOfBondControl.value == 0 || numberOfBondControl.value < 0) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]
                .of(numberOfBondControl.value == '' || numberOfBondControl.value == 0 || numberOfBondControl.value < 0)
                .map(function (result) { return !!result ? { 'notLessThanOrEqualtoZeroValue': true } : null; });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]
            .of(totalAvailableBond.value >= numberOfBondControl.value)
            .map(function (result) { return !!result ? null : { 'notValidBondValue': true }; });
        //}
        //return null;
    };
    ValidationService.pledgeAmountValidator = function (AC) {
        var formGroup = AC.parent;
        var amountControl = formGroup.get('amount');
        var requiredAmountControl = formGroup.get('required_amount');
        if (requiredAmountControl.value == 0) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]
                .of(requiredAmountControl.value == '' || requiredAmountControl.value == 0 || requiredAmountControl.value < 0)
                .map(function (result) { return !!result ? { 'notAvailableToSold': true } : null; });
        }
        if (amountControl.value == '' || amountControl.value == 0 || amountControl.value < 0) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]
                .of(amountControl.value == '' || amountControl.value == 0 || amountControl.value < 0)
                .map(function (result) { return !!result ? { 'notLessThanOrEqualtoZeroValue': true } : null; });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]
            .of(requiredAmountControl.value >= amountControl.value)
            .map(function (result) { return !!result ? null : { 'amountLessThanRequiredAmount': true }; });
    };
    ValidationService.dateValidator = function (control) {
        if (control.pristine) {
            return null;
        }
        if ((control.value !== undefined && control.value !== '' && control.value != null)) {
            var month = null;
            var day = null;
            var year = null;
            var currentTaxYear = Number(new Date().getFullYear() - 1);
            if (control.value.indexOf('/') > -1) {
                var res = control.value.split("/");
                if (res.length > 1) {
                    month = res[0];
                    day = res[1];
                    year = res[2];
                }
            }
            else {
                if (control.value.length == 8) {
                    month = control.value.substring(0, 2);
                    day = control.value.substring(2, 4);
                    year = control.value.substring(4, 8);
                }
            }
            if (isNaN(month) || isNaN(day) || isNaN(year)) {
                return { 'dateInvalid': true };
            }
            month = Number(month);
            day = Number(day);
            year = Number(year);
            if (month < 1 || month > 12) {
                return { 'dateInvalid': true };
            }
            if (day < 1 || day > 31) {
                return { 'dateInvalid': true };
            }
            if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) {
                return { 'dateInvalid': true };
            }
            if (month == 2) {
                var isleap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
                if (day > 29 || (day === 29 && !isleap)) {
                    return { 'dateInvalid': true };
                }
            }
            if (year !== currentTaxYear) {
                return { 'dateInvalid': true };
            }
        }
        return null;
    };
    ValidationService.isRequiredIfChecked = function (AC) {
        var formGroup = AC.parent;
        if (formGroup) {
            var is_open_end = formGroup.get('is_open_end');
            var expire_by_month = formGroup.get('expire_by_month');
            if (is_open_end.value === true) {
                console.log("insode if block");
                return null;
            }
            else {
                console.log("insode else block");
                if (expire_by_month.value == 0 || expire_by_month.value == '')
                    return { required: true };
                else
                    return null;
            }
        }
    };
    ValidationService.endDateAfterOrEqualValidator = function (AC) {
        var formGroup = AC.parent;
        if (formGroup) {
            var start_date = new Date(formGroup.get('start_date').value);
            var end_date = new Date(formGroup.get('end_date').value);
            if (end_date.getTime() < start_date.getTime()) {
                return { 'endDateLessThanStartDate': true };
            }
            else {
                return null;
            }
        }
    };
    ValidationService.mobileNumberValidator = function (control) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]
            .of(control.value.match('^[0-9]*$'))
            .map(function (result) { return !!result ? null : { 'invalidMobileNumber': true }; });
    };
    return ValidationService;
}());



/***/ })

}]);
//# sourceMappingURL=content-mng-content-module.js.map