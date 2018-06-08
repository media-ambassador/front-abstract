"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var accordion_item_content_component_1 = require("../accordion-item-content/accordion-item-content.component");
var accordion_item_header_component_1 = require("../accordion-item-header/accordion-item-header.component");
var MaAccordionItemComponent = /** @class */ (function () {
    function MaAccordionItemComponent() {
        this.itemChange = new core_1.EventEmitter();
    }
    MaAccordionItemComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.itemHeader.headerClicked.subscribe(function (open) {
            if (_this.maLock) {
                return;
            }
            open ? _this.openItem() : _this.closeItem();
            _this.itemChange.emit();
        });
        if (this.maOpen) {
            this.itemContent.show();
        }
    };
    MaAccordionItemComponent.prototype.openItem = function (force) {
        if (force === void 0) { force = false; }
        if (this.maLock && !force) {
            return;
        }
        this.itemHeader.isOpen = true;
        this.itemContent.show();
    };
    MaAccordionItemComponent.prototype.closeItem = function (force) {
        if (force === void 0) { force = false; }
        if (this.maLock && !force) {
            return;
        }
        this.itemHeader.isOpen = false;
        this.itemContent.hide();
    };
    MaAccordionItemComponent.decorators = [
        { type: core_1.Component, args: [{
                    moduleId: module.id,
                    selector: 'ma-accordion-item',
                    template: "\n    <ng-content select=\"ma-accordion-item-header\"></ng-content>\n\n    <ng-content select=\"ma-accordion-item-content\"></ng-content>\n  ",
                    styles: ["\n\n  "]
                },] },
    ];
    /** @nocollapse */
    MaAccordionItemComponent.ctorParameters = function () { return []; };
    MaAccordionItemComponent.propDecorators = {
        "maLock": [{ type: core_1.Input },],
        "maOpen": [{ type: core_1.Input },],
        "itemChange": [{ type: core_1.Output },],
        "itemHeader": [{ type: core_1.ContentChild, args: [accordion_item_header_component_1.MaAccordionItemHeaderComponent,] },],
        "itemContent": [{ type: core_1.ContentChild, args: [accordion_item_content_component_1.MaAccordionItemContentComponent,] },],
    };
    return MaAccordionItemComponent;
}());
exports.MaAccordionItemComponent = MaAccordionItemComponent;
//# sourceMappingURL=accordion-item.component.js.map