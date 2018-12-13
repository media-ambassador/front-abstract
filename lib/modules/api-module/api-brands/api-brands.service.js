"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_http_client_service_1 = require("../api-http-client.service");
var MaApiBrandsService = /** @class */ (function () {
    function MaApiBrandsService(apiHttp) {
        this.apiHttp = apiHttp;
    }
    MaApiBrandsService.prototype.getList = function () {
        return this.apiHttp.get("/brands");
    };
    MaApiBrandsService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiBrandsService.ctorParameters = function () { return [
        { type: api_http_client_service_1.MaApiHttpClient, },
    ]; };
    return MaApiBrandsService;
}());
exports.MaApiBrandsService = MaApiBrandsService;
//# sourceMappingURL=api-brands.service.js.map