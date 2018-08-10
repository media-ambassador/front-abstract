"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_http_client_service_1 = require("../api-http-client.service");
var MaApiCartService = /** @class */ (function () {
    function MaApiCartService(apiHttpClient) {
        this.apiHttpClient = apiHttpClient;
    }
    MaApiCartService.prototype.getList = function () {
        return this.apiHttpClient.get("/cart/list");
    };
    MaApiCartService.prototype.setItem = function (setItemData) {
        return this.apiHttpClient.post("/cart/setitem", setItemData);
    };
    MaApiCartService.prototype.setDelivery = function (data) {
        return this.apiHttpClient.post("/cart/setdelivery", data);
    };
    MaApiCartService.prototype.setPayment = function (data) {
        return this.apiHttpClient.post("/cart/setpayment", data);
    };
    MaApiCartService.prototype.clear = function (id) {
        return this.apiHttpClient.post("/cart/clear", { id: id });
    };
    MaApiCartService.prototype.makeOrder = function (makeOrderData) {
        return this.apiHttpClient.post("/cart/makeorder", JSON.stringify(makeOrderData));
    };
    MaApiCartService.prototype.setDiscount = function (code) {
        return this.apiHttpClient.post("/cart/setdiscountcode", { discount_code: code });
    };
    MaApiCartService.prototype.removeDiscount = function () {
        return this.apiHttpClient.post("/cart/removediscountcode", {});
    };
    MaApiCartService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiCartService.ctorParameters = function () { return [
        { type: api_http_client_service_1.MaApiHttpClient, },
    ]; };
    return MaApiCartService;
}());
exports.MaApiCartService = MaApiCartService;
//# sourceMappingURL=api-cart.service.js.map