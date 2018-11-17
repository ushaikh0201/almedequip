(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portfolio-portfolio-module"],{

/***/ "./src/app/portfolio/portfolio-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/portfolio/portfolio-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PortfolioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioRoutingModule", function() { return PortfolioRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"] },
];
var PortfolioRoutingModule = /** @class */ (function () {
    function PortfolioRoutingModule() {
    }
    PortfolioRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PortfolioRoutingModule);
    return PortfolioRoutingModule;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-tabs .nav-link.active {\n    font-weight:bold;\n    background-color: transparent;\n    border-bottom:3px solid #dd0000;\n    border-right: none;\n    border-left: none;\n    border-top: none;\n}\n\n#nav-tab{\n    background: #dadada;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.tab-content{\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    margin-bottom: 10px;\n}\n\n.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active{\n    color: #6a0bcc !important;\n}\n\n.portfolio-container {\n    position: relative;\n    width: 100%;\n    padding: 10px;\n  }\n\n.portfolio-container .image {\n    display: block;\n    width: 100%;\n    height: auto;\n  }\n\n.portfolio-container .overlay {\n    position: absolute;\n    bottom: 100%;\n    left: 0;\n    right: 0;\n    background-color: #008cba99;\n    overflow: hidden;\n    width: 100%;\n    height:0;\n    transition: .5s ease;\n  }\n\n.portfolio-container:hover .overlay {\n    bottom: 0;\n    height: 100%;\n  }\n\n.portfolio-container .text {\n    color: #7800f3;\n    font-size: 14px;\n    font-weight: bold;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    text-align: center;\n  }\n\n.background-pentagon .showcase .item{\n  text-align: center;\n}\n\n.background-pentagon .showcase .item .icon{\n  font-size: 35px;\n}\n\n.background-pentagon .showcase .item h4.counter{\n  font-size: 25px;\n}"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"heading-breadcrumbs\">\n  <div class=\"container\">\n    <div class=\"row d-flex align-items-center flex-wrap\">\n      <div class=\"col-md-7\">\n        <h1 class=\"h2\">Portfolio</h1>\n      </div>\n      <div class=\"col-md-5\">\n        <ul class=\"breadcrumb d-flex justify-content-end\">\n          <li class=\"breadcrumb-item\">\n            <a routerLink=\"/\">Home</a>\n          </li>\n          <li class=\"breadcrumb-item active\">Portfolio</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"content\">\n  <div class=\"container\">\n    <section>\n      <div class=\"row bar\">\n        <div class=\"col-md-12\">\n          <div class=\"heading\">\n            <h2>Portfolio</h2>\n          </div>\n\n          <p class=\"lead\">Portfolio main content render here....</p>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-12 text-center \">\n          <nav class=\"nav-justified \">\n            <div class=\"nav nav-tabs \" id=\"nav-tab\" role=\"tablist\" *ngIf=\"portfolioCategories\">\n              <a [ngClass]=\"{ 'nav-item nav-link': true, 'active': categoryQuery == category.code }\" id=\"pop1-tab\" data-toggle=\"tab\" href=\"#{{ category.code }}\" role=\"tab\" aria-controls=\"pop1\" aria-selected=\"true\" *ngFor=\"let category of portfolioCategories\">{{ category.name }}</a>\n            </div>\n          </nav>\n          <div class=\"tab-content\" id=\"nav-tabContent\" *ngIf=\"portfolioCategories\">\n            <div class=\"tab-pane fade show active\" [ngClass]=\"{ 'tab-pane fade': true, 'show active': categoryQuery == category.code }\" id=\"{{ category.code }}\" role=\"tabpanel\" aria-labelledby=\"pop1-tab\" *ngFor=\"let category of portfolioCategories\">\n              <div class=\"pt-3\"></div>\n              <div *ngIf=\"category.list\">\n                <div class=\"row portfolio no-space\">\n                  <div class=\"col-sm-12 col-md-12\">\n                    <accordion [closeOthers]=\"oneAtATime\">\n                      <accordion-group heading=\"{{ list.name }}\" *ngFor=\"let list of category.list\">\n                        <div class=\"row\" >\n                          <div class=\"col-md-4\" *ngFor=\"let project of list.projects\">\n                            <div class=\"portfolio-container\">\n                              <img src=\"{{ project.img }}\" alt=\"Avatar\" class=\"image\">\n                              <div class=\"overlay\">\n                                <div class=\"text\"><a routerLink=\"/portfolio-details\" [queryParams]=\"{ code: list.code }\"> {{ list.name }}</a></div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>  \n                      </accordion-group>\n                    </accordion>\n                      <!-- /.box-image -->\n                    </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n  </div>\n  <!-- /#contact.container -->\n\n  <section class=\"bar background-pentagon no-mb\">\n    <div class=\"container\">\n      <div class=\"row showcase\">\n        <div class=\"col-md-3 col-sm-6\">\n          <div class=\"item\">\n            <div class=\"icon\">\n              <i class=\"fa fa-align-justify\"></i>\n            </div>\n            <h4>\n              <span class=\"counter\">580</span>\n              <br> Modular OT Installed\n\n            </h4>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6\">\n          <div class=\"item\">\n            <div class=\"icon\">\n              <i class=\"fa fa-users\"></i>\n            </div>\n            <h4>\n              <span class=\"counter\">100</span>\n              <br> Satisfied Clients</h4>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6\">\n          <div class=\"item\">\n            <div class=\"icon\">\n              <i class=\"fa fa-copy\"></i>\n            </div>\n            <h4>\n              <span class=\"counter\">320</span>\n              <br> Projects\n\n            </h4>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6\">\n          <div class=\"item\">\n            <div class=\"icon\">\n              <i class=\"fa fa-font\"></i>\n            </div>\n            <h4>\n              <span class=\"counter\">923</span>\n              <br> Magazines and Brochures</h4>\n          </div>\n        </div>\n      </div>\n      <!-- /.row -->\n    </div>\n    <!-- /.container -->\n  </section>\n  <!-- /.bar -->\n</div>\n<!-- /#content -->"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-services */ "./src/app/services/data-services.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(dataServices, activatedRoute) {
        var _this = this;
        this.dataServices = dataServices;
        this.activatedRoute = activatedRoute;
        this.oneAtATime = true;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.categoryQuery = params['category'] == "" ? params['category'] : 'moi';
            _this.portfolio = _this.dataServices.portfolio;
            _this.portfolioCategories = _this.dataServices.getPortfolioByCategory();
        });
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__(".btn-pref .btn").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_3__(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
                // $(".tab").addClass("active"); // instead of this do the below 
                jquery__WEBPACK_IMPORTED_MODULE_3__(this).removeClass("btn-default").addClass("btn-primary");
            });
        });
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_services__WEBPACK_IMPORTED_MODULE_2__["DataServices"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.module.ts":
/*!***********************************************!*\
  !*** ./src/app/portfolio/portfolio.module.ts ***!
  \***********************************************/
/*! exports provided: PortfolioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioModule", function() { return PortfolioModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio-routing.module */ "./src/app/portfolio/portfolio-routing.module.ts");
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PortfolioModule = /** @class */ (function () {
    function PortfolioModule() {
    }
    PortfolioModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_4__["PortfolioRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"].forRoot()
            ],
            declarations: [
                _portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"]
            ],
            providers: [],
            exports: []
        })
    ], PortfolioModule);
    return PortfolioModule;
}());



/***/ })

}]);
//# sourceMappingURL=portfolio-portfolio-module.js.map