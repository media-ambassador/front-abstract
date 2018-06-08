"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var slider_model_1 = require("./slider.model");
var core_2 = require("@angular/core");
require("rxjs/add/operator/filter");
/**
 * (client) przewija do następnego slajdu
 */
var MaSliderNavNextDirective = /** @class */ (function () {
    function MaSliderNavNextDirective() {
        this.active = false;
    }
    MaSliderNavNextDirective.prototype.onSelectStart = function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        return false;
    };
    MaSliderNavNextDirective.prototype.onClick = function (event) {
        if (this.maSlider) {
            this.maSlider.slideNext(this.maTime);
            if (event.preventDefault) {
                event.preventDefault();
            }
        }
    };
    MaSliderNavNextDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            return _this.sliderStateSub = _this.maSlider.state$
                .filter(function (sliderState) { return sliderState.initialized; })
                .subscribe(function (sliderState) {
                _this.active = !sliderState.isEnd;
            });
        }, 0);
    };
    MaSliderNavNextDirective.prototype.ngOnDestroy = function () {
        if (this.sliderStateSub) {
            this.sliderStateSub.unsubscribe();
        }
    };
    MaSliderNavNextDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[maSliderNavNext]'
                },] },
    ];
    /** @nocollapse */
    MaSliderNavNextDirective.propDecorators = {
        "maSlider": [{ type: core_1.Input, args: ['maSliderNavNext',] },],
        "maTime": [{ type: core_1.Input },],
        "active": [{ type: core_2.HostBinding, args: ['class.' + slider_model_1.maSliderCssClassNavNextActive,] },],
        "onSelectStart": [{ type: core_2.HostListener, args: ['selectstart', ['$event'],] },],
        "onClick": [{ type: core_2.HostListener, args: ['click', ['$event'],] },],
    };
    return MaSliderNavNextDirective;
}());
exports.MaSliderNavNextDirective = MaSliderNavNextDirective;
//# sourceMappingURL=slider-nav-next.directive.js.map