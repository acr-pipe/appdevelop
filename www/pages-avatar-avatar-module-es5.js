function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-avatar-avatar-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/avatar/avatar.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/avatar/avatar.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAvatarAvatarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"gradient-header\" color=\"app\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-menu-button><img src=\"../../../assets/icon/menuicon.svg\" style=\"width: 80%; margin: 0 auto\"></ion-menu-button>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-title style=\"margin-left: -10%;\" [routerLink]=\"['/menu']\">Appexpress</ion-title>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" align=\"center\">\n  <p>Selecciona un avatar para tu perfil de usuario</p>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <img [routerLink]=\"['/menu']\" src=\"../../../assets/icon/avatar1.svg\" width=\"100%\" (click)=\"selectAvatar(1)\">\n      </ion-col>\n      <ion-col size=\"6\">\n        <img [routerLink]=\"['/menu']\" src=\"../../../assets/icon/avatar2.svg\" width=\"100%\" (click)=\"selectAvatar(2)\">\n      </ion-col>\n      <ion-col size=\"6\">\n        <img [routerLink]=\"['/menu']\" src=\"../../../assets/icon/avatar3.svg\" width=\"100%\" (click)=\"selectAvatar(3)\">\n      </ion-col>\n      <ion-col size=\"6\">\n        <img [routerLink]=\"['/menu']\" src=\"../../../assets/icon/avatar4.svg\" width=\"100%\" (click)=\"selectAvatar(4)\">\n      </ion-col>\n      <ion-col size=\"6\">\n        <img [routerLink]=\"['/menu']\" src=\"../../../assets/icon/avatar5.svg\" width=\"100%\" (click)=\"selectAvatar(5)\">\n      </ion-col>\n      <ion-col size=\"6\">\n        <img [routerLink]=\"['/menu']\" src=\"../../../assets/icon/avatar6.svg\" width=\"100%\" (click)=\"selectAvatar(6)\">\n      </ion-col>\n      <ion-col size=\"6\">\n        <img [routerLink]=\"['/menu']\" src=\"../../../assets/icon/avatar7.svg\" width=\"100%\" (click)=\"selectAvatar(7)\">\n      </ion-col>\n      <ion-col size=\"6\">\n        <img [routerLink]=\"['/menu']\" src=\"../../../assets/icon/avatar8.svg\" width=\"100%\" (click)=\"selectAvatar(8)\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/avatar/avatar-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/avatar/avatar-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: AvatarPageRoutingModule */

  /***/
  function srcAppPagesAvatarAvatarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvatarPageRoutingModule", function () {
      return AvatarPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _avatar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./avatar.page */
    "./src/app/pages/avatar/avatar.page.ts");

    var routes = [{
      path: '',
      component: _avatar_page__WEBPACK_IMPORTED_MODULE_3__["AvatarPage"]
    }];

    var AvatarPageRoutingModule = function AvatarPageRoutingModule() {
      _classCallCheck(this, AvatarPageRoutingModule);
    };

    AvatarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AvatarPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/avatar/avatar.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/avatar/avatar.module.ts ***!
    \***********************************************/

  /*! exports provided: AvatarPageModule */

  /***/
  function srcAppPagesAvatarAvatarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvatarPageModule", function () {
      return AvatarPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _avatar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./avatar-routing.module */
    "./src/app/pages/avatar/avatar-routing.module.ts");
    /* harmony import */


    var _avatar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./avatar.page */
    "./src/app/pages/avatar/avatar.page.ts");

    var AvatarPageModule = function AvatarPageModule() {
      _classCallCheck(this, AvatarPageModule);
    };

    AvatarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _avatar_routing_module__WEBPACK_IMPORTED_MODULE_5__["AvatarPageRoutingModule"]],
      declarations: [_avatar_page__WEBPACK_IMPORTED_MODULE_6__["AvatarPage"]]
    })], AvatarPageModule);
    /***/
  },

  /***/
  "./src/app/pages/avatar/avatar.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/avatar/avatar.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAvatarAvatarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app {\n  background-color: var(--ion-color-insideapp) !important;\n  color: #F8F8F8 !important;\n}\n\n.btnapp {\n  background: var(--ion-color-btnapp) !important;\n  color: #f8f8f8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNjZXNwZWRlcy9Eb2N1bWVudHMvYXBwcy9hcHBiYXNlX3YwLjEvc3JjL2FwcC9wYWdlcy9hdmF0YXIvYXZhdGFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXZhdGFyL2F2YXRhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1REFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSw4Q0FBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F2YXRhci9hdmF0YXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWluc2lkZWFwcCkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI0Y4RjhGOCAhaW1wb3J0YW50O1xufVxuXG4uYnRuYXBwe1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG5hcHApICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmOGY4Zjg7XG59IiwiLmFwcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1pbnNpZGVhcHApICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRjhGOEY4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5hcHAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYnRuYXBwKSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2Y4ZjhmODtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/avatar/avatar.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/avatar/avatar.page.ts ***!
    \*********************************************/

  /*! exports provided: AvatarPage */

  /***/
  function srcAppPagesAvatarAvatarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvatarPage", function () {
      return AvatarPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/crud.service */
    "./src/app/services/crud.service.ts");

    var AvatarPage = /*#__PURE__*/function () {
      function AvatarPage(crudService) {
        _classCallCheck(this, AvatarPage);

        this.crudService = crudService;
      }

      _createClass(AvatarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectAvatar",
        value: function selectAvatar(idavatar) {
          var data = {
            sel: '',
            tbl: 56,
            where: '"' + idavatar
          };
          this.crudService.crud(data).subscribe(function (res) {
            console.log(res);
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return AvatarPage;
    }();

    AvatarPage.ctorParameters = function () {
      return [{
        type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"]
      }];
    };

    AvatarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-avatar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./avatar.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/avatar/avatar.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./avatar.page.scss */
      "./src/app/pages/avatar/avatar.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"]])], AvatarPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-avatar-avatar-module-es5.js.map