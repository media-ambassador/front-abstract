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
var MaProductListPageSizeComponent = /** @class */ (function (_super) {
    __extends(MaProductListPageSizeComponent, _super);
    function MaProductListPageSizeComponent() {
        return _super.call(this) || this;
    }
    MaProductListPageSizeComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        if (!this.pageSizeOptions) {
            this.setDefaultOptions();
        }
        this.productListOptionSubscription = this.productListUtils.watchOptions().subscribe(function (opt) {
            _this.pageSize = opt.pageSize;
            _this.selectedPageSize = _this.pageSize.toString();
        });
    };
    MaProductListPageSizeComponent.prototype.setDefaultOptions = function () {
        this.pageSizeOptions = [12, 24, 48, 96];
    };
    MaProductListPageSizeComponent.prototype.updateCurrentPageSize = function () {
        this.productListUtils.updateOptions({
            page: 1,
            // tslint:disable-next-line:radix
            pageSize: parseInt(this.selectedPageSize)
        });
    };
    MaProductListPageSizeComponent.decorators = [
        { type: core_1.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'ma-product-list-page-size',
                    template: " ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    MaProductListPageSizeComponent.ctorParameters = function () { return []; };
    MaProductListPageSizeComponent.propDecorators = {
        "pageSizeOptions": [{ type: core_1.Input },],
    };
    return MaProductListPageSizeComponent;
}(product_list_component_1.MaProductListComponent));
exports.MaProductListPageSizeComponent = MaProductListPageSizeComponent;
//# sourceMappingURL=product-list-page-size.component.js.map