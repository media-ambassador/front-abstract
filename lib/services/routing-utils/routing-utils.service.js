"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MaRoutingUtilsService = /** @class */ (function () {
    function MaRoutingUtilsService(router) {
        this.router = router;
        this.history = [];
    }
    MaRoutingUtilsService.prototype.starSavesRoutingHistory = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .subscribe(function (data) {
            _this.history = _this.history.concat([data.url]);
        });
    };
    MaRoutingUtilsService.prototype.getHistory = function () {
        return this.history;
    };
    MaRoutingUtilsService.prototype.getPreviousUrl = function () {
        return this.history[this.history.length - 2] || null;
    };
    MaRoutingUtilsService.prototype.updatePreviewUrl = function (url) {
        this.history[this.history.length - 1] = url;
    };
    MaRoutingUtilsService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaRoutingUtilsService.ctorParameters = function () { return [
        { type: router_1.Router, },
    ]; };
    return MaRoutingUtilsService;
}());
exports.MaRoutingUtilsService = MaRoutingUtilsService;
//# sourceMappingURL=routing-utils.service.js.map