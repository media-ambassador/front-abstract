"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_http_client_service_1 = require("../api-http-client.service");
var MaApiNewsletterService = /** @class */ (function () {
    function MaApiNewsletterService(apiHttp) {
        this.apiHttp = apiHttp;
    }
    MaApiNewsletterService.prototype.addFreshMailSubscriber = function (data) {
        return this.apiHttp.post("/freshmail/subscriber/add", data);
    };
    MaApiNewsletterService.prototype.addGetResponseSubscriber = function (data) {
        return this.apiHttp.post("/getresponse/subscriber/add", data);
    };
    MaApiNewsletterService.prototype.addSubscriber = function (data) {
        return this.apiHttp.post("/newsletter/subscriber/add", data);
    };
    MaApiNewsletterService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiNewsletterService.ctorParameters = function () { return [
        { type: api_http_client_service_1.MaApiHttpClient, },
    ]; };
    return MaApiNewsletterService;
}());
exports.MaApiNewsletterService = MaApiNewsletterService;
//# sourceMappingURL=api-newsletter.service.js.map