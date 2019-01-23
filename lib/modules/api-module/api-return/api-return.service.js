"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var __1 = require("..");
var ApiReturnService = /** @class */ (function () {
    function ApiReturnService(apiHttpClient) {
        this.apiHttpClient = apiHttpClient;
    }
    ApiReturnService.prototype.createReturn = function (returnData) {
        return this.apiHttpClient.post("/return/create", returnData);
    };
    ApiReturnService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ApiReturnService.ctorParameters = function () { return [
        { type: __1.MaApiHttpClient, },
    ]; };
    return ApiReturnService;
}());
exports.ApiReturnService = ApiReturnService;
//# sourceMappingURL=api-return.service.js.map