"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_http_client_service_1 = require("../api-http-client.service");
var MaApiProductService = /** @class */ (function () {
    function MaApiProductService(apiHttpClient) {
        this.apiHttpClient = apiHttpClient;
    }
    MaApiProductService.prototype.getProduct = function (name) {
        return this.apiHttpClient.get("/product/" + name);
    };
    MaApiProductService.prototype.getProductsWithFlag = function (flag, category, filters) {
        if (category === void 0) { category = ''; }
        if (filters === void 0) { filters = ''; }
        var url = category.length > 0
            ? "/p/" + flag + "/c-" + category + "/" + filters
            : "/p/" + flag + "/" + filters;
        return this.apiHttpClient.get(url);
    };
    MaApiProductService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiProductService.ctorParameters = function () { return [
        { type: api_http_client_service_1.MaApiHttpClient, },
    ]; };
    return MaApiProductService;
}());
exports.MaApiProductService = MaApiProductService;
//# sourceMappingURL=api-product.service.js.map