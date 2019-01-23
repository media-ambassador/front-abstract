"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var __1 = require("..");
var MaApiReturnService = /** @class */ (function () {
    function MaApiReturnService(apiHttpClient) {
        this.apiHttpClient = apiHttpClient;
    }
    MaApiReturnService.prototype.createReturn = function (returnData) {
        return this.apiHttpClient.post("/return/create", returnData);
    };
    MaApiReturnService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiReturnService.ctorParameters = function () { return [
        { type: __1.MaApiHttpClient, },
    ]; };
    return MaApiReturnService;
}());
exports.MaApiReturnService = MaApiReturnService;
//# sourceMappingURL=api-return.service.js.map