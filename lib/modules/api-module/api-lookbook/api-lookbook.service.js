"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_http_client_service_1 = require("../api-http-client.service");
var MaApiLookBookService = /** @class */ (function () {
    function MaApiLookBookService(apiHttpClient) {
        this.apiHttpClient = apiHttpClient;
    }
    MaApiLookBookService.prototype.getLookBook = function () {
        return this.apiHttpClient.get("/lookbook/list");
    };
    MaApiLookBookService.prototype.getLookBookBySlug = function (slug) {
        return this.apiHttpClient.get("/lookbook/" + slug);
    };
    MaApiLookBookService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiLookBookService.ctorParameters = function () { return [
        { type: api_http_client_service_1.MaApiHttpClient, },
    ]; };
    return MaApiLookBookService;
}());
exports.MaApiLookBookService = MaApiLookBookService;
//# sourceMappingURL=api-lookbook.service.js.map