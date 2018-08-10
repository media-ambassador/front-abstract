"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_http_client_service_1 = require("../api-http-client.service");
var MaApiCategoryService = /** @class */ (function () {
    function MaApiCategoryService(apiHttpClient) {
        this.apiHttpClient = apiHttpClient;
    }
    MaApiCategoryService.prototype.getCategory = function (name, filters) {
        if (filters === void 0) { filters = ''; }
        return this.apiHttpClient.get("/category/" + name + "/" + filters);
    };
    MaApiCategoryService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiCategoryService.ctorParameters = function () { return [
        { type: api_http_client_service_1.MaApiHttpClient, },
    ]; };
    return MaApiCategoryService;
}());
exports.MaApiCategoryService = MaApiCategoryService;
//# sourceMappingURL=api-category.service.js.map