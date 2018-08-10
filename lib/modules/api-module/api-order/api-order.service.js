"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_http_client_service_1 = require("../api-http-client.service");
var MaApiOrderService = /** @class */ (function () {
    function MaApiOrderService(apiHttpClient) {
        this.apiHttpClient = apiHttpClient;
    }
    MaApiOrderService.prototype.getOrder = function (id) {
        return this.apiHttpClient.post("/order/get", { id: id });
    };
    MaApiOrderService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiOrderService.ctorParameters = function () { return [
        { type: api_http_client_service_1.MaApiHttpClient, },
    ]; };
    return MaApiOrderService;
}());
exports.MaApiOrderService = MaApiOrderService;
//# sourceMappingURL=api-order.service.js.map