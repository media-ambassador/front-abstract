"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_http_client_service_1 = require("../api-http-client.service");
var MaApiSizeTableService = /** @class */ (function () {
    function MaApiSizeTableService(apiHttpClient) {
        this.apiHttpClient = apiHttpClient;
    }
    MaApiSizeTableService.prototype.getSizeTableBySlug = function (slug) {
        return this.apiHttpClient.post("/sizetable", { value: slug });
    };
    MaApiSizeTableService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiSizeTableService.ctorParameters = function () { return [
        { type: api_http_client_service_1.MaApiHttpClient, },
    ]; };
    return MaApiSizeTableService;
}());
exports.MaApiSizeTableService = MaApiSizeTableService;
//# sourceMappingURL=api-size-table.service.js.map