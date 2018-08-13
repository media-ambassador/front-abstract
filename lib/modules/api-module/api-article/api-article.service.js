"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_http_client_service_1 = require("../api-http-client.service");
var MaApiArticleService = /** @class */ (function () {
    function MaApiArticleService(apiHttpClient) {
        this.apiHttpClient = apiHttpClient;
    }
    MaApiArticleService.prototype.getArticlesByCategory = function (categories) {
        return this.apiHttpClient.get(encodeURI("/article/?query={\"category\":" + JSON.stringify(categories) + "}"));
    };
    MaApiArticleService.prototype.getArticlesByTag = function (tags) {
        return this.apiHttpClient.get(encodeURI("/article/?query={\"tag\":" + JSON.stringify(tags) + "}"));
    };
    MaApiArticleService.prototype.getDynamicArticlesByCategory = function (categories) {
        return this.apiHttpClient.get(encodeURI("/darticle/?query={\"category\":" + JSON.stringify(categories) + "}"));
    };
    MaApiArticleService.prototype.getDynamicArticlesByTag = function (tags) {
        return this.apiHttpClient.get(encodeURI("/darticle/?query={\"tag\":" + JSON.stringify(tags) + "}"));
    };
    MaApiArticleService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiArticleService.ctorParameters = function () { return [
        { type: api_http_client_service_1.MaApiHttpClient, },
    ]; };
    return MaApiArticleService;
}());
exports.MaApiArticleService = MaApiArticleService;
//# sourceMappingURL=api-article.service.js.map