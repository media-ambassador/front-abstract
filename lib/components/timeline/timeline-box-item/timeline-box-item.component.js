"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaTimelineBoxItemComponent = /** @class */ (function () {
    function MaTimelineBoxItemComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.timelineHeight = 300;
        this.itemSide = 'left';
        this.isLeftSide = false;
        this.isRightSide = false;
    }
    MaTimelineBoxItemComponent.prototype.ngOnInit = function () {
        this.isLeftSide = this.itemSide === 'left';
        this.isRightSide = !this.isLeftSide;
    };
    MaTimelineBoxItemComponent.prototype.updateHeight = function (height, index, gap) {
        this.timelineHeight = height;
        var translateNum = -gap * index + '%';
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(' + translateNum + ')');
    };
    MaTimelineBoxItemComponent.prototype.getItemHeight = function () {
        return this.timelineHeight;
    };
    MaTimelineBoxItemComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-timeline-box-item',
                    template: "\n    <div class=\"timeline-item\" [ngStyle]=\"{'height': getItemHeight() + 'px'}\">\n      <span class=\"item-arrow\"></span>\n\n      <div class=\"content\">\n          <ng-content></ng-content>\n      </div>\n\n    </div>\n  ",
                    styles: ["\n    :host {\n      display: block;\n      position: relative;\n      width: calc(50% - 50px);\n      border: 1px solid black; }\n      :host .timeline-item::after {\n        content: '';\n        position: absolute;\n        width: 15px;\n        height: 15px;\n        right: calc(-50px);\n        background: black;\n        top: 40px;\n        transform: translate(50%, -50%);\n        border-radius: 50%;\n        z-index: 5; }\n      :host .timeline-item .item-arrow {\n        position: absolute;\n        right: -1px;\n        top: 40px;\n        background: white;\n        height: 20px;\n        width: 1px;\n        transform: translateY(-50%); }\n        :host .timeline-item .item-arrow::before, :host .timeline-item .item-arrow::after {\n          content: '';\n          position: absolute;\n          background: black;\n          height: 10px;\n          width: 1.5px;\n          left: 5px; }\n        :host .timeline-item .item-arrow::before {\n          top: 50%;\n          transform: skew(135deg, 0deg); }\n        :host .timeline-item .item-arrow::after {\n          top: 0;\n          transform: skew(-135deg, 0deg); }\n      :host.right .timeline-item::before {\n        left: 0; }\n      :host.right .timeline-item::after {\n        left: calc(-50px);\n        transform: translate(-50%, -50%); }\n      :host.right .timeline-item .item-arrow {\n        left: -1px; }\n        :host.right .timeline-item .item-arrow::before, :host.right .timeline-item .item-arrow::after {\n          left: -5px; }\n        :host.right .timeline-item .item-arrow::before {\n          top: 0; }\n        :host.right .timeline-item .item-arrow::after {\n          top: 50%; }\n      :host.right {\n        left: calc(50% + 50px); }\n  "]
                },] },
    ];
    /** @nocollapse */
    MaTimelineBoxItemComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer2, },
    ]; };
    MaTimelineBoxItemComponent.propDecorators = {
        "itemSide": [{ type: core_1.Input },],
        "isLeftSide": [{ type: core_1.HostBinding, args: ['class.left',] },],
        "isRightSide": [{ type: core_1.HostBinding, args: ['class.right',] },],
    };
    return MaTimelineBoxItemComponent;
}());
exports.MaTimelineBoxItemComponent = MaTimelineBoxItemComponent;
//# sourceMappingURL=timeline-box-item.component.js.map