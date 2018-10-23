"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_http_client_service_1 = require("../api-http-client.service");
var MaApiAnnouncementsService = /** @class */ (function () {
    function MaApiAnnouncementsService(apiHttpClient) {
        this.apiHttpClient = apiHttpClient;
    }
    MaApiAnnouncementsService.prototype.getAnnouncementsData = function () {
        return this.apiHttpClient.get("/announcements");
    };
    MaApiAnnouncementsService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiAnnouncementsService.ctorParameters = function () { return [
        { type: api_http_client_service_1.MaApiHttpClient, },
    ]; };
    return MaApiAnnouncementsService;
}());
exports.MaApiAnnouncementsService = MaApiAnnouncementsService;
//# sourceMappingURL=api-announcements.service.js.map