"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_http_client_service_1 = require("../api-http-client.service");
var MaApiContactService = /** @class */ (function () {
    function MaApiContactService(apiHttpClient) {
        this.apiHttpClient = apiHttpClient;
    }
    MaApiContactService.prototype.sendContactForm = function (contactData) {
        return this.apiHttpClient.post('/contact/createmsg', contactData);
    };
    MaApiContactService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiContactService.ctorParameters = function () { return [
        { type: api_http_client_service_1.MaApiHttpClient, },
    ]; };
    return MaApiContactService;
}());
exports.MaApiContactService = MaApiContactService;
//# sourceMappingURL=api-contact.service.js.map