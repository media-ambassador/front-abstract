"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var slider_model_1 = require("./slider.model");
/**
 * Wskazuje warstwę nieprzewijaną podczas slajdowania
 */
var MaSliderTopLayerDirective = /** @class */ (function () {
    function MaSliderTopLayerDirective() {
        /** klasy przypisane do hosta na sztywno */
        this.__cssClasses = true;
    }
    MaSliderTopLayerDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[maSliderTopLayer]',
                },] },
    ];
    /** @nocollapse */
    MaSliderTopLayerDirective.ctorParameters = function () { return []; };
    MaSliderTopLayerDirective.propDecorators = {
        "__cssClasses": [{ type: core_1.HostBinding, args: ['class.' + slider_model_1.maSliderCssClassTopLayer,] },],
    };
    return MaSliderTopLayerDirective;
}());
exports.MaSliderTopLayerDirective = MaSliderTopLayerDirective;
//# sourceMappingURL=slider-top-layer.directive.js.map