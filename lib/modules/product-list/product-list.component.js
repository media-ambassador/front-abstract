"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_list_service_1 = require("./product-list-service");
var MaProductListComponent = /** @class */ (function () {
    function MaProductListComponent() {
    }
    MaProductListComponent.prototype.ngOnInit = function () {
        if (!this.productListUtils) {
            throw new Error(('ProductListUtils must be set'));
        }
    };
    MaProductListComponent.prototype.ngOnDestroy = function () {
        if (!!this.productListOptionSubscription) {
            this.productListOptionSubscription.unsubscribe();
        }
    };
    MaProductListComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'bs-product-list',
                    template: "",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    MaProductListComponent.ctorParameters = function () { return []; };
    MaProductListComponent.propDecorators = {
        "productListUtils": [{ type: core_1.Input },],
    };
    return MaProductListComponent;
}());
exports.MaProductListComponent = MaProductListComponent;
//# sourceMappingURL=product-list.component.js.map