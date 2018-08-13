"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_http_client_service_1 = require("../api-http-client.service");
var MaApiBannersService = /** @class */ (function () {
    function MaApiBannersService(apiHttpClient) {
        this.apiHttpClient = apiHttpClient;
    }
    MaApiBannersService.prototype.getBannersList = function () {
        return this.apiHttpClient.get("/banner/list");
    };
    MaApiBannersService.prototype.getBannersListById = function (id) {
        return this.apiHttpClient.post("/banner/list", { id: id });
    };
    MaApiBannersService.prototype.getBannersListByPlace = function (place) {
        return this.apiHttpClient.post("/banner/list", { place: place });
    };
    MaApiBannersService.prototype.getBannersEmissionsList = function () {
        return this.apiHttpClient.get("/banner/emissions");
    };
    MaApiBannersService.prototype.getBannersEmissionsListByTag = function (tag) {
        return this.apiHttpClient.post("/banner/emissions", { tag: tag });
    };
    MaApiBannersService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiBannersService.ctorParameters = function () { return [
        { type: api_http_client_service_1.MaApiHttpClient, },
    ]; };
    return MaApiBannersService;
}());
exports.MaApiBannersService = MaApiBannersService;
//# sourceMappingURL=api-banners.service.js.map