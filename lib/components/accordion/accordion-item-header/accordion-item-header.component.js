"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaAccordionItemHeaderComponent = /** @class */ (function () {
    function MaAccordionItemHeaderComponent() {
        this.headerClicked = new core_1.EventEmitter();
    }
    MaAccordionItemHeaderComponent.prototype.onClick = function () {
        this.headerClicked.emit();
    };
    MaAccordionItemHeaderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-accordion-item-header',
                    template: "\n    <ng-content></ng-content>\n  ",
                    styles: ["\n\n  "]
                },] },
    ];
    /** @nocollapse */
    MaAccordionItemHeaderComponent.ctorParameters = function () { return []; };
    MaAccordionItemHeaderComponent.propDecorators = {
        "headerClicked": [{ type: core_1.Output },],
        "onClick": [{ type: core_1.HostListener, args: ['click',] },],
    };
    return MaAccordionItemHeaderComponent;
}());
exports.MaAccordionItemHeaderComponent = MaAccordionItemHeaderComponent;
//# sourceMappingURL=accordion-item-header.component.js.map