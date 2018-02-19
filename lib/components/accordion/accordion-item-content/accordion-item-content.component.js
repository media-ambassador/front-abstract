"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaAccordionItemContentComponent = /** @class */ (function () {
    function MaAccordionItemContentComponent() {
        this.isOpen = false;
    }
    MaAccordionItemContentComponent.prototype.show = function () {
        this.isOpen = true;
    };
    MaAccordionItemContentComponent.prototype.hide = function () {
        this.isOpen = false;
    };
    MaAccordionItemContentComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-accordion-item-content',
                    template: "\n    <div [ngClass]=\"{ 'open': isOpen }\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    styles: ["\n    :host {\n\n      div {\n        height: 0;\n        opacity: 0;\n        overflow: hidden;\n        transition: all 0.3s ease-in-out;\n\n        &.open {\n          height: initial;\n          opacity: 1;\n        }\n      }\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    MaAccordionItemContentComponent.ctorParameters = function () { return []; };
    return MaAccordionItemContentComponent;
}());
exports.MaAccordionItemContentComponent = MaAccordionItemContentComponent;
//# sourceMappingURL=accordion-item-content.component.js.map