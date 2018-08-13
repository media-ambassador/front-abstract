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
var MaProductListPaginationComponent = /** @class */ (function (_super) {
    __extends(MaProductListPaginationComponent, _super);
    function MaProductListPaginationComponent() {
        return _super.call(this) || this;
    }
    MaProductListPaginationComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.totalPages) {
            throw new Error(('TotalPages must be set'));
        }
        this.productListOptionSubscription = this.productListUtils.watchOptions().subscribe(function (opt) {
            _this.currentPage = opt.page;
            _this.page = opt.page.toString();
        });
    };
    MaProductListPaginationComponent.prototype.updateCurrentPage = function () {
        // tslint:disable-next-line:radix
        var value = parseInt(this.page);
        value > 0 && value <= this.totalPages && value !== this.currentPage
            ? this.productListUtils.updateOptions({ page: value })
            : this.page = this.currentPage.toString();
    };
    MaProductListPaginationComponent.prototype.decreasePage = function () {
        this.page = (this.currentPage - 1).toString();
        this.updateCurrentPage();
    };
    MaProductListPaginationComponent.prototype.increasePage = function () {
        this.page = (this.currentPage + 1).toString();
        this.updateCurrentPage();
    };
    MaProductListPaginationComponent.decorators = [
        { type: core_1.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'ma-product-list-pagination',
                    template: "",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    MaProductListPaginationComponent.ctorParameters = function () { return []; };
    MaProductListPaginationComponent.propDecorators = {
        "totalPages": [{ type: core_1.Input },],
    };
    return MaProductListPaginationComponent;
}(product_list_component_1.MaProductListComponent));
exports.MaProductListPaginationComponent = MaProductListPaginationComponent;
//# sourceMappingURL=product-list-pagination.component.js.map