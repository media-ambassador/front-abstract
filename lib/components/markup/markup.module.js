"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var markup_component_1 = require("./markup.component");
var MaMarkupModule = /** @class */ (function () {
    function MaMarkupModule() {
    }
    MaMarkupModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        markup_component_1.MaMarkupComponent
                    ],
                    exports: [
                        markup_component_1.MaMarkupComponent
                    ]
                },] },
    ];
    return MaMarkupModule;
}());
exports.MaMarkupModule = MaMarkupModule;
//# sourceMappingURL=markup.module.js.map