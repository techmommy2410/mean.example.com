function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>user</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/user/user-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/user-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: UserPageRoutingModule */

  /***/
  function srcAppUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function () {
      return UserPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.page */
    "./src/app/user/user.page.ts");

    var routes = [{
      path: '',
      component: _user_page__WEBPACK_IMPORTED_MODULE_3__["UserPage"]
    }];

    var UserPageRoutingModule = function UserPageRoutingModule() {
      _classCallCheck(this, UserPageRoutingModule);
    };

    UserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserPageModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageModule", function () {
      return UserPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-routing.module */
    "./src/app/user/user-routing.module.ts");
    /* harmony import */


    var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user.page */
    "./src/app/user/user.page.ts");

    var UserPageModule = function UserPageModule() {
      _classCallCheck(this, UserPageModule);
    };

    UserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPageRoutingModule"]],
      declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
    })], UserPageModule);
    /***/
  },

  /***/
  "./src/app/user/user.page.scss":
  /*!*************************************!*\
    !*** ./src/app/user/user.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/user.page.ts":
  /*!***********************************!*\
    !*** ./src/app/user/user.page.ts ***!
    \***********************************/

  /*! exports provided: UserPage */

  /***/
  function srcAppUserUserPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPage", function () {
      return UserPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../users.service */
    "./src/app/users.service.ts");

    var UserPage = /*#__PURE__*/function () {
      function UserPage(activatedRoute, usersService, router) {
        _classCallCheck(this, UserPage);

        this.activatedRoute = activatedRoute;
        this.usersService = usersService;
        this.router = router;
      }

      _createClass(UserPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.params.subscribe(function (params) {
            // console.log(params['userId']);
            _this.getUser(params['userId']);
          });
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          var _this2 = this;

          this.usersService.getUser(id).subscribe(function (response) {
            // console.log(response);
            _this2.user = response.user;
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          var _this3 = this;

          if (confirm("Are you sure to delete " + this.user.username)) {
            this.usersService.deleteUser(id).subscribe(function () {
              _this3.router.navigate(['/users']);
            });
          }
        }
      }]);

      return UserPage;
    }();

    UserPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    UserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user.page.scss */
      "./src/app/user/user.page.scss"))["default"]]
    })], UserPage);
    /***/
  },

  /***/
  "./src/app/users.service.ts":
  /*!**********************************!*\
    !*** ./src/app/users.service.ts ***!
    \**********************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var UsersService = /*#__PURE__*/function () {
      function UsersService(http) {
        _classCallCheck(this, UsersService);

        this.http = http;
        var l = window.location;
        var host; //Are we running under Ionic or in a production environment?

        if (l.port >= '8100') {
          host = 'localhost:3000';
        } else {
          host = l.hostname + (l.port.length > 0 ? ':' + l.port : '');
        }

        this.url = "".concat(l.protocol, "//").concat(host, "/api/users/");
      }

      _createClass(UsersService, [{
        key: "getUsers",
        value: function getUsers() {
          return this.http.get(this.url, httpOptions);
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          return this.http.get("".concat(this.url, "/").concat(id), httpOptions);
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          return this.http.put(this.url, user, httpOptions);
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          return this.http["delete"]("".concat(this.url, "/").concat(id), httpOptions);
        }
      }]);

      return UsersService;
    }();

    UsersService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UsersService);
    /***/
  }
}]);
//# sourceMappingURL=user-user-module-es5.js.map