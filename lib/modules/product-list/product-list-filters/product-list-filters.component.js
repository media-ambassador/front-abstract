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
var forEach_1 = require("lodash/forEach");
var remove_1 = require("lodash/remove");
var sortBy_1 = require("lodash/sortBy");
var product_list_component_1 = require("../product-list.component");
var MaProductListFiltersComponent = /** @class */ (function (_super) {
    __extends(MaProductListFiltersComponent, _super);
    function MaProductListFiltersComponent() {
        return _super.call(this) || this;
    }
    MaProductListFiltersComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.productListOptionSubscription = this.productListUtils.watchOptions().subscribe(function (opt) {
            _this.activeAttributes = !!opt.attributes ? opt.attributes : [];
            _this.price = opt.price;
        });
    };
    MaProductListFiltersComponent.prototype.getAttributeId = function (attribute, attributeValue) {
        return 'attr-' + attribute.attribute_id + '-' + attributeValue.attribute_value_id;
    };
    MaProductListFiltersComponent.prototype.hasFilters = function (attribute) {
        return !!this.filters.attributes.checked_values_list[attribute.attribute_id];
    };
    MaProductListFiltersComponent.prototype.filtersTotalCount = function () {
        var totalCount = 0;
        forEach_1.default(this.filters.attributes.checked_values_list, function (filtersList) {
            totalCount += filtersList.length;
        });
        return totalCount;
    };
    MaProductListFiltersComponent.prototype.countFilters = function (attribute) {
        var filters = this.filters.attributes.checked_values_list[attribute.attribute_id];
        return filters ? filters.length : 0;
    };
    MaProductListFiltersComponent.prototype.isAttributeActive = function (attribute, attrItem) {
        var filters = this.filters.attributes.checked_values_list[attribute.attribute_id];
        if (!filters) {
            return false;
        }
        return filters.indexOf(attrItem.attribute_value_id) >= 0;
    };
    MaProductListFiltersComponent.prototype.onAttributeChange = function (attribute, attrItem) {
        var isActive = this.isAttributeActive(attribute, attrItem);
        if (isActive) {
            remove_1.default(this.activeAttributes, function (item) {
                return item.filterGroupId === attribute.attribute_id.toString()
                    && item.filterId === attrItem.attribute_value_id;
            });
        }
        else {
            this.activeAttributes.push({
                filterGroupId: attribute.attribute_id.toString(),
                filterId: attrItem.attribute_value_id
            });
        }
        this.updateAttributes();
    };
    MaProductListFiltersComponent.prototype.clearAllFilters = function () {
        this.activeAttributes = null;
        this.price = null;
        this.updateAttributes();
    };
    MaProductListFiltersComponent.prototype.clearAttributeFilters = function (attribute) {
        remove_1.default(this.activeAttributes, function (item) {
            return item.filterGroupId === attribute.attribute_id.toString();
        });
        this.updateAttributes();
    };
    MaProductListFiltersComponent.prototype.updateAttributes = function () {
        var attributes = null;
        if (!!this.filters.attributes) {
            attributes = sortBy_1.default(this.activeAttributes, function (attribute) {
                return attribute.filterGroupId;
            });
        }
        this.productListUtils.updateOptions({
            attributes: attributes,
            price: this.price
        });
    };
    MaProductListFiltersComponent.decorators = [
        { type: core_1.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'ma-product-list-filters',
                    template: "",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    MaProductListFiltersComponent.ctorParameters = function () { return []; };
    MaProductListFiltersComponent.propDecorators = {
        "filters": [{ type: core_1.Input },],
    };
    return MaProductListFiltersComponent;
}(product_list_component_1.MaProductListComponent));
exports.MaProductListFiltersComponent = MaProductListFiltersComponent;
//# sourceMappingURL=product-list-filters.component.js.map