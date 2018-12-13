"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_http_client_service_1 = require("../api-http-client.service");
var MaApiSafeService = /** @class */ (function () {
    function MaApiSafeService(apiHttpClient) {
        this.apiHttpClient = apiHttpClient;
    }
    MaApiSafeService.prototype.getList = function () {
        return this.apiHttpClient.get("/safe/list");
    };
    MaApiSafeService.prototype.setItem = function (setItemData) {
        return this.apiHttpClient.post("/safe/setitem", setItemData);
    };
    MaApiSafeService.prototype.clear = function () {
        return this.apiHttpClient.post("/safe/clear", {});
    };
    MaApiSafeService.prototype.create = function () {
        return this.apiHttpClient.post("/safe/create", {});
    };
    MaApiSafeService.prototype.addAllToCart = function (removeAll) {
        if (removeAll === void 0) { removeAll = false; }
        return this.apiHttpClient.post("/safe/addalltocart", { removeItems: removeAll });
    };
    MaApiSafeService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiSafeService.ctorParameters = function () { return [
        { type: api_http_client_service_1.MaApiHttpClient, },
    ]; };
    return MaApiSafeService;
}());
exports.MaApiSafeService = MaApiSafeService;
//# sourceMappingURL=api-safe.service.js.map