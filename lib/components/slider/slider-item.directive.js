"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var slider_model_1 = require("./slider.model");
/**
 * Wskazuje element, który będzie slajdem
 */
var MaSliderItemDirective = /** @class */ (function () {
    function MaSliderItemDirective() {
        /** klasy przypisane do hosta na sztywno */
        // klasa na potrzeby komponentu slajdera
        this.__cssClasses = true;
        this.active = false;
    }
    /** Ustala czy slajd jest aktywnym slajdem */
    /** Ustala czy slajd jest aktywnym slajdem */
    MaSliderItemDirective.prototype.setActive = /** Ustala czy slajd jest aktywnym slajdem */
    function (active) {
        this.active = active;
    };
    MaSliderItemDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[maSliderItem]',
                },] },
    ];
    /** @nocollapse */
    MaSliderItemDirective.propDecorators = {
        "__cssClasses": [{ type: core_1.HostBinding, args: ['class.' + slider_model_1.maSliderCssClassItem,] }, { type: core_1.HostBinding, args: ['class.swiper-slide',] },],
        "active": [{ type: core_1.HostBinding, args: ['class.' + slider_model_1.maSliderCssClassItemActive,] },],
    };
    return MaSliderItemDirective;
}());
exports.MaSliderItemDirective = MaSliderItemDirective;
//# sourceMappingURL=slider-item.directive.js.map