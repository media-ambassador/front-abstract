"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var slider_component_1 = require("./slider.component");
var slider_item_directive_1 = require("./slider-item.directive");
var slider_top_layer_directive_1 = require("./slider-top-layer.directive");
var slider_nav_prev_directive_1 = require("./slider-nav-prev.directive");
var slider_nav_next_directive_1 = require("./slider-nav-next.directive");
var slider_nav_to_directive_1 = require("./slider-nav-to.directive");
var MaSliderModule = /** @class */ (function () {
    function MaSliderModule() {
    }
    MaSliderModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        slider_component_1.MaSliderComponent,
                        slider_item_directive_1.MaSliderItemDirective,
                        slider_top_layer_directive_1.MaSliderTopLayerDirective,
                        slider_nav_prev_directive_1.MaSliderNavPrevDirective,
                        slider_nav_next_directive_1.MaSliderNavNextDirective,
                        slider_nav_to_directive_1.MaSliderNavToDirective,
                    ],
                    exports: [
                        slider_component_1.MaSliderComponent,
                        slider_item_directive_1.MaSliderItemDirective,
                        slider_top_layer_directive_1.MaSliderTopLayerDirective,
                        slider_nav_prev_directive_1.MaSliderNavPrevDirective,
                        slider_nav_next_directive_1.MaSliderNavNextDirective,
                        slider_nav_to_directive_1.MaSliderNavToDirective,
                    ],
                    providers: []
                },] },
    ];
    /** @nocollapse */
    MaSliderModule.ctorParameters = function () { return []; };
    return MaSliderModule;
}());
exports.MaSliderModule = MaSliderModule;
//# sourceMappingURL=slider.module.js.map