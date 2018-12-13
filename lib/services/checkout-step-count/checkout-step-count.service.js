"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var MaCheckoutStepCountService = /** @class */ (function () {
    function MaCheckoutStepCountService() {
        this.steps = [];
        this.stepSubject$ = new ReplaySubject_1.ReplaySubject(1);
        for (var i = 0; i < 3; i++) {
            this.steps.push({
                active: false,
                disabled: false,
                label: "checkoutStep.label.step" + i
            });
        }
        this.stepSubject$.next(this.steps);
    }
    MaCheckoutStepCountService.prototype.watchSteps = function () {
        return this.stepSubject$.asObservable();
    };
    MaCheckoutStepCountService.prototype.updateOptions = function (steps) {
        this.steps = steps;
        this.stepSubject$.next(this.steps);
    };
    MaCheckoutStepCountService.prototype.activateStep = function (index) {
        if (index < 0 || index >= this.steps.length) {
            return;
        }
        this.steps.forEach(function (step, i) {
            step.active = index === i;
        });
        this.stepSubject$.next(this.steps);
    };
    MaCheckoutStepCountService.prototype.disableStep = function (index) {
        if (index < 0 || index >= this.steps.length) {
            return;
        }
        this.steps[index].disabled = true;
        this.stepSubject$.next(this.steps);
    };
    MaCheckoutStepCountService.prototype.enableStep = function (index) {
        if (index < 0 || index >= this.steps.length) {
            return;
        }
        this.steps[index].disabled = false;
        this.stepSubject$.next(this.steps);
    };
    MaCheckoutStepCountService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaCheckoutStepCountService.ctorParameters = function () { return []; };
    return MaCheckoutStepCountService;
}());
exports.MaCheckoutStepCountService = MaCheckoutStepCountService;
//# sourceMappingURL=checkout-step-count.service.js.map