"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var slider_component_1 = require("./slider.component");
/**
 * (click) przewija do slajdu podanego w maSliderNavToIndex
 */
var MaSliderNavToDirective = /** @class */ (function () {
    function MaSliderNavToDirective() {
        this.active = false;
    }
    MaSliderNavToDirective.prototype.onSelectStart = function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        return false;
    };
    MaSliderNavToDirective.prototype.onClick = function (event) {
        if (this.maSlider) {
            this.maSlider.slideTo(this.maIndex, this.maTime);
            if (event.preventDefault) {
                event.preventDefault();
            }
        }
    };
    MaSliderNavToDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            return _this.sliderStateSub = _this.maSlider.state$
                .filter(function (sliderState) { return sliderState.initialized; })
                .subscribe(function (sliderState) {
                _this.active = sliderState.currentSlide === _this.maIndex;
            });
        }, 0);
    };
    MaSliderNavToDirective.prototype.ngOnDestroy = function () {
        if (this.sliderStateSub) {
            this.sliderStateSub.unsubscribe();
        }
    };
    MaSliderNavToDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[maSliderNavTo]'
                },] },
    ];
    /** @nocollapse */
    MaSliderNavToDirective.propDecorators = {
        "maSlider": [{ type: core_1.Input, args: ['maSliderNavTo',] },],
        "maTime": [{ type: core_1.Input },],
        "maIndex": [{ type: core_1.Input },],
        "active": [{ type: core_1.HostBinding, args: ['class.' + slider_component_1.maSliderCssClassNavToActive,] },],
        "onSelectStart": [{ type: core_1.HostListener, args: ['selectstart', ['$event'],] },],
        "onClick": [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    };
    return MaSliderNavToDirective;
}());
exports.MaSliderNavToDirective = MaSliderNavToDirective;
//# sourceMappingURL=slider-nav-to.directive.js.map