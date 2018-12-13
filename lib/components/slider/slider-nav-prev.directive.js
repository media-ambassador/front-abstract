"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var slider_component_1 = require("./slider.component");
/**
 * (click) przewija do poprzedniego slajdu
 */
var MaSliderNavPrevDirective = /** @class */ (function () {
    function MaSliderNavPrevDirective() {
        this.active = false;
    }
    MaSliderNavPrevDirective.prototype.onSelectStart = function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        return false;
    };
    MaSliderNavPrevDirective.prototype.onClick = function (event) {
        if (this.maSlider) {
            this.maSlider.slidePrev(this.maTime);
            if (event.preventDefault) {
                event.preventDefault();
            }
        }
    };
    MaSliderNavPrevDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            return _this.sliderStateSub = _this.maSlider.state$
                .filter(function (sliderState) { return sliderState.initialized; })
                .subscribe(function (sliderState) {
                _this.active = !sliderState.isBeginning;
            });
        }, 0);
    };
    MaSliderNavPrevDirective.prototype.ngOnDestroy = function () {
        if (this.sliderStateSub) {
            this.sliderStateSub.unsubscribe();
        }
    };
    MaSliderNavPrevDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[maSliderNavPrev]'
                },] },
    ];
    /** @nocollapse */
    MaSliderNavPrevDirective.propDecorators = {
        "maSlider": [{ type: core_1.Input, args: ['maSliderNavPrev',] },],
        "maTime": [{ type: core_1.Input },],
        "active": [{ type: core_1.HostBinding, args: ['class.' + slider_component_1.maSliderCssClassNavPrevActive,] },],
        "onSelectStart": [{ type: core_1.HostListener, args: ['selectstart', ['$event'],] },],
        "onClick": [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    };
    return MaSliderNavPrevDirective;
}());
exports.MaSliderNavPrevDirective = MaSliderNavPrevDirective;
//# sourceMappingURL=slider-nav-prev.directive.js.map