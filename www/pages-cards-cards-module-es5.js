function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cards-cards-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cards/cards.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cards/cards.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCardsCardsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"gradient-header\" color=\"app\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button><img src=\"../../../assets/icon/menuicon.svg\" style=\"width: 80%; margin: 0 auto\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title [routerLink]=\"['/menu']\">\n    Appexpress\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>    \n  <ion-grid class=\"ion-padding\">\n    <ion-row>\n      <h3>Tarjetas</h3>\n    </ion-row>\n    <ion-card  *ngFor=\"let item of listaCards\" style=\"box-shadow: none !important; background: #fafafa;\" class=\"ion-padding\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"11\">\n            <div class=\"ion-padding\" *ngIf=\"item[6] > 0\" align=\"right\">\n              <ion-badge color=\"light\">Predeterminada</ion-badge>\n            </div>\n          </ion-col>\n          <ion-col size=\"1\">\n            <div *ngIf=\"item[6] == 1\">\n              <ion-icon name=\"checkmark-circle\" style=\"font-size: 2em; margin-top: 10px; color: #128BC9;\"></ion-icon>\n            </div>\n            <div *ngIf=\"item[6] != 1\" id=\"{{ item[0] }}\" (click)=\"setDefecto( item[0] )\">\n              <ion-icon name=\"radio-button-off\" style=\"font-size: 2em; margin-top: 10px;\"></ion-icon>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"9\" align-self-start>\n            <p style=\"font-size: 1.2em;\">•••• •••• •••• <b>{{ item[1] }}</b></p>\n            <small>{{ item[2] }}</small>\n          </ion-col>\n          <ion-col size=\"3\" align-self-center>\n            <img src=\"../../../assets/icon/{{ item[5] }}.svg\" alt=\"\">\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n      <ion-row align-items-center>\n        <ion-col>\n          <ion-button expand=\"block\" class=\"btnapp\" color=\"btnapp\" (click)=\"cardDelete( item[0], item[3] )\">\n            Eliminar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-grid>\n</ion-content>\n\n<ion-footer style=\"padding: 0.2em\">\n  <ion-toolbar>\n    <ion-item [routerLink]=\"['/addcard']\">\n      <ion-label>Agregar tarjeta</ion-label>\n      <ion-icon name=\"add\" slot=\"end\"></ion-icon>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>  \n";
    /***/
  },

  /***/
  "./src/app/pages/cards/cards-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/cards/cards-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: CardsPageRoutingModule */

  /***/
  function srcAppPagesCardsCardsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsPageRoutingModule", function () {
      return CardsPageRoutingModule;
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


    var _cards_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cards.page */
    "./src/app/pages/cards/cards.page.ts");

    var routes = [{
      path: '',
      component: _cards_page__WEBPACK_IMPORTED_MODULE_3__["CardsPage"]
    }];

    var CardsPageRoutingModule = function CardsPageRoutingModule() {
      _classCallCheck(this, CardsPageRoutingModule);
    };

    CardsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CardsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/cards/cards.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/cards/cards.module.ts ***!
    \*********************************************/

  /*! exports provided: CardsPageModule */

  /***/
  function srcAppPagesCardsCardsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsPageModule", function () {
      return CardsPageModule;
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


    var _cards_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cards-routing.module */
    "./src/app/pages/cards/cards-routing.module.ts");
    /* harmony import */


    var _cards_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cards.page */
    "./src/app/pages/cards/cards.page.ts");

    var CardsPageModule = function CardsPageModule() {
      _classCallCheck(this, CardsPageModule);
    };

    CardsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cards_routing_module__WEBPACK_IMPORTED_MODULE_5__["CardsPageRoutingModule"]],
      declarations: [_cards_page__WEBPACK_IMPORTED_MODULE_6__["CardsPage"]]
    })], CardsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/cards/cards.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/cards/cards.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCardsCardsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app {\n  background: var(--ion-color-insideapp) !important;\n  color: #F8F8F8 !important;\n}\n\n.btnapp {\n  background: var(--ion-color-btnapp) !important;\n  color: #f8f8f8;\n}\n\n.card-content-md p {\n  margin-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNjZXNwZWRlcy9Eb2N1bWVudHMvYXBwcy9hcHBiYXNlX3YwLjEvc3JjL2FwcC9wYWdlcy9jYXJkcy9jYXJkcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhcmRzL2NhcmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlEQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLDhDQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcmRzL2NhcmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1pbnNpZGVhcHApICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNGOEY4RjggIWltcG9ydGFudDtcbn1cblxuLmJ0bmFwcHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYnRuYXBwKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZjhmOGY4O1xufVxuXG4uY2FyZC1jb250ZW50LW1kIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn0iLCIuYXBwIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWluc2lkZWFwcCkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGOEY4RjggIWltcG9ydGFudDtcbn1cblxuLmJ0bmFwcCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG5hcHApICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZjhmOGY4O1xufVxuXG4uY2FyZC1jb250ZW50LW1kIHAge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/cards/cards.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/cards/cards.page.ts ***!
    \*******************************************/

  /*! exports provided: CardsPage */

  /***/
  function srcAppPagesCardsCardsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsPage", function () {
      return CardsPage;
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/crud.service */
    "./src/app/services/crud.service.ts");
    /* harmony import */


    var _services_ftpayment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/ftpayment.service */
    "./src/app/services/ftpayment.service.ts");
    /* harmony import */


    var _modals_verifypass_verifypass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../modals/verifypass/verifypass.page */
    "./src/app/modals/verifypass/verifypass.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_general_general_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/general/general.component */
    "./src/app/components/general/general.component.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var impresa = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].impresa;

    var CardsPage = /*#__PURE__*/function () {
      function CardsPage(afAuth, crudService, fts, modalCtrl, loadingCtrl, general) {
        _classCallCheck(this, CardsPage);

        this.afAuth = afAuth;
        this.crudService = crudService;
        this.fts = fts;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.general = general; // tslint:disable: triple-equals

        this.userid = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid;
      }

      _createClass(CardsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.username = this.afAuth.auth.currentUser.email;
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.getCardsByUser();
        }
      }, {
        key: "setDefecto",
        value: function setDefecto(cardid) {
          var _this = this;

          console.log('cardid');
          console.log(cardid);
          var data = {
            sel: '',
            tbl: 55,
            where: cardid + ',"' + this.userid + '"'
          };
          this.crudService.crud(data).subscribe(function (res) {
            console.log(res);

            _this.getCardsByUser();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getCardsByUser",
        value: function getCardsByUser() {
          var _this2 = this;

          console.log('getCardsByUser');
          this.userid = this.afAuth.auth.currentUser.uid;
          console.log(this.userid);
          var data = {
            sel: '',
            tbl: 49,
            where: '"' + this.userid + '"'
          };
          this.crudService.crud(data).subscribe(function (res) {
            console.log('res');
            console.log(JSON.stringify(res));
            _this2.listaCards = res[0];
          }, function (err) {
            console.log('error: crud err');
            console.log(err);
          });
        }
      }, {
        key: "crud",
        value: function crud(data) {
          var _this3 = this;

          this.crudService.crud(data).subscribe(function (res) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('Información de tarjeta eliminada');
                      console.log(res);
                      console.log(JSON.stringify(res));
                      this.modalCtrl.dismiss({
                        dismissed: true
                      });
                      this.getCardsByUser();
                      return _context.abrupt("return", true);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "cardDelete",
        value: function cardDelete(idcard, cardTokenId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var modal, _ref, data, loading;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log(this.username);
                    _context2.next = 3;
                    return this.modalCtrl.create({
                      component: _modals_verifypass_verifypass_page__WEBPACK_IMPORTED_MODULE_6__["VerifypassPage"],
                      cssClass: 'modal-modal',
                      componentProps: {
                        getuser: this.username
                      }
                    });

                  case 3:
                    modal = _context2.sent;
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    _context2.next = 8;
                    return modal.onWillDismiss();

                  case 8:
                    _ref = _context2.sent;
                    data = _ref.data;
                    console.log(JSON.stringify(data));
                    console.log(data);
                    _context2.next = 14;
                    return this.loadingCtrl.create({
                      message: 'Eliminando tarjeta'
                    });

                  case 14:
                    loading = _context2.sent;
                    _context2.next = 17;
                    return loading.present();

                  case 17:
                    if (data != undefined) {
                      console.log('data 1');
                      console.log('data');
                      this.crudService.crud({
                        sel: '',
                        tbl: 96,
                        where: impresa
                      }).subscribe(function (sucft) {
                        _this4.fts.userDeleteCard(sucft[0][0][0], _this4.username, data.pass + '$', cardTokenId).subscribe(function (succ) {
                          console.log(JSON.stringify(succ));

                          if (succ != null) {
                            if (succ.apiStatus == 'Successful') {
                              var info = {
                                sel: '',
                                tbl: 46,
                                where: '3,' + idcard + ',"","","","",""'
                              };

                              _this4.crud(info);

                              loading.dismiss();
                            } else {
                              loading.dismiss();
                            }
                          } else {
                            _this4.general.mostrar_error('Tuvimos un inconveniente eliminando la tarjeta, por favor intente de nuevo');

                            loading.dismiss();
                          }
                        }, function (err) {
                          console.log('err api');
                          console.log(JSON.stringify(err));
                          loading.dismiss();
                        });
                      }, function (err) {
                        console.log('err');
                        console.log(err);
                      });
                      console.log('fin');
                    } else {
                      console.log('data 2');
                      loading.dismiss();
                    }

                  case 18:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return CardsPage;
    }();

    CardsPage.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"]
      }, {
        type: _services_ftpayment_service__WEBPACK_IMPORTED_MODULE_5__["FtpaymentService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
      }, {
        type: _components_general_general_component__WEBPACK_IMPORTED_MODULE_8__["GeneralComponent"]
      }];
    };

    CardsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cards',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cards.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cards/cards.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cards.page.scss */
      "./src/app/pages/cards/cards.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"], _services_ftpayment_service__WEBPACK_IMPORTED_MODULE_5__["FtpaymentService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"], _components_general_general_component__WEBPACK_IMPORTED_MODULE_8__["GeneralComponent"]])], CardsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-cards-cards-module-es5.js.map