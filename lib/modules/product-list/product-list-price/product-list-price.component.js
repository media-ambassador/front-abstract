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
var MaProductListPriceComponent = /** @class */ (function (_super) {
    __extends(MaProductListPriceComponent, _super);
    function MaProductListPriceComponent() {
        var _this = _super.call(this) || this;
        _this.selectedMinPrice = '';
        _this.selectedMaxPrice = '';
        return _this;
    }
    MaProductListPriceComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    MaProductListPriceComponent.prototype.ngOnChanges = function () {
        if (!!this.priceChecked && this.priceChecked.length >= 2) {
            this.selectedMinPrice = this.priceChecked[0].toString();
            this.selectedMaxPrice = this.priceChecked[1].toString();
        }
        if (!!this.priceList && this.priceList.length >= 2) {
            this.minPrice = this.priceList[0];
            this.maxPrice = this.priceList[1];
        }
        var isPriceValid = true;
        if (this.priceChecked[0] < this.priceList[0]) {
            this.selectedMinPrice = this.minPrice.toString();
            isPriceValid = false;
        }
        if (this.priceChecked[1] > this.priceList[1]) {
            this.selectedMaxPrice = this.maxPrice.toString();
            isPriceValid = false;
        }
        this.price = {
            min: this.selectedMinPrice,
            max: this.selectedMaxPrice
        };
        if (!isPriceValid) {
            this.updateCurrentPrice();
        }
    };
    MaProductListPriceComponent.prototype.setMinPrice = function (value) {
        if (!value) {
            return;
        }
        var minValue = parseInt(value, 10);
        if (minValue < this.minPrice) {
            minValue = this.minPrice;
        }
        else if (minValue >= this.maxPrice) {
            minValue = this.maxPrice - 1;
        }
        this.selectedMinPrice = minValue.toString();
        this.price.min = minValue.toString();
        this.updateCurrentPrice();
    };
    MaProductListPriceComponent.prototype.setMaxPrice = function (value) {
        if (!value) {
            return;
        }
        var maxValue = parseInt(value, 10);
        if (maxValue > this.maxPrice) {
            maxValue = this.maxPrice;
        }
        else if (maxValue <= parseInt(this.selectedMinPrice, 10)) {
            maxValue = parseInt(this.selectedMinPrice, 10) + 1;
        }
        this.selectedMinPrice = maxValue.toString();
        this.price.max = maxValue.toString();
        this.updateCurrentPrice();
    };
    MaProductListPriceComponent.prototype.setPrice = function (min, max) {
        this.selectedMinPrice = this.maxPrice === min ? (this.maxPrice - 1).toString() : min.toString();
        this.selectedMaxPrice = this.minPrice === max ? (this.minPrice + 1).toString() : max.toString();
        this.price = {
            min: this.selectedMinPrice,
            max: this.selectedMaxPrice,
        };
        this.updateCurrentPrice();
    };
    MaProductListPriceComponent.prototype.updateCurrentPrice = function () {
        this.productListUtils.updateOptions({
            page: 1,
            price: this.price
        });
    };
    MaProductListPriceComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'bs-product-list-price',
                    template: '',
                    styles: ["\n\n  "]
                },] },
    ];
    /** @nocollapse */
    MaProductListPriceComponent.ctorParameters = function () { return []; };
    MaProductListPriceComponent.propDecorators = {
        "priceChecked": [{ type: core_1.Input },],
        "priceList": [{ type: core_1.Input },],
    };
    return MaProductListPriceComponent;
}(product_list_component_1.MaProductListComponent));
exports.MaProductListPriceComponent = MaProductListPriceComponent;
//# sourceMappingURL=product-list-price.component.js.map