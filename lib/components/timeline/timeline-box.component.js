"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var timeline_box_year_component_1 = require("./timeline-box-year/timeline-box-year.component");
var MaTimelineBoxComponent = /** @class */ (function () {
    function MaTimelineBoxComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.timelineHeight = 300;
        this.transitionY = 30;
        this.yearSeparator = 0.8;
    }
    MaTimelineBoxComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.timelineYears.forEach(function (timelineYear, index, arr) {
                if (arr.length !== index + 1) {
                    timelineYear.updateHeight(_this.timelineHeight, _this.transitionY, _this.yearSeparator);
                }
                else {
                    timelineYear.updateHeight(_this.timelineHeight, _this.transitionY, 0);
                }
            });
        }, 0);
        this.renderer.setStyle(this.el.nativeElement, 'padding-bottom', this.timelineHeight * (this.transitionY / 100) + "px");
    };
    MaTimelineBoxComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-timeline-box',
                    template: "\n    <div class=\"timeline-box\">\n\n      <ng-content select=\"ma-timeline-box-year\"></ng-content>\n\n     </div>\n  ",
                    styles: ["\n    :host {\n      position: relative;\n      display: block;\n      width: 100%;\n      margin: 90px 0;\n\n      .timeline-box {\n\n        &:after {\n          content: '';\n          position: absolute;\n          width: 1px;\n          background: grey;\n          top: 0;\n          bottom: 0;\n          left: 50%;\n          transform: translateX(-50%);\n          z-index: -1;\n        }\n      }\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    MaTimelineBoxComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer2, },
    ]; };
    MaTimelineBoxComponent.propDecorators = {
        "timelineHeight": [{ type: core_1.Input },],
        "transitionY": [{ type: core_1.Input },],
        "yearSeparator": [{ type: core_1.Input },],
        "timelineYears": [{ type: core_1.ContentChildren, args: [timeline_box_year_component_1.MaTimelineBoxYearComponent,] },],
    };
    return MaTimelineBoxComponent;
}());
exports.MaTimelineBoxComponent = MaTimelineBoxComponent;
//# sourceMappingURL=timeline-box.component.js.map