"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var Subject_1 = require("rxjs/Subject");
var form_model_1 = require("../../shared/form.model");
var MaUtilsService = /** @class */ (function () {
    function MaUtilsService(router) {
        this.router = router;
    }
    MaUtilsService.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        if (!formGroup || !formGroup.controls) {
            return;
        }
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (!!control.controls) {
                Object.values(control.controls).forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    MaUtilsService.prototype.setFormGroupEditable = function (formGroup, isEditable) {
        var _this = this;
        if (!formGroup || !formGroup.controls) {
            return;
        }
        Object.values(formGroup.controls).forEach(function (control) {
            isEditable ? control.enable() : control.disable();
            if (!!control.controls) {
                Object.values(control.controls).forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    MaUtilsService.prototype.getDefaultAddressFormGroup = function (withValidator) {
        if (withValidator === void 0) { withValidator = true; }
        return new forms_1.FormGroup({
            email: new forms_1.FormControl('', { validators: withValidator ? form_model_1.MaBaseFormValidators.email : [] }),
            firstname: new forms_1.FormControl('', { validators: withValidator ? form_model_1.MaBaseFormValidators.firstName : [] }),
            lastname: new forms_1.FormControl('', { validators: withValidator ? form_model_1.MaBaseFormValidators.lastname : [] }),
            company: new forms_1.FormControl('', { validators: withValidator ? form_model_1.MaBaseFormValidators.company : [] }),
            street: new forms_1.FormControl('', { validators: withValidator ? form_model_1.MaBaseFormValidators.street : [] }),
            number: new forms_1.FormControl('', { validators: withValidator ? form_model_1.MaBaseFormValidators.number : [] }),
            apartment: new forms_1.FormControl('', { validators: withValidator ? form_model_1.MaBaseFormValidators.apartment : [] }),
            zip: new forms_1.FormControl('', { validators: withValidator ? form_model_1.MaBaseFormValidators.zip : [] }),
            city: new forms_1.FormControl('', { validators: withValidator ? form_model_1.MaBaseFormValidators.city : [] }),
            telephone: new forms_1.FormControl('', { validators: withValidator ? form_model_1.MaBaseFormValidators.telephone : [] })
        });
    };
    MaUtilsService.prototype.getDefaultInvoiceFormGroup = function (withValidator, type) {
        if (withValidator === void 0) { withValidator = true; }
        if (type === void 0) { type = 'company'; }
        return new forms_1.FormGroup({
            company: new forms_1.FormControl('', { validators: withValidator && type === 'company' ? form_model_1.MaBaseFormValidators.company : [] }),
            tax_no: new forms_1.FormControl('', { validators: withValidator && type === 'company' ? form_model_1.MaBaseFormValidators.tax_no : [] }),
            firstname: new forms_1.FormControl('', { validators: withValidator && type === 'person' ? form_model_1.MaBaseFormValidators.firstName : [] }),
            lastname: new forms_1.FormControl('', { validators: withValidator && type === 'person' ? form_model_1.MaBaseFormValidators.lastname : [] }),
            street: new forms_1.FormControl('', { validators: withValidator ? form_model_1.MaBaseFormValidators.street : [] }),
            number: new forms_1.FormControl('', { validators: withValidator ? form_model_1.MaBaseFormValidators.number : [] }),
            apartment: new forms_1.FormControl('', { validators: withValidator ? form_model_1.MaBaseFormValidators.apartment : [] }),
            zip: new forms_1.FormControl('', { validators: withValidator ? form_model_1.MaBaseFormValidators.zip : [] }),
            city: new forms_1.FormControl('', { validators: withValidator ? form_model_1.MaBaseFormValidators.city : [] })
        });
    };
    MaUtilsService.prototype.getDateFromTimeStamp = function (timeStamp, format) {
        if (format === void 0) { format = 'DD-MM-YYYY HH:mm:ss'; }
        var date = new Date(timeStamp * 1000);
        return date.toLocaleDateString('pl-PL');
    };
    MaUtilsService.prototype.returnColorClass = function (status) {
        if (!status) {
            return null;
        }
        var code = status.code;
        if (this.startsWith('pending', code)) {
            return 'blue';
        }
        else if (this.startsWith('cancelled', code)) {
            return 'red';
        }
        else if (this.startsWith('sent', code)) {
            return 'green';
        }
        return null;
    };
    MaUtilsService.prototype.startsWith = function (start, code) {
        return code.indexOf(start) !== -1;
    };
    MaUtilsService.prototype.moveToUrl = function (url) {
        url.indexOf('://') >= 0
            ? window.location.href = url
            : this.router.navigate([url]);
    };
    MaUtilsService.prototype.getFullStreetAddress = function (data) {
        if (!data) {
            return '';
        }
        var street = !!data.street ? data.street : '';
        var number = !!data.number ? data.number : '';
        var address = street + " " + number;
        return !!data.apartment ? address + "/" + data.apartment : address;
    };
    MaUtilsService.prototype.checkFileExist = function (url) {
        var subject = new Subject_1.Subject();
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.addEventListener('progress', function () {
            subject.next(xhr.status === 200);
            subject.complete();
        });
        xhr.addEventListener('error', function () {
            subject.next(false);
            subject.complete();
        });
        xhr.send();
        return subject.asObservable();
    };
    MaUtilsService.prototype.isSupportActive = function (hourFrom, hourTo) {
        var date = new Date(), day = date.getDay(), hour = date.getHours();
        var isWeekend = day === 0 || day === 6 ? true : false;
        var isOpen = hour >= hourFrom && hour < hourTo ? true : false;
        return isOpen && !isWeekend ? true : false;
    };
    MaUtilsService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaUtilsService.ctorParameters = function () { return [
        { type: router_1.Router, },
    ]; };
    return MaUtilsService;
}());
exports.MaUtilsService = MaUtilsService;
//# sourceMappingURL=utils.service.js.map