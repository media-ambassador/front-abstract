"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_http_client_service_1 = require("../api-http-client.service");
var MaApiShopService = /** @class */ (function () {
    function MaApiShopService(apiHttpClient) {
        this.apiHttpClient = apiHttpClient;
    }
    MaApiShopService.prototype.getShopList = function () {
        return this.apiHttpClient.get("/shop/list");
    };
    MaApiShopService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiShopService.ctorParameters = function () { return [
        { type: api_http_client_service_1.MaApiHttpClient, },
    ]; };
    return MaApiShopService;
}());
exports.MaApiShopService = MaApiShopService;
//# sourceMappingURL=api-shop.service.js.map