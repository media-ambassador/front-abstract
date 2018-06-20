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
                    styles: ["\n    $item-margin: 50px;\n\n    :host {\n      display: block;\n      position: relative;\n      width: calc(50% - #{$item-margin});\n      border: 1px solid black;\n\n      .timeline-item {\n\n        &::after {\n          content: '';\n          position: absolute;\n          width: 15px;\n          height: 15px;\n          right: calc(-#{$item-margin});\n          background: black;\n          top: 40px;\n          transform: translate(50%, -50%);\n          border-radius: 50%;\n          z-index: 5;\n        }\n\n        .item-arrow {\n          position: absolute;\n          right: -1px;\n          top: 40px;\n          background: white;\n          height: 20px;\n          width: 1px;\n          transform: translateY(-50%);\n\n          &::before, &::after {\n            content: '';\n            position: absolute;\n            background: black;\n            height: 10px;\n            width: 1.5px;\n            left: 5px;\n          }\n\n          &::before {\n            top: 50%;\n            transform: skew(135deg, 0deg);\n          }\n\n          &::after {\n            top: 0;\n            transform: skew(-135deg, 0deg);\n          }\n        }\n      }\n\n      &.right {\n        .timeline-item {\n          &::before { left: 0; }\n\n          &::after {\n            left: calc(-#{$item-margin});\n            transform: translate(-50%, -50%);\n          }\n\n          .item-arrow {\n            left: -1px;\n\n            &::before, &::after { left: -5px; }\n\n            &::before { top: 0; }\n\n            &::after { top: 50%; }\n          }\n        }\n      }\n\n      &.right {\n        left: calc(50% + #{$item-margin});\n       }\n    }\n  "]
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