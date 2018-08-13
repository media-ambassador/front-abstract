"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_list_component_1 = require("../product-list.component");
var MaProductListSortOptionsComponent = /** @class */ (function (_super) {
    __extends(MaProductListSortOptionsComponent, _super);
    function MaProductListSortOptionsComponent() {
        return _super.call(this) || this;
    }
    MaProductListSortOptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        if (!this.sortTypes) {
            this.setDefaultSortTypes();
        }
        this.productListOptionSubscription = this.productListUtils.watchOptions().subscribe(function (opt) {
            _this.selectedSortType = opt.sortType;
        });
    };
    MaProductListSortOptionsComponent.prototype.setDefaultSortTypes = function () {
        this.sortTypes = ['nhl', 'nlh', 'plh', 'phl', 'tlh', 'thl'];
    };
    MaProductListSortOptionsComponent.prototype.updateCurrentSortType = function () {
        this.productListUtils.updateOptions({ sortType: this.selectedSortType });
    };
    MaProductListSortOptionsComponent.decorators = [
        { type: core_1.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'ma-product-list-sort-options',
                    template: "",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    MaProductListSortOptionsComponent.ctorParameters = function () { return []; };
    MaProductListSortOptionsComponent.propDecorators = {
        "sortTypes": [{ type: core_1.Input },],
    };
    return MaProductListSortOptionsComponent;
}(product_list_component_1.MaProductListComponent));
exports.MaProductListSortOptionsComponent = MaProductListSortOptionsComponent;
//# sourceMappingURL=product-list-sort-options.component.js.map