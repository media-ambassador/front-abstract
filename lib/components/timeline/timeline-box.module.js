"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var timeline_box_component_1 = require("./timeline-box.component");
var timeline_box_year_component_1 = require("./timeline-box-year/timeline-box-year.component");
var timeline_box_item_component_1 = require("./timeline-box-item/timeline-box-item.component");
var MaTimelineBoxModule = /** @class */ (function () {
    function MaTimelineBoxModule() {
    }
    MaTimelineBoxModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        timeline_box_component_1.MaTimelineBoxComponent,
                        timeline_box_year_component_1.MaTimelineBoxYearComponent,
                        timeline_box_item_component_1.MaTimelineBoxItemComponent
                    ],
                    exports: [
                        timeline_box_component_1.MaTimelineBoxComponent,
                        timeline_box_year_component_1.MaTimelineBoxYearComponent,
                        timeline_box_item_component_1.MaTimelineBoxItemComponent
                    ]
                },] },
    ];
    return MaTimelineBoxModule;
}());
exports.MaTimelineBoxModule = MaTimelineBoxModule;
//# sourceMappingURL=timeline-box.module.js.map