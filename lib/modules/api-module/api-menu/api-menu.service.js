"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_http_client_service_1 = require("../api-http-client.service");
var MaApiMenuService = /** @class */ (function () {
    function MaApiMenuService(apiHttpClient) {
        this.apiHttpClient = apiHttpClient;
        this.baseUrl = "/menu";
    }
    MaApiMenuService.prototype.getMenuCategories = function () {
        return this.apiHttpClient.get(this.baseUrl + "/categories");
    };
    MaApiMenuService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiMenuService.ctorParameters = function () { return [
        { type: api_http_client_service_1.MaApiHttpClient, },
    ]; };
    return MaApiMenuService;
}());
exports.MaApiMenuService = MaApiMenuService;
//# sourceMappingURL=api-menu.service.js.map