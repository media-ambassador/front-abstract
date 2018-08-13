"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaProcessingSpinnerDirective = /** @class */ (function () {
    function MaProcessingSpinnerDirective(element) {
        this.element = element;
        this.isProcessed = false;
    }
    MaProcessingSpinnerDirective.prototype.ngOnChanges = function () {
        this.isProcessed = this.bsProcessingSpinner;
    };
    MaProcessingSpinnerDirective.prototype.ngAfterViewInit = function () {
        this.element.nativeElement.insertAdjacentHTML('beforeend', "<span class=\"spinner\"></span>");
    };
    MaProcessingSpinnerDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[maProcessingSpinner]'
                },] },
    ];
    /** @nocollapse */
    MaProcessingSpinnerDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    MaProcessingSpinnerDirective.propDecorators = {
        "bsProcessingSpinner": [{ type: core_1.Input },],
        "isProcessed": [{ type: core_1.HostBinding, args: ['class.processing',] },],
    };
    return MaProcessingSpinnerDirective;
}());
exports.MaProcessingSpinnerDirective = MaProcessingSpinnerDirective;
//# sourceMappingURL=processing-spinner.directive.js.map