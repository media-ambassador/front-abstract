"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_http_client_service_1 = require("../api-http-client.service");
var MaApiAddressService = /** @class */ (function () {
    function MaApiAddressService(apiHttpClient) {
        this.apiHttpClient = apiHttpClient;
    }
    MaApiAddressService.prototype.createAddress = function (data) {
        return this.apiHttpClient.post("/address/create", JSON.stringify(data));
    };
    MaApiAddressService.prototype.updateAddress = function (data) {
        return this.apiHttpClient.post("/address/update", JSON.stringify(data));
    };
    MaApiAddressService.prototype.deleteAddress = function (id) {
        return this.apiHttpClient.delete("/address/delete", { body: { id: id } });
    };
    MaApiAddressService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiAddressService.ctorParameters = function () { return [
        { type: api_http_client_service_1.MaApiHttpClient, },
    ]; };
    return MaApiAddressService;
}());
exports.MaApiAddressService = MaApiAddressService;
//# sourceMappingURL=api-address.service.js.map