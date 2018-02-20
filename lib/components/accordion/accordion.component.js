"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var accordion_item_component_1 = require("./accordion-item/accordion-item.component");
var MaAccordionComponent = /** @class */ (function () {
    function MaAccordionComponent() {
    }
    MaAccordionComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.items.toArray().forEach(function (item, index) { return item.itemChange.subscribe(function () { return _this.toogleItems(index); }); });
    };
    MaAccordionComponent.prototype.toogleItems = function (id) {
        this.items.toArray().forEach(function (item, index) {
            if (index != id)
                item.closeItem();
        });
    };
    MaAccordionComponent.prototype.closeItem = function (index, force) {
        if (force === void 0) { force = false; }
        this.items.toArray()[index].closeItem(force);
    };
    MaAccordionComponent.prototype.closeAll = function (force) {
        if (force === void 0) { force = false; }
        this.items.toArray().forEach(function (item) { return item.closeItem(force); });
    };
    MaAccordionComponent.prototype.showItem = function (index, force) {
        if (force === void 0) { force = false; }
        this.items.toArray()[index].openItem(force);
    };
    MaAccordionComponent.prototype.showAll = function (force) {
        if (force === void 0) { force = false; }
        this.items.toArray().forEach(function (item) { return item.openItem(force); });
    };
    MaAccordionComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-accordion',
                    template: "\n    <ng-content select=\"ma-accordion-item\"></ng-content>\n  ",
                    styles: ["\n\n  "]
                },] },
    ];
    /** @nocollapse */
    MaAccordionComponent.ctorParameters = function () { return []; };
    MaAccordionComponent.propDecorators = {
        "items": [{ type: core_1.ContentChildren, args: [accordion_item_component_1.MaAccordionItemComponent, { descendants: true },] },],
    };
    return MaAccordionComponent;
}());
exports.MaAccordionComponent = MaAccordionComponent;
//# sourceMappingURL=accordion.component.js.map