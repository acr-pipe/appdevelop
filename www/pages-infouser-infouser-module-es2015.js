(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-infouser-infouser-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/infouser/infouser.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/infouser/infouser.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"gradient-header\" color=\"app\">\n      <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"user\"></ion-back-button>\n      </ion-buttons>\n      <ion-title slot=\"end\">Mis Datos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>\n      <h2>Datos de la cuenta</h2>\n    </ion-row>\n    <ion-list>\n    <ion-item>\n      <ion-col>\n        <ion-label size=\"3\" class=\"ion-text-right\">Nombre </ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-input [(ngModel)]=\"nusr\" style=\"color: #000000; font-weight: 300;\" value=\"{{ nameusr }}\"></ion-input>\n      </ion-col>\n    </ion-item>\n    <ion-item>\n      <ion-col>\n        <ion-label size=\"3\" class=\"ion-text-right\">Correo </ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-input [(ngModel)]=\"musr\" style=\"color: #000000; font-weight: 300;\" readonly value=\"{{ mailusr }}\"></ion-input>\n      </ion-col>\n    </ion-item>\n    <ion-item>\n      <ion-col>\n        <ion-label size=\"3\" class=\"ion-text-right\">Teléfono </ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-input [(ngModel)]=\"pusr\" style=\"color: #000000; font-weight: 300;\" value=\"{{ phoneusr }}\"></ion-input>\n      </ion-col>\n    </ion-item>\n    <ion-item>\n      <ion-col>\n        <ion-label size=\"3\" class=\"ion-text-right\">Cédula </ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-input [(ngModel)]=\"cusr\" style=\"color: #000000; font-weight: 300;\" value=\"{{ cedusr }}\"></ion-input>\n      </ion-col>\n    </ion-item>\n  </ion-list>\n  <ion-row>\n    <ion-col>\n      <ion-button color=\"btnapp ion-text-capitalize\" class=\"btnapp\" style=\"height: 50px;\"\n                  expand=\"block\" (click)=\"actInfo()\">\n        Actualizar información\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"ion-hide\" id=\"verified\">\n    <ion-col class=\"ion-padding-start\">\n      <p (click)=\"sendEmailVerification()\" style=\"color: blue;\">Reenviar correo de verificación?</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/infouser/infouser-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/infouser/infouser-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: InfouserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfouserPageRoutingModule", function() { return InfouserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _infouser_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infouser.page */ "./src/app/pages/infouser/infouser.page.ts");




const routes = [
    {
        path: '',
        component: _infouser_page__WEBPACK_IMPORTED_MODULE_3__["InfouserPage"]
    }
];
let InfouserPageRoutingModule = class InfouserPageRoutingModule {
};
InfouserPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InfouserPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/infouser/infouser.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/infouser/infouser.module.ts ***!
  \***************************************************/
/*! exports provided: InfouserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfouserPageModule", function() { return InfouserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _infouser_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./infouser-routing.module */ "./src/app/pages/infouser/infouser-routing.module.ts");
/* harmony import */ var _infouser_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./infouser.page */ "./src/app/pages/infouser/infouser.page.ts");







let InfouserPageModule = class InfouserPageModule {
};
InfouserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _infouser_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfouserPageRoutingModule"]
        ],
        declarations: [_infouser_page__WEBPACK_IMPORTED_MODULE_6__["InfouserPage"]]
    })
], InfouserPageModule);



/***/ }),

/***/ "./src/app/pages/infouser/infouser.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/infouser/infouser.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app {\n  background: var(--ion-color-insideapp) !important;\n  color: #F8F8F8 !important;\n}\n\n.btnapp {\n  background: var(--ion-color-btnapp) !important;\n  color: #f8f8f8;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNjZXNwZWRlcy9Eb2N1bWVudHMvYXBwcy9hcHBiYXNlX3YwLjEvc3JjL2FwcC9wYWdlcy9pbmZvdXNlci9pbmZvdXNlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luZm91c2VyL2luZm91c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlEQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLDhDQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZm91c2VyL2luZm91c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1pbnNpZGVhcHApICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNGOEY4RjggIWltcG9ydGFudDtcbn1cblxuLmJ0bmFwcHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYnRuYXBwKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZjhmOGY4O1xuICAgIGhlaWdodDogNTBweDtcbn0iLCIuYXBwIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWluc2lkZWFwcCkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGOEY4RjggIWltcG9ydGFudDtcbn1cblxuLmJ0bmFwcCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG5hcHApICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZjhmOGY4O1xuICBoZWlnaHQ6IDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/infouser/infouser.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/infouser/infouser.page.ts ***!
  \*************************************************/
/*! exports provided: InfouserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfouserPage", function() { return InfouserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _modals_alert_alert_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modals/alert/alert.page */ "./src/app/modals/alert/alert.page.ts");
/* harmony import */ var _components_general_general_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/general/general.component */ "./src/app/components/general/general.component.ts");








const impresa = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].impresa;
let InfouserPage = class InfouserPage {
    constructor(afAuth, crudService, toastCtrl, modalCtrl, general, loadingCtrl) {
        this.afAuth = afAuth;
        this.crudService = crudService;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.general = general;
        this.loadingCtrl = loadingCtrl;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.userid = this.afAuth.auth.currentUser.uid;
            const datos = { sel: '', tbl: 8, where: '"' + this.userid + '"' };
            const loading = yield this.loadingCtrl.create({
                message: 'Cargando datos...'
            });
            yield loading.present();
            this.crudService.crud(datos).subscribe(res => {
                console.log(res);
                this.nameusr = res[0][0][1];
                this.mailusr = res[0][0][3];
                this.phoneusr = res[0][0][4];
                this.cedusr = res[0][0][5];
                this.verified = this.afAuth.auth.currentUser.emailVerified;
                loading.dismiss();
                if (!this.verified) {
                    document.getElementById('verified').classList.remove('ion-hide');
                }
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    actInfo() {
        console.log(this.nusr, this.pusr, this.userid);
        const datos = { sel: '', tbl: 6, where: '2,0,"' + this.nusr + '","","",' +
                impresa + ',"' + this.pusr + '","' + this.userid + '",' + this.cusr + ',0' };
        this.crudService.crud(datos).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(res[0].ERROR);
            if (res[0].ERROR != undefined) {
                this.general.mostrar_error('El teléfono y la cédula deben contener solo números');
            }
            else {
                const toast = yield this.toastCtrl.create({
                    message: 'Información guardada correctamente',
                    duration: 2000
                });
                toast.present();
            }
        }), err => {
            console.log(err);
        });
    }
    sendEmailVerification() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modals_alert_alert_page__WEBPACK_IMPORTED_MODULE_6__["AlertPage"],
                componentProps: {
                    error: 'Enviar correo'
                },
                cssClass: 'alert-modal'
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            console.log(data);
            if (data != undefined) {
                this.afAuth.auth.currentUser.sendEmailVerification();
            }
        });
    }
};
InfouserPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _components_general_general_component__WEBPACK_IMPORTED_MODULE_7__["GeneralComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
InfouserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-infouser',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./infouser.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/infouser/infouser.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./infouser.page.scss */ "./src/app/pages/infouser/infouser.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _components_general_general_component__WEBPACK_IMPORTED_MODULE_7__["GeneralComponent"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], InfouserPage);



/***/ })

}]);
//# sourceMappingURL=pages-infouser-infouser-module-es2015.js.map