"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Subject_1 = require("rxjs/Subject");
var moment = require("moment");
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
    MaUtilsService.prototype.getDateFromTimeStamp = function (timeStamp, format) {
        if (format === void 0) { format = 'DD-MM-YYYY HH:mm:ss'; }
        return moment.unix(timeStamp).format(format);
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
        xhr.addEventListener('load', function () {
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