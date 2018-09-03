"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_http_client_service_1 = require("../api-http-client.service");
var MaApiSearchService = /** @class */ (function () {
    function MaApiSearchService(apiHttpClient) {
        this.apiHttpClient = apiHttpClient;
    }
    MaApiSearchService.prototype.search = function (searchQuery, filters) {
        if (filters === void 0) { filters = ''; }
        return this.apiHttpClient.get("/search/" + searchQuery + "/" + filters);
    };
    MaApiSearchService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiSearchService.ctorParameters = function () { return [
        { type: api_http_client_service_1.MaApiHttpClient, },
    ]; };
    return MaApiSearchService;
}());
exports.MaApiSearchService = MaApiSearchService;
//# sourceMappingURL=api-search.service.js.map