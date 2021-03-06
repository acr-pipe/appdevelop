function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-payment-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPaymentPaymentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"gradient-header\" color=\"app\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/orderoptions\"></ion-back-button>\n    </ion-buttons>\n    <ion-title slot=\"end\">Realizar pago</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <h6>Detalle del compra</h6>\n    <ion-card-content style=\"background: #f7f7f7;\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            Productos (<span id=\"cantprod\">{{ nproducto }}</span>):\n          </ion-col>\n          <ion-col size=\"6\" align=\"right\">\n            ₡ {{ subtotal }}\n          </ion-col>\n          <ion-col size=\"6\">\n            Envío y manejo:\n          </ion-col>\n          <ion-col size=\"6\" align=\"right\">\n            ₡ {{ flete }}\n          </ion-col>\n          <ion-col size=\"6\">\n            Subtotal:\n          </ion-col>\n          <ion-col size=\"6\" align=\"right\">\n            ₡ {{ fpaymentAmount }}\n          </ion-col>\n          <ion-col size=\"6\">\n            <b style=\"font-size: 18px;\">Total del pedido:</b>\n          </ion-col>\n          <ion-col size=\"6\" align=\"right\">\n            <b style=\"font-size: 18px;\" color=\"app\">₡ {{ fpaymentAmount }}</b>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n\n    <ion-card-content>\n      <ion-grid>\n        <ion-row align=\"center\">\n          <ion-col>\n            <section>\n              <div>\n                <img (click)=\"selectOptdelivery( $event )\" id=\"express\" src=\"../../../assets/icon/express_.svg\" alt=\"Express\" width=55%>\n              </div>\n              <label class=\"optexpress active\">Express</label>\n            </section>\n          </ion-col>\n          <ion-col>\n            <section>\n              <div>\n                <img (click)=\"selectOptdelivery( $event )\" id=\"recoge\" src=\"../../../assets/icon/recoge_.svg\" alt=\"Recoger\" width=50%>\n              </div>\n              <label class=\"optrecoge\">Recoger</label>\n            </section>\n          </ion-col>\n          <ion-col id=\"served\">\n            <section>\n              <div>\n                <img (click)=\"selectOptdelivery( $event )\" id=\"servido\" src=\"../../../assets/icon/recoge_.svg\" alt=\"Recoger\" width=50%>\n              </div>\n              <label class=\"optservido\">Servido</label>\n            </section>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n\n    <div id=\"direcciones\">\n      <h6>Dirección de envío</h6>\n      <ion-card-content style=\"background: #f7f7f7;\" (click)=\"showDirections()\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"11\">\n              <b id=\"direccion\"></b>\n              <p id=\"otrassenas\"></p> \n            </ion-col>\n            <ion-col size=\"1\">\n              <ion-icon name=\"arrow-dropright\" style=\"margin-top: 13px; font-size: 18px;\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </div>\n\n      <h6>Información de pago</h6>\n      <ion-card-content id=\"infopago\" style=\"background: #f7f7f7; display: none;\">\n        <ion-grid>\n          <ion-row align=\"center\">\n            <ion-col>\n              <section>\n                <div>\n                  <img (click)=\"changeinfopago( $event )\" id=\"efectivo\" src=\"../../../assets/icon/efectivo.svg\" width=\"50%\" alt=\"Efectivo\">\n                </div>\n                <label class=\"optefectivo active\">Efectivo</label>\n              </section>\n            </ion-col>\n            <ion-col>\n              <section>\n                <div>\n                  <img (click)=\"changeinfopago( $event )\" id=\"tarjeta\" src=\"../../../assets/icon/tarjeta.svg\" width=\"50%\" alt=\"tarjeta\">\n                </div>\n                <label class=\"opttarjeta\">Tarjeta</label>\n              </section>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n\n      <ion-card-content id=\"tarjetas\" style=\"background: #f7f7f7;\" (click)=\"showCards()\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"11\">\n              <p id=\"infoCard\"></p>\n            </ion-col>\n            <ion-col size=\"1\">\n              <ion-icon name=\"arrow-dropright\" style=\"font-size: 18px;\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n      \n      <ion-row class=\"ion-margin-top\">\n        <ion-col class=\"ion-margin-top\">\n          <ion-button class=\"btnapp\"\n                      (click)=\"doPay()\"\n                      color=\"app pipe-button ion-text-capitalize\"\n                      expand=\"block\"\n                      id=\"payment\">\n            Realizar pago\n          </ion-button>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/payment/payment-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/payment/payment-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: PaymentPageRoutingModule */

  /***/
  function srcAppPagesPaymentPaymentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function () {
      return PaymentPageRoutingModule;
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


    var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./payment.page */
    "./src/app/pages/payment/payment.page.ts");

    var routes = [{
      path: '',
      component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }];

    var PaymentPageRoutingModule = function PaymentPageRoutingModule() {
      _classCallCheck(this, PaymentPageRoutingModule);
    };

    PaymentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PaymentPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/payment/payment.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/payment/payment.module.ts ***!
    \*************************************************/

  /*! exports provided: PaymentPageModule */

  /***/
  function srcAppPagesPaymentPaymentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function () {
      return PaymentPageModule;
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


    var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./payment-routing.module */
    "./src/app/pages/payment/payment-routing.module.ts");
    /* harmony import */


    var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./payment.page */
    "./src/app/pages/payment/payment.page.ts");

    var PaymentPageModule = function PaymentPageModule() {
      _classCallCheck(this, PaymentPageModule);
    };

    PaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentPageRoutingModule"]],
      declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]]
    })], PaymentPageModule);
    /***/
  },

  /***/
  "./src/app/pages/payment/payment.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/payment/payment.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPaymentPaymentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app {\n  background: var(--ion-color-insideapp) !important;\n  color: #F8F8F8 !important;\n}\n\n.btnapp {\n  background: var(--ion-color-app) !important;\n  color: #f8f8f8;\n  height: 50px;\n}\n\nlabel.active {\n  background: var(--ion-color-app) !important;\n  color: #fff;\n  padding: 1.8%;\n  border-radius: 0.2em;\n}\n\n.divOpt {\n  border-radius: 2.5em;\n  background: #f7f7f7;\n  height: 55px;\n  width: 55px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNjZXNwZWRlcy9Eb2N1bWVudHMvYXBwcy9hcHBiYXNlX3YwLjEvc3JjL2FwcC9wYWdlcy9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaURBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksMkNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksMkNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWluc2lkZWFwcCkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI0Y4RjhGOCAhaW1wb3J0YW50O1xufVxuXG4uYnRuYXBwe1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHApICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmOGY4Zjg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG5sYWJlbC5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHApICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMS44JTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbn1cblxuLmRpdk9wdCB7XG4gICAgYm9yZGVyLXJhZGl1czogMi41ZW07XG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgd2lkdGg6IDU1cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59IiwiLmFwcCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1pbnNpZGVhcHApICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRjhGOEY4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5hcHAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYXBwKSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2Y4ZjhmODtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG5sYWJlbC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYXBwKSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMS44JTtcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XG59XG5cbi5kaXZPcHQge1xuICBib3JkZXItcmFkaXVzOiAyLjVlbTtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgaGVpZ2h0OiA1NXB4O1xuICB3aWR0aDogNTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/payment/payment.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/payment/payment.page.ts ***!
    \***********************************************/

  /*! exports provided: PaymentPage */

  /***/
  function srcAppPagesPaymentPaymentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentPage", function () {
      return PaymentPage;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _receipt_receipt_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../receipt/receipt.page */
    "./src/app/pages/receipt/receipt.page.ts");
    /* harmony import */


    var _services_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/crud.service */
    "./src/app/services/crud.service.ts");
    /* harmony import */


    var _services_ftpayment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/ftpayment.service */
    "./src/app/services/ftpayment.service.ts");
    /* harmony import */


    var _components_general_general_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/general/general.component */
    "./src/app/components/general/general.component.ts");
    /* harmony import */


    var _modals_modal_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../modals/modal/modal.page */
    "./src/app/modals/modal/modal.page.ts");
    /* harmony import */


    var _modals_modalcard_modalcard_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../modals/modalcard/modalcard.page */
    "./src/app/modals/modalcard/modalcard.page.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var impresa = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].impresa;
    var tipon = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].tiponegocio;

    var PaymentPage = /*#__PURE__*/function () {
      function PaymentPage(afAuth, crudService, navCtrl, fts, modalCtrl, afauth, general, loadingCtrl, datepipe) {
        _classCallCheck(this, PaymentPage);

        this.afAuth = afAuth;
        this.crudService = crudService;
        this.navCtrl = navCtrl;
        this.fts = fts;
        this.modalCtrl = modalCtrl;
        this.afauth = afauth;
        this.general = general;
        this.loadingCtrl = loadingCtrl;
        this.datepipe = datepipe;
        this.currency = 'CRC';
        this.currencyIcon = '$';
        this.tipoenvio = 'express';
        this.infopago = 0;
        this.today = new Date();
        this.days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        this.errsystem = {
          sel: '',
          tbl: 80,
          where: ''
        };
      }

      _createClass(PaymentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userid = this.afAuth.auth.currentUser.uid;
          this.nametoday = this.days[new Date().getDay()];
          this.getinfoHorario();
          this.getinfoFeriados();

          if (tipon == 2) {
            document.getElementById('served').classList.remove('ion-hide');
          } else {
            document.getElementById('served').classList.add('ion-hide');
          }
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          console.log('userid: ', this.userid);
          var data = {
            sel: '',
            tbl: 22,
            where: '"' + this.userid + '",' + impresa
          };
          this.crudService.crud(data).subscribe(function (res) {
            console.log('res');
            console.log(JSON.stringify(res));
            _this.fpaymentAmount = res[0][0][0];
            _this.paymentAmount = Number(res[0][0][1]);
            _this.idorden = res[0][0][2];
            _this.subtotal = res[0][0][3];
            _this.flete = res[0][0][4];
            _this.nproducto = res[0][0][5];
            _this.chsub = res[0][0][3];
            _this.chtot = res[0][0][0];
            _this.chfle = res[0][0][4];
            console.log(_this.fpaymentAmount);
            console.log(_this.paymentAmount);
            console.log(_this.flete);

            _this.showDefaultCard();

            if (_this.flete != '0.00') {
              _this.showDefaultDirection();
            } else {
              document.getElementById('direccion').innerHTML = 'No hay direcciones registradas';
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getinfoHorario",
        value: function getinfoHorario() {
          var _this2 = this;

          console.log('SUBSTRING_INDEX(' + this.nametoday + ', "/",1), SUBSTRING_INDEX(' + this.nametoday + ', "/",-1)');
          var horario = {
            sel: 'SUBSTRING_INDEX(' + this.nametoday + ', "/",1), SUBSTRING_INDEX(' + this.nametoday + ', "/",-1)',
            tbl: 77,
            where: 'idsucursal = ' + impresa
          };
          this.crudService.crud(horario).subscribe(function (rsult) {
            console.log('horario', rsult[0][0]);
            _this2.aperture = rsult[0][0][0];
            _this2.clousure = rsult[0][0][1];
          }, function (err) {
            console.log('err');
            console.log(err);
          });
        }
      }, {
        key: "getinfoFeriados",
        value: function getinfoFeriados() {
          var _this3 = this;

          var date = new Date();
          console.log('date', date);
          this.datetoday = this.datepipe.transform(date, 'yyyy/MM/dd');
          var feriado = {
            sel: '',
            tbl: 75,
            where: impresa + ',"' + this.datetoday + '"'
          };
          this.crudService.crud(feriado).subscribe(function (rsult) {
            console.log('feriado', rsult[0][0]);
            _this3.feriado = rsult[0][0];
          }, function (err) {
            console.log('err');
            console.log(err);
          });
        }
      }, {
        key: "doPay",
        value: function doPay() {
          var _this4 = this;

          // this.bodyXML.returnXML(this.userid, this.medioPago);
          var verifyemail = this.afAuth.auth.currentUser.emailVerified;
          console.log(verifyemail);

          if (this.infopago == 0 || this.infopago == 2) {
            this.medioPago = '02';
          } else {
            this.medioPago = '01';
          } // console.log('today:', this.nametoday);
          // console.log('aperture:', this.aperture);
          // console.log('clousure:', this.clousure);
          // const date = new Date();
          // this.currentTime = date.getHours() + ':' + date.getMinutes();
          // console.log('currentTime', this.currentTime);
          // if (!verifyemail) {
          //   this.general.mostrar_error('El correo no ha sido verificado, favor revise su correo para verificar el correo de este usuario');
          // } else {
          // if  ( this.currentTime >= this.aperture && this.currentTime <= this.clousure) {


          this.crudService.crud({
            sel: '',
            tbl: 8,
            where: '"' + this.afAuth.auth.currentUser.uid + '"'
          }).subscribe(function (session) {
            if (session[0][0][4] == '') {
              _this4.general.mostrar_alert('Debes de confirmar tu número de teléfono antes de continuar con el pago');

              _this4.navCtrl.navigateBack('/infouser');
            } else {
              _this4.afauth.user.subscribe(function (result) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          console.log(result.email);
                          _context.next = 3;
                          return this.loadingCtrl.create({
                            message: 'Por favor espere mientras realizamos su pago..'
                          });

                        case 3:
                          this.loadingG = _context.sent;
                          _context.next = 6;
                          return this.loadingG.present();

                        case 6:
                          console.log('resuser');
                          console.log('verified password');
                          console.log(result.email);
                          this.ftcard = this.cardTid;
                          console.log('ftcard');
                          console.log(this.ftcard);
                          console.log('validar direcciones y tarjetas');
                          console.log(this.cardTid, this.iddireccion, this.infopago);
                          /* incluir cargos si no hay */
                          // infopago =  0 express 1 efectivo 2 tarjeta

                          if (this.infopago == 0 || this.infopago == 2) {
                            this.idenvio = this.iddireccion;
                            this.total = Number(this.fpaymentAmount.replace(/\,/g, ''));

                            if (this.cardTid == undefined || this.iddireccion == undefined) {
                              this.general.mostrar_error('Es necesario una direccion y una tarjeta para continuar');
                              this.loadingG.dismiss();
                            } else {
                              this.chargeFT(result.email);
                            }
                          } else {
                            this.idenvio = 0;
                            this.idcard = 0;
                            this.total = Number(String(this.subtotal).replace(/\,/g, ''));
                            this.makePayment('', 'Recoger', this.total);
                          }

                          console.log('fin');

                        case 16:
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
          });
          console.log('SI'); // } else {
          //     console.log('NO');
          //     this.general.mostrar_error('Lo sentimos, no podemos procesar su solicitud porque estamos fuera del horario laboral');
          // }
          // }

          return false;
        }
      }, {
        key: "chargeFT",
        value: function chargeFT(email) {
          var _this5 = this;

          this.crudService.crud({
            sel: '',
            tbl: 96,
            where: impresa
          }).subscribe(function (sucft) {
            _this5.fts.appIncludeCharge(sucft[0][0][0], sucft[0][0][1], email, 'Comercio: Los Pira', _this5.currency, _this5.paymentAmount).subscribe(function (chargeIncluded) {
              console.log('chargeIncluded');
              console.log(chargeIncluded); // apply charge

              if (chargeIncluded != null) {
                _this5.ftcharge = chargeIncluded.chargeTokenId;

                _this5.fts.appApplyCharge(sucft[0][0][0], sucft[0][0][1], email, _this5.ftcharge, _this5.ftcard).subscribe(function (pago) {
                  console.log('pago');
                  console.log(pago);

                  if (pago != null) {
                    if (pago.apiStatus == 'Successful') {
                      console.log('Pago realizado exitosamente');
                      /* registrar pago en base de datos y redireccionar a la vista de la factura */

                      var idpay = pago.systemTrace;
                      var estado = pago.isApproved;
                      console.log(idpay, estado); // infopago =  0 express 1 efectivo 2 tarjeta

                      if (_this5.infopago == 0 || _this5.infopago == 2) {
                        _this5.idenvio = _this5.iddireccion;

                        _this5.makePayment(idpay, estado, _this5.total);
                      } else {
                        _this5.idenvio = 0;

                        _this5.makePayment('', 'Recoger', _this5.total);
                      }
                    } else if (pago.apiStatus == 'Declined') {
                      _this5.fts.appDeleteCharge(sucft[0][0][0], sucft[0][0][1], email, _this5.ftcharge).subscribe(function (chargeDeleted) {
                        console.log('chargeDeleted');
                        console.log(chargeDeleted);
                      }, function (errDeleted) {
                        console.log(errDeleted);
                      });

                      _this5.loadingG.dismiss();

                      _this5.general.mostrar_error('Tuvimos un error al procesar su pago. Intente con otro método de pago');
                    } else {
                      console.log('error con el pago');
                      _this5.errsystem.where = '0,"' + pago.apiStatus + '","' + email + '",' + JSON.stringify(pago);

                      _this5.crudService.crud(_this5.errsystem).subscribe(function (res) {
                        _this5.loadingG.dismiss();

                        console.log(res);
                      }, function (err) {
                        _this5.loadingG.dismiss();

                        console.log(err);
                      });

                      _this5.general.mostrar_error('Tuvimos un error al procesar su pago. Intentelo de nuevo');
                    }
                  } else {
                    _this5.loadingG.dismiss();

                    _this5.general.mostrar_error('Tuvimos un error al procesar su pago. Intente con otro método de pago');
                  }
                }, function (err) {
                  console.log('error pago');
                  console.log(err);
                });
              } else {
                _this5.loadingG.dismiss();

                _this5.general.mostrar_error('Tuvimos un inconveniente con su pago, favor intentelo de nuevo');
              }
            }, function (err) {
              console.log(err);
            });
          }, function (err) {
            console.log('err');
            console.log(err);
          });
        }
      }, {
        key: "makePayment",
        value: function makePayment(idpay, estado, total) {
          var _this6 = this;

          console.log('makePayment');
          console.log(this.ftcharge, this.idorden);
          this.ftcharge = this.ftcharge == undefined ? '' : this.ftcharge;
          var makepayment = {
            sel: '',
            tbl: 18,
            where: '1,0,' + this.idorden + ',"' + idpay + '","' + this.userid + '",1,"' + estado + '",' + total + ',' + this.idenvio + ',' + this.idcard + ',' + this.infopago + ',"' + this.ftcharge + '"'
          };
          console.log('1,0,' + this.idorden + ',"' + idpay + '","' + this.userid + '",1,"' + estado + '",' + total + ',' + this.idenvio + ',' + this.idcard + ',' + this.infopago + ',"' + this.ftcharge + '"');
          this.crudService.crud(makepayment).subscribe(function (resultpayment) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modalP, _ref, data;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log('result payment');
                      console.log(JSON.stringify(resultpayment));
                      console.log(resultpayment[0][0][0]);
                      console.log('mostrar orden idpay');
                      console.log(idpay);
                      this.loadingG.dismiss();

                      if (idpay == '') {
                        idpay = resultpayment[0][0][0];
                      }

                      _context2.next = 9;
                      return this.modalCtrl.create({
                        component: _receipt_receipt_page__WEBPACK_IMPORTED_MODULE_5__["ReceiptPage"],
                        componentProps: {
                          idpago: idpay,
                          tipo: 1
                        }
                      });

                    case 9:
                      modalP = _context2.sent;
                      _context2.next = 12;
                      return modalP.present();

                    case 12:
                      _context2.next = 14;
                      return modalP.onWillDismiss();

                    case 14:
                      _ref = _context2.sent;
                      data = _ref.data;
                      console.log(data);

                      if (data.tipo == 1) {
                        this.navCtrl.navigateBack('/menu');
                      } else {
                        this.navCtrl.navigateBack('/orderview');
                      }

                    case 18:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }, function (err) {
            _this6.loadingG.dismiss();

            console.log('err');
            console.log(err);
          });
        }
      }, {
        key: "changeinfopago",
        value: function changeinfopago(event) {
          // infopago =  0 express 1 efectivo 2 tarjeta
          var vtype = event.target.id;
          console.log('type');
          console.log(vtype);

          if (vtype == 'efectivo') {
            this.infopago = 1;
            document.querySelector('.opttarjeta').classList.remove('active');
            document.querySelector('.optefectivo').classList.add('active');
            var tarjetas = document.getElementById('tarjetas');
            tarjetas.style.display = 'none';
          } else {
            this.infopago = 2;
            document.querySelector('.opttarjeta').classList.add('active');
            document.querySelector('.optefectivo').classList.remove('active');

            var _tarjetas = document.getElementById('tarjetas');

            _tarjetas.style.display = 'block';
          }
        }
      }, {
        key: "showDefaultDirection",
        value: function showDefaultDirection() {
          var _this7 = this;

          console.log('showDefaultDirection');
          console.log(this.userid);
          var data = {
            sel: '',
            tbl: 53,
            where: '"' + this.userid + '"'
          };
          this.crudService.crud(data).subscribe(function (res) {
            console.log('default direccion');
            console.log(res);

            if (res[0].length > 0) {
              console.log('default res');
              console.log(res);
              console.log(res[0][0][0]);
              _this7.iddireccion = res[0][0][0];
              document.getElementById('direccion').innerHTML = res[0][0][1];
              document.getElementById('otrassenas').innerHTML = res[0][0][2]; // infopago =  0 express 1 efectivo 2 tarjeta

              _this7.infopago = 0;
            } else {
              document.getElementById('direccion').innerHTML = 'No hay direcciones registradas';
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "showDefaultCard",
        value: function showDefaultCard() {
          var _this8 = this;

          console.log(this.userid);
          var data = {
            sel: '',
            tbl: 52,
            where: '"' + this.userid + '"'
          };
          this.crudService.crud(data).subscribe(function (res) {
            console.log('default tarjeta');
            console.log(res);

            if (res[0].length > 0) {
              _this8.cardTid = res[0][0][1];
              _this8.idcard = res[0][0][5];
              console.log(_this8.cardTid);
              document.getElementById('infoCard').innerHTML = res[0][0][2] + ' que termina en ' + res[0][0][0];
              _this8.infopago = 0;
            } else {
              document.getElementById('infoCard').innerHTML = 'No hay tarjetas registradas';
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "presentModal",
        value: function presentModal(vid) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalCtrl.create({
                      component: _receipt_receipt_page__WEBPACK_IMPORTED_MODULE_5__["ReceiptPage"],
                      componentProps: {
                        idpago: vid
                      }
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "goback",
        value: function goback() {
          this.navCtrl.navigateBack('/user');
        }
      }, {
        key: "showDirections",
        value: function showDirections() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this9 = this;

            var modal, _ref2, data, datadir;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalCtrl.create({
                      component: _modals_modal_modal_page__WEBPACK_IMPORTED_MODULE_9__["ModalPage"],
                      cssClass: 'modal-modal'
                    });

                  case 2:
                    modal = _context4.sent;
                    _context4.next = 5;
                    return modal.present();

                  case 5:
                    _context4.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    _ref2 = _context4.sent;
                    data = _ref2.data;
                    this.iddireccion = data.viddirection;
                    datadir = {
                      sel: '',
                      tbl: 17,
                      where: this.iddireccion
                    };
                    console.log(datadir);
                    this.crudService.crud(datadir).subscribe(function (res) {
                      console.log(res);
                      document.getElementById('direccion').innerHTML = res[0][0][1];
                      document.getElementById('otrassenas').innerHTML = res[0][0][2];
                      var dataTotExpress = {
                        sel: '',
                        tbl: 50,
                        where: '"' + _this9.userid + '",' + _this9.iddireccion + ',' + impresa
                      };

                      _this9.crudService.crud(dataTotExpress).subscribe(function (exp) {
                        console.log(exp);
                        _this9.fpaymentAmount = exp[0][0][0];
                        _this9.paymentAmount = Number(exp[0][0][1]);
                        _this9.subtotal = exp[0][0][3];
                        _this9.flete = exp[0][0][4];
                      }, function (errexp) {
                        console.log(errexp);
                      });
                    }, function (err) {
                      console.log(err);
                    });

                  case 13:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "selectOptdelivery",
        value: function selectOptdelivery(event) {
          var vtype = event.target.id;
          this.tipoenvio = vtype;
          console.log('type');
          console.log(vtype);

          if (vtype == 'express') {
            document.querySelector('.optrecoge').classList.remove('active');
            document.querySelector('.optservido').classList.remove('active');
            document.querySelector('.optexpress').classList.add('active');
            this.fpaymentAmount = this.chtot;
            console.log('total');
            console.log(this.fpaymentAmount);
            console.log(Number(this.fpaymentAmount.replace(/\,/g, '')));
            this.flete = this.chfle;
            this.subtotal = this.chsub;
            var direcciones = document.getElementById('direcciones');
            var tarjetas = document.getElementById('tarjetas');
            var infopago = document.getElementById('infopago');
            direcciones.style.display = 'block';
            tarjetas.style.display = 'block';
            infopago.style.display = 'none';
            this.infopago = 0;
          } else if (vtype == 'servido') {
            document.querySelector('.optservido').classList.add('active');
            document.querySelector('.optrecoge').classList.remove('active');
            document.querySelector('.optexpress').classList.remove('active');
            document.querySelector('.opttarjeta').classList.remove('active');
            document.querySelector('.optefectivo').classList.add('active');
            this.fpaymentAmount = this.chsub;
            this.flete = '0.00';
            this.subtotal = this.chsub;

            var _direcciones = document.getElementById('direcciones');

            var _tarjetas2 = document.getElementById('tarjetas');

            var _infopago = document.getElementById('infopago');

            _direcciones.style.display = 'none';
            _tarjetas2.style.display = 'none';
            _infopago.style.display = 'block';
            this.infopago = 1;
          } else {
            document.querySelector('.optrecoge').classList.add('active');
            document.querySelector('.optexpress').classList.remove('active');
            document.querySelector('.opttarjeta').classList.remove('active');
            document.querySelector('.optefectivo').classList.add('active');
            this.fpaymentAmount = this.chsub;
            console.log('subtotal');
            console.log(String(this.subtotal).replace(/\,/g, ''));
            this.flete = '0.00';
            this.subtotal = this.chsub;

            var _direcciones2 = document.getElementById('direcciones');

            var _tarjetas3 = document.getElementById('tarjetas');

            var _infopago2 = document.getElementById('infopago');

            _direcciones2.style.display = 'none';
            _tarjetas3.style.display = 'none';
            _infopago2.style.display = 'block';
            this.infopago = 1;
          }
        }
      }, {
        key: "haveDirections",
        value: function haveDirections(vaccion) {
          var express = {
            sel: '',
            tbl: 21,
            where: vaccion + ',"' + this.userid + '"'
          };
          this.crudService.crud(express).subscribe(function (res) {
            console.log('haveDirections');
            console.log(res);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "showCards",
        value: function showCards() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var modal, _ref3, data, datadir;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalCtrl.create({
                      component: _modals_modalcard_modalcard_page__WEBPACK_IMPORTED_MODULE_10__["ModalcardPage"],
                      cssClass: 'modal-modal'
                    });

                  case 2:
                    modal = _context5.sent;
                    _context5.next = 5;
                    return modal.present();

                  case 5:
                    _context5.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    _ref3 = _context5.sent;
                    data = _ref3.data;
                    console.log(data);

                    if (data != undefined) {
                      this.idcard = data.idcard;
                      this.cardTid = data.cardTokenId;
                      console.log('this.idcard, this.cardTid');
                      console.log(this.idcard, this.cardTid);
                      datadir = {
                        sel: '',
                        tbl: 54,
                        where: this.idcard
                      };
                      this.crudService.crud(datadir).subscribe(function (res) {
                        console.log(res);
                        document.getElementById('infoCard').innerHTML = res[0][0][2] + ' que termina en ' + res[0][0][1];
                      }, function (err) {
                        console.log(err);
                      });
                    }

                  case 11:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return PaymentPage;
    }();

    PaymentPage.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }, {
        type: _services_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _services_ftpayment_service__WEBPACK_IMPORTED_MODULE_7__["FtpaymentService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }, {
        type: _components_general_general_component__WEBPACK_IMPORTED_MODULE_8__["GeneralComponent"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Map', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], PaymentPage.prototype, "mapElement", void 0);
    PaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-payment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./payment.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./payment.page.scss */
      "./src/app/pages/payment/payment.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _services_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_ftpayment_service__WEBPACK_IMPORTED_MODULE_7__["FtpaymentService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _components_general_general_component__WEBPACK_IMPORTED_MODULE_8__["GeneralComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]])], PaymentPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-payment-payment-module-es5.js.map