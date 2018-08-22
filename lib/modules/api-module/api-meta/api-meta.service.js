"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_http_client_service_1 = require("../api-http-client.service");
var MaApiMetaService = /** @class */ (function () {
    function MaApiMetaService(apiHttp) {
        this.apiHttp = apiHttp;
    }
    MaApiMetaService.prototype.getList = function () {
        return this.apiHttp.get("/meta/list");
    };
    MaApiMetaService.prototype.getTag = function (tag) {
        return this.apiHttp.post("/meta/list", { tag: tag });
    };
    MaApiMetaService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiMetaService.ctorParameters = function () { return [
        { type: api_http_client_service_1.MaApiHttpClient, },
    ]; };
    return MaApiMetaService;
}());
exports.MaApiMetaService = MaApiMetaService;
//# sourceMappingURL=api-meta.service.js.map