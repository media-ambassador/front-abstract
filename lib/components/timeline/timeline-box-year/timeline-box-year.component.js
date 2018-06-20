"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var timeline_box_item_component_1 = require("../timeline-box-item/timeline-box-item.component");
var MaTimelineBoxYearComponent = /** @class */ (function () {
    function MaTimelineBoxYearComponent() {
        this.year = null;
    }
    MaTimelineBoxYearComponent.prototype.ngAfterContentInit = function () {
    };
    MaTimelineBoxYearComponent.prototype.updateHeight = function (height, gap, separator) {
        var _this = this;
        this.timelineItems.forEach(function (timelineItem, index) {
            timelineItem.updateHeight(height, index, gap);
            _this.boxHeight = (height * ((100 - gap) / 100)) * (_this.timelineItems.length + separator);
        });
    };
    MaTimelineBoxYearComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-timeline-box-year',
                    template: "\n    <div class=\"year-box\" [ngStyle]=\"{'height': boxHeight + 'px'}\">\n      <span>{{ year }}</span>\n\n      <ng-content select=\"ma-timeline-box-item\"></ng-content>\n    </div>\n  ",
                    styles: ["\n    :host {\n      .year-box {\n        position: relative;\n\n        span {\n          position: absolute;\n          text-transform: uppercase;\n          color: black;\n          left: 50%;\n          transform: translateX(-50%);\n          display: block;\n          top: -40px;\n          background: white;\n          z-index: 5;\n        }\n      }\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    MaTimelineBoxYearComponent.ctorParameters = function () { return []; };
    MaTimelineBoxYearComponent.propDecorators = {
        "year": [{ type: core_1.Input },],
        "timelineItems": [{ type: core_1.ContentChildren, args: [timeline_box_item_component_1.MaTimelineBoxItemComponent,] },],
    };
    return MaTimelineBoxYearComponent;
}());
exports.MaTimelineBoxYearComponent = MaTimelineBoxYearComponent;
//# sourceMappingURL=timeline-box-year.component.js.map