"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var product_list_component_1 = require("./product-list.component");
var product_list_filters_component_1 = require("./product-list-filters/product-list-filters.component");
var product_list_page_size_component_1 = require("./product-list-page-size/product-list-page-size.component");
var product_list_pagination_component_1 = require("./product-list-pagination/product-list-pagination.component");
var product_list_sort_options_component_1 = require("./product-list-sort-options/product-list-sort-options.component");
var product_list_price_component_1 = require("./product-list-price/product-list-price.component");
var MaProductListModule = /** @class */ (function () {
    function MaProductListModule() {
    }
    MaProductListModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        product_list_component_1.MaProductListComponent,
                        product_list_filters_component_1.MaProductListFiltersComponent,
                        product_list_page_size_component_1.MaProductListPageSizeComponent,
                        product_list_pagination_component_1.MaProductListPaginationComponent,
                        product_list_sort_options_component_1.MaProductListSortOptionsComponent,
                        product_list_price_component_1.MaProductListPriceComponent
                    ],
                    exports: [
                        product_list_component_1.MaProductListComponent,
                        product_list_filters_component_1.MaProductListFiltersComponent,
                        product_list_page_size_component_1.MaProductListPageSizeComponent,
                        product_list_pagination_component_1.MaProductListPaginationComponent,
                        product_list_sort_options_component_1.MaProductListSortOptionsComponent,
                        product_list_price_component_1.MaProductListPriceComponent
                    ]
                },] },
    ];
    return MaProductListModule;
}());
exports.MaProductListModule = MaProductListModule;
//# sourceMappingURL=product-list.module.js.map