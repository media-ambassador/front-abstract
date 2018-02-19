"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var accordion_component_1 = require("./accordion.component");
var accordion_item_content_component_1 = require("./accordion-item-content/accordion-item-content.component");
var accordion_item_header_component_1 = require("./accordion-item-header/accordion-item-header.component");
var accordion_item_component_1 = require("./accordion-item/accordion-item.component");
var MaAccordionModule = /** @class */ (function () {
    function MaAccordionModule() {
    }
    MaAccordionModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        accordion_component_1.MaAccordionComponent,
                        accordion_item_content_component_1.MaAccordionItemContentComponent,
                        accordion_item_header_component_1.MaAccordionItemHeaderComponent,
                        accordion_item_component_1.MaAccordionItemComponent
                    ],
                    exports: [
                        accordion_component_1.MaAccordionComponent,
                        accordion_item_content_component_1.MaAccordionItemContentComponent,
                        accordion_item_header_component_1.MaAccordionItemHeaderComponent,
                        accordion_item_component_1.MaAccordionItemComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    MaAccordionModule.ctorParameters = function () { return []; };
    return MaAccordionModule;
}());
exports.MaAccordionModule = MaAccordionModule;
//# sourceMappingURL=accordion.module.js.map