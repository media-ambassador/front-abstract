"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var Subscription_1 = require("rxjs/Subscription");
var auth_1 = require("../../../services/auth");
var cart_1 = require("../../../services/cart");
var utils_1 = require("../../../services/utils");
var gtm_service_1 = require("../../../services/gtm/gtm.service");
var api_user_1 = require("../../../modules/api-module/api-user");
var form_model_1 = require("../../../shared/form.model");
var MaBaseMakeOrderFormComponent = /** @class */ (function () {
    function MaBaseMakeOrderFormComponent(apiUserService, auth, cartService, utilsService, gtmService, router) {
        this.apiUserService = apiUserService;
        this.auth = auth;
        this.cartService = cartService;
        this.utilsService = utilsService;
        this.gtmService = gtmService;
        this.router = router;
        this.isGuest = true;
        this.makeOrderProcessing = false;
        this.addressData = null;
        this.shipmentChecked = false;
        this.invoiceChecked = false;
        this.registerPossibility = false;
        this.isUserExit = false;
        this.baseClass = true;
        this.subscription = new Subscription_1.Subscription();
    }
    MaBaseMakeOrderFormComponent.prototype.ngOnInit = function () {
        this.isGuest = !this.auth.isAuthorized();
        this.userData = this.auth.getUserData();
        this.initOrderData();
        this.cartData = this.cartService.getCartData();
    };
    MaBaseMakeOrderFormComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MaBaseMakeOrderFormComponent.prototype.initOrderData = function () {
        var _this = this;
        this.makeOrderForm = this.defaultMakeOrderForm;
        if (this.isGuest) {
            this.makeOrderForm.addControl('addresses', this.defaultAddressesForm);
        }
        else {
            this.subscription.add(this.apiUserService.getAddressList().subscribe(function (response) {
                if (!!response.data && !!response.data.billing) {
                    _this.makeOrderForm.addControl('id', new forms_1.FormControl(_this.cartService.getCartId()));
                    _this.makeOrderForm.addControl('shipping_id', new forms_1.FormControl(''));
                    _this.makeOrderForm.addControl('invoice_id', new forms_1.FormControl(''));
                    _this.addressData = response;
                }
                else {
                    _this.makeOrderForm.addControl('addresses', _this.defaultAddressesForm);
                    _this.makeOrderForm.get('addresses').get('billing').controls.email.setValue(_this.userData.login);
                }
            }));
        }
    };
    Object.defineProperty(MaBaseMakeOrderFormComponent.prototype, "defaultAddressesForm", {
        get: function () {
            return new forms_1.FormGroup({
                billing: Object.assign({}, form_model_1.MaBaseAddressFormGroup),
                shipping: Object.assign({}, form_model_1.MaBaseAddressFormGroup),
                invoice: Object.assign({}, form_model_1.MaBaseInvoiceFormGroup)
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaBaseMakeOrderFormComponent.prototype, "defaultMakeOrderForm", {
        get: function () {
            return new forms_1.FormGroup({
                delivery_parcel_phone: new forms_1.FormControl('', { validators: [] }),
                special_instruction: new forms_1.FormControl(''),
                password: new forms_1.FormControl('', { validators: [] }),
                accept_terms: new forms_1.FormControl(false, { validators: [forms_1.Validators.required] }),
                accept_newsletter: new forms_1.FormControl(false, { validators: [] })
            });
        },
        enumerable: true,
        configurable: true
    });
    MaBaseMakeOrderFormComponent.prototype.getAddressFormGroup = function (name) {
        var addressForm = this.makeOrderForm.controls['addresses'];
        return !!addressForm && !!addressForm.controls[name] ? addressForm.controls[name] : null;
    };
    MaBaseMakeOrderFormComponent.prototype.setShippingAddress = function (id) {
        if (id !== null && !!this.makeOrderForm.controls['shipping_id']) {
            this.makeOrderForm.controls['shipping_id'].setValue(id);
        }
    };
    MaBaseMakeOrderFormComponent.prototype.setInvoiceAddress = function (id) {
        if (id !== null && !!this.makeOrderForm.controls['invoice_id']) {
            this.makeOrderForm.controls['invoice_id'].setValue(id);
        }
    };
    MaBaseMakeOrderFormComponent.prototype.shipmentUpdate = function (isChecked) {
        this.shipmentChecked = isChecked;
        if (!this.isGuest) {
            this.shipmentChecked
                ? this.makeOrderForm.controls['shipping_id'].setValidators([forms_1.Validators.required])
                : this.makeOrderForm.controls['shipping_id'].clearValidators();
            this.makeOrderForm.controls['shipping_id'].setValue(null);
        }
    };
    MaBaseMakeOrderFormComponent.prototype.invoiceUpdate = function (isChecked) {
        this.invoiceChecked = isChecked;
        if (!this.isGuest) {
            this.invoiceChecked
                ? this.makeOrderForm.controls['invoice_id'].setValidators([forms_1.Validators.required])
                : this.makeOrderForm.controls['invoice_id'].clearValidators();
            this.makeOrderForm.controls['invoice_id'].setValue(null);
        }
    };
    MaBaseMakeOrderFormComponent.prototype.setRegisterPossibility = function (isPossible) {
        this.registerPossibility = isPossible;
    };
    MaBaseMakeOrderFormComponent.prototype.makeOrder = function () {
        var _this = this;
        this.utilsService.markFormGroupTouched(this.makeOrderForm);
        if (!!this.shipmentChecked && !!this.makeOrderForm.controls['shipping_id'] && this.makeOrderForm.controls['shipping_id'].value === '') {
            this.handleEmptyShippingId();
            return;
        }
        if (this.invoiceChecked && !!this.makeOrderForm.controls['invoice_id'] && this.makeOrderForm.controls['invoice_id'].value === '') {
            this.handleEmptyInvoiceId();
            return;
        }
        if (this.makeOrderForm.valid) {
            var formValue = Object.assign({}, this.makeOrderForm.value);
            if (!this.shipmentChecked && formValue['addresses']) {
                delete formValue['addresses']['shipping'];
            }
            if (!this.invoiceChecked && formValue['addresses']) {
                delete formValue['addresses']['invoice'];
            }
            this.subscription.add(this.cartService.makeOrder(this.makeOrderForm.value).subscribe(function (response) {
                _this.makeOrderProcessing = false;
                _this.utilsService.setFormGroupEditable(_this.makeOrderForm, true);
                response.action_status
                    ? _this.handleMakeOrderSuccess(response)
                    : _this.handleErrorResponse(response);
            }, function () { return _this.callOverallError(); }, function () {
                _this.makeOrderProcessing = true;
                _this.utilsService.setFormGroupEditable(_this.makeOrderForm, false);
            }));
        }
        else {
            this.handleValidationError();
        }
    };
    MaBaseMakeOrderFormComponent.prototype.handleErrorResponse = function (response) {
        if (!!response.data.reload) {
            this.callCartConvertedError();
        }
        else if (response.data.validationErrors) {
            this.handleValidationErrors(response.data.validationErrors);
        }
        else {
            this.callOverallError();
        }
    };
    MaBaseMakeOrderFormComponent.prototype.callOverallError = function () { };
    MaBaseMakeOrderFormComponent.prototype.callCartConvertedError = function () {
        this.router.navigate(['/']);
    };
    MaBaseMakeOrderFormComponent.prototype.handleValidationErrors = function (errors) {
        this.router.navigate(['/']);
    };
    MaBaseMakeOrderFormComponent.prototype.handleMakeOrderSuccess = function (response) {
        var _this = this;
        this.gtmService.gtmEcommercePush(this.cartData, response.data.order_id);
        setTimeout(function () { return _this.redirectAfterOrder(response); }, 200);
    };
    MaBaseMakeOrderFormComponent.prototype.redirectAfterOrder = function (response) {
        !!response.data.redirectUrl && response.data.redirectUrl.length > 0
            ? window.location.replace(response.data.redirectUrl)
            : this.router.navigate(["/dziekujemy/" + response.data.order_id]);
    };
    MaBaseMakeOrderFormComponent.prototype.handleEmptyShippingId = function () {
        this.handleValidationError();
    };
    MaBaseMakeOrderFormComponent.prototype.handleEmptyInvoiceId = function () {
        this.handleValidationError();
    };
    MaBaseMakeOrderFormComponent.prototype.handleValidationError = function () {
        var invalidItem = document.querySelectorAll('.base-make-order-form .ng-invalid');
        if (!!invalidItem.length) {
            invalidItem.item(0).scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };
    MaBaseMakeOrderFormComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-base-make-order-form',
                    template: '',
                    styles: ['']
                },] },
    ];
    /** @nocollapse */
    MaBaseMakeOrderFormComponent.ctorParameters = function () { return [
        { type: api_user_1.MaApiUserService, },
        { type: auth_1.MaAuthService, },
        { type: cart_1.MaCartService, },
        { type: utils_1.MaUtilsService, },
        { type: gtm_service_1.MaGtmService, },
        { type: router_1.Router, },
    ]; };
    MaBaseMakeOrderFormComponent.propDecorators = {
        "baseClass": [{ type: core_1.HostBinding, args: ['class.base-make-order-form',] },],
    };
    return MaBaseMakeOrderFormComponent;
}());
exports.MaBaseMakeOrderFormComponent = MaBaseMakeOrderFormComponent;
//# sourceMappingURL=base-make-order-form.component.js.map