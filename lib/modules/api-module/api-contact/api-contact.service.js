"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_http_client_service_1 = require("../api-http-client.service");
var ApiContactService = /** @class */ (function () {
    function ApiContactService(apiHttpClient) {
        this.apiHttpClient = apiHttpClient;
    }
    ApiContactService.prototype.sendContactForm = function (contactData) {
        return this.apiHttpClient.post('/contact/createmsg', contactData);
    };
    ApiContactService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ApiContactService.ctorParameters = function () { return [
        { type: api_http_client_service_1.MaApiHttpClient, },
    ]; };
    return ApiContactService;
}());
exports.ApiContactService = ApiContactService;
//# sourceMappingURL=api-contact.service.js.map