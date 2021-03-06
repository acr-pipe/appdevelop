(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-orderview-orderview-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderview/orderview.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderview/orderview.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"gradient-header\" color=\"app\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button><img src=\"../../../assets/icon/menuicon.svg\" style=\"width: 80%; margin: 0 auto\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title [routerLink]=\"['/menu']\">\n      Appexpress\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-card *ngFor=\"let item of listapedidos\">\n      <ion-item>\n        <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n        <p>{{ item[0] }} Orden <label>{{ item[1] }}</label></p>\n        <ion-button fill=\"outline\" slot=\"end\" (click)=\"viewreceipt( item[6] )\">Recibo</ion-button>\n      </ion-item>\n      <ion-item>\n        <ion-col>\n          <p>{{ item[2] }}</p>\n        </ion-col>\n        <ion-col>\n          <p>{{ item[3] }}</p>\n        </ion-col>\n      </ion-item>\n      <ion-card-content>\n        <ion-row id=\"detallepedido{{ item[0] }}\"></ion-row>\n      </ion-card-content>\n      <ion-card-content>\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n            <p style=\"font-size: 1.1;\">Envío:</p>\n          </ion-col>\n          <ion-col>\n            <p style=\"font-size: 1.1em;\">CRC <label>{{ item[4] }}</label></p>\n          </ion-col>\n          <ion-col class=\"ion-text-center\">\n            <p style=\"font-size: 1.1;\">Total:</p>\n          </ion-col>\n          <ion-col>\n            <p style=\"font-size: 1.1em;\">CRC <label>{{ item[5] }}</label></p>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n      <ion-card-content *ngIf=\"item[8] != 6\">\n        <ion-button class=\"btnapp\"\n          (click)=\"cancel_orden( item[7], item[0], item[8] )\"\n          color=\"app pipe-button ion-text-capitalize\"\n          expand=\"block\"\n          id=\"payment\">\n          Cancelar orden\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/orderview/orderview-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/orderview/orderview-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderviewPageRoutingModule", function() { return OrderviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _orderview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orderview.page */ "./src/app/pages/orderview/orderview.page.ts");




const routes = [
    {
        path: '',
        component: _orderview_page__WEBPACK_IMPORTED_MODULE_3__["OrderviewPage"]
    }
];
let OrderviewPageRoutingModule = class OrderviewPageRoutingModule {
};
OrderviewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderviewPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/orderview/orderview.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/orderview/orderview.module.ts ***!
  \*****************************************************/
/*! exports provided: OrderviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderviewPageModule", function() { return OrderviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _orderview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderview-routing.module */ "./src/app/pages/orderview/orderview-routing.module.ts");
/* harmony import */ var _orderview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orderview.page */ "./src/app/pages/orderview/orderview.page.ts");







let OrderviewPageModule = class OrderviewPageModule {
};
OrderviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _orderview_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderviewPageRoutingModule"]
        ],
        declarations: [_orderview_page__WEBPACK_IMPORTED_MODULE_6__["OrderviewPage"]]
    })
], OrderviewPageModule);



/***/ }),

/***/ "./src/app/pages/orderview/orderview.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/orderview/orderview.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app {\n  background: var(--ion-color-insideapp) !important;\n  color: #F8F8F8 !important;\n}\n\n.btnapp {\n  background: var(--ion-color-btnapp) !important;\n  color: #f8f8f8;\n}\n\nion-avatar ion-img, ion-avatar img {\n  width: 62px !important;\n  height: 62px !important;\n  border-radius: 40% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNjZXNwZWRlcy9Eb2N1bWVudHMvYXBwcy9hcHBiYXNlX3YwLjEvc3JjL2FwcC9wYWdlcy9vcmRlcnZpZXcvb3JkZXJ2aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3JkZXJ2aWV3L29yZGVydmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpREFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSw4Q0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXJ2aWV3L29yZGVydmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItaW5zaWRlYXBwKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjRjhGOEY4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5hcHB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJ0bmFwcCkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2Y4ZjhmODtcbn1cblxuaW9uLWF2YXRhciBpb24taW1nLCBpb24tYXZhdGFyIGltZ3tcbiAgICB3aWR0aDogNjJweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNjJweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwJSAhaW1wb3J0YW50O1xufSIsIi5hcHAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItaW5zaWRlYXBwKSAhaW1wb3J0YW50O1xuICBjb2xvcjogI0Y4RjhGOCAhaW1wb3J0YW50O1xufVxuXG4uYnRuYXBwIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJ0bmFwcCkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmOGY4Zjg7XG59XG5cbmlvbi1hdmF0YXIgaW9uLWltZywgaW9uLWF2YXRhciBpbWcge1xuICB3aWR0aDogNjJweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDYycHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNDAlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/orderview/orderview.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/orderview/orderview.page.ts ***!
  \***************************************************/
/*! exports provided: OrderviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderviewPage", function() { return OrderviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _receipt_receipt_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../receipt/receipt.page */ "./src/app/pages/receipt/receipt.page.ts");
/* harmony import */ var _services_ftpayment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ftpayment.service */ "./src/app/services/ftpayment.service.ts");
/* harmony import */ var _modals_alert_alert_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modals/alert/alert.page */ "./src/app/modals/alert/alert.page.ts");
/* harmony import */ var _components_general_general_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/general/general.component */ "./src/app/components/general/general.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");










const impresa = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].impresa;
let OrderviewPage = class OrderviewPage {
    constructor(crudService, afAuth, navCtrl, toastCtrl, modalCtrl, ftp, loadingCtrl, general) {
        this.crudService = crudService;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.ftp = ftp;
        this.loadingCtrl = loadingCtrl;
        this.general = general;
    }
    ngOnInit() {
        this.userid = this.afAuth.auth.currentUser.uid;
        this.email = this.afAuth.auth.currentUser.email;
    }
    ionViewWillEnter() {
        this.cargarPedidos();
        setTimeout(() => {
            this.loadingG.dismiss();
        }, 500);
    }
    cargarPedidos() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadingG = yield this.loadingCtrl.create({
                message: 'Por favor espere un momento..'
            });
            yield this.loadingG.present();
            console.log(this.email);
            const pedido = { sel: '', tbl: 72, where: '"' + this.userid + '",' + _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].impresa };
            this.crudService.crud(pedido).subscribe(res => {
                console.log(res);
                this.listapedidos = res[0];
                this.listapedidos.forEach((detpedido) => {
                    console.log('detpedido');
                    console.log(detpedido);
                    console.log(detpedido[0]);
                    const detalle = { sel: '', tbl: 73, where: detpedido[0] };
                    this.crudService.crud(detalle).subscribe(det => {
                        console.log('det');
                        console.log(det);
                        det[0].forEach((item) => {
                            console.log('items');
                            console.log(item);
                            document.getElementById('detallepedido' + item[0]).insertAdjacentHTML('afterbegin', '<ion-row style="width: 100%">' +
                                '<ion-col>' +
                                '<ion-chip>' +
                                '<ion-label>' + item[1] + '</ion-label>' +
                                '</ion-chip>' +
                                '</ion-col>' +
                                '<ion-col style="padding-top: 3%">' +
                                '<p style="font-size: 1.2em;">' + item[2] + '</p>' +
                                '</ion-col>' +
                                '<ion-col style="padding-top: 3%">' +
                                '<p style="font-size: 1.2em; ">CRC ' + item[3] + '</p>' +
                                '</ion-col>' +
                                '</ion-row>');
                            console.log('for each');
                        });
                    }, errdet => {
                        console.log('errdet');
                        console.log(errdet);
                        this.loadingG.dismiss();
                    });
                });
                console.log('end for each');
                this.loadingG.dismiss();
                console.log('end loading');
            }, err => {
                console.log('err');
                console.log(err);
                this.loadingG.dismiss();
            });
        });
    }
    viewreceipt(vid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(vid);
            const modalP = yield this.modalCtrl.create({
                component: _receipt_receipt_page__WEBPACK_IMPORTED_MODULE_5__["ReceiptPage"],
                componentProps: {
                    idpago: vid,
                    tipo: 1
                }
            });
            yield modalP.present();
            const { data } = yield modalP.onWillDismiss();
            console.log('data viewreceipt');
            console.log(data);
            if (data.tipo == 1) {
                this.navCtrl.navigateBack('/orderview');
            }
        });
    }
    buscarOrden() {
        console.log('buscarOrden');
        console.log(this.userid);
        if (this.vdesde == undefined) {
            this.vdesde = '0000-00-00';
        }
        if (this.vhasta == undefined) {
            this.vhasta = '0000-00-00';
        }
        const data = { sel: '', tbl: 20, where: '1,"' + this.userid + '","' + this.vdesde + '","' + this.vhasta + '",0' };
        this.crudService.crud(data).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('res');
            console.log(res);
            if (res[0].length > 0) {
                this.listaOrdenes = res[0];
                console.log(res[0]);
            }
            else {
                const toast = yield this.toastCtrl.create({
                    message: 'No se encontraron ordenes',
                    duration: 2000
                });
                toast.present();
            }
        }), err => {
            console.log(err);
        });
    }
    cancel_orden(idpay, idorden, idestado) {
        console.log(idpay, idorden);
        const valiDate = { sel: '', tbl: 79, where: idorden };
        this.crudService.crud(valiDate).subscribe((vres) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('vres', vres);
            if (vres[0].length > 0) {
                console.log('cancelar');
                const modalP = yield this.modalCtrl.create({
                    component: _modals_alert_alert_page__WEBPACK_IMPORTED_MODULE_7__["AlertPage"],
                    componentProps: {
                        error: 'Desea cancelar su orden?'
                    },
                    cssClass: 'alert-modal'
                });
                yield modalP.present();
                const { data } = yield modalP.onWillDismiss();
                console.log(data);
                if (data != undefined) {
                    console.log('return charge');
                    const loading = yield this.loadingCtrl.create({
                        message: 'Por favor espere un momento..'
                    });
                    yield loading.present();
                    if (idestado != 4) {
                        this.crudService.crud({ sel: '', tbl: 96, where: impresa }).subscribe(sucft => {
                            this.ftp.appReturnCharge(sucft[0][0][0], sucft[0][0][1], this.email, idpay).subscribe((res) => {
                                console.log('res return charge');
                                console.log(res);
                                // console.log(res[0][0]);
                                if (res != null) {
                                    if (res.apiStatus == 'Successful') {
                                        const estado = { sel: '', tbl: 30, where: idorden + ',6' };
                                        this.crudService.crud(estado).subscribe(resEstado => {
                                            console.log(resEstado);
                                            this.cargarPedidos();
                                            loading.dismiss();
                                        }, errEstado => {
                                            console.log('err estado');
                                            console.log(errEstado);
                                            loading.dismiss();
                                        });
                                    }
                                    else if (res.apiStatus == 'Invalid Charge') {
                                        this.general.mostrar_error('Esta orden no puede ser cancelada');
                                        loading.dismiss();
                                    }
                                    else {
                                        this.general.mostrar_error('Tuvimos un inconveniente, favor intentelo de nuevo');
                                        loading.dismiss();
                                    }
                                }
                                else {
                                    this.general.mostrar_error('Tuvimos un inconveniente, favor intentelo de nuevo');
                                    loading.dismiss();
                                }
                            }, error => {
                                console.log('error return charge');
                                console.log(error);
                                loading.dismiss();
                            });
                        }, err => {
                            console.log('err');
                            console.log(err);
                        });
                    }
                    else {
                        this.general.mostrar_error('Esta orden no puede ser cancelada por que ya fue enviada');
                        loading.dismiss();
                    }
                }
                else {
                    this.general.mostrar_error('Tuvimos un inconveniente, favor intentelo de nuevo');
                }
            }
            else {
                console.log('no se puede cancelar');
                this.general.mostrar_error('Esta orden no puede ser cancelada');
            }
        }), verr => {
            console.log('verr', verr);
        });
    }
    mostrar_orden(idpay) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('mostrar orden idpay');
            console.log(idpay);
            // this.presentModal(idpay);
            const modal = yield this.modalCtrl.create({
                component: _receipt_receipt_page__WEBPACK_IMPORTED_MODULE_5__["ReceiptPage"],
                componentProps: {
                    idpago: idpay,
                    tipo: 2
                }
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            console.log(data);
            if (data.tipo == 1) {
                this.navCtrl.navigateBack('/menu');
            }
            else {
                this.navCtrl.navigateBack('/orderview');
            }
        });
    }
    presentModal(vidpago) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _receipt_receipt_page__WEBPACK_IMPORTED_MODULE_5__["ReceiptPage"],
                componentProps: {
                    idpago: vidpago
                }
            });
            return yield modal.present();
        });
    }
};
OrderviewPage.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_ftpayment_service__WEBPACK_IMPORTED_MODULE_6__["FtpaymentService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _components_general_general_component__WEBPACK_IMPORTED_MODULE_8__["GeneralComponent"] }
];
OrderviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orderview.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderview/orderview.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orderview.page.scss */ "./src/app/pages/orderview/orderview.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _services_ftpayment_service__WEBPACK_IMPORTED_MODULE_6__["FtpaymentService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _components_general_general_component__WEBPACK_IMPORTED_MODULE_8__["GeneralComponent"]])
], OrderviewPage);



/***/ })

}]);
//# sourceMappingURL=pages-orderview-orderview-module-es2015.js.map