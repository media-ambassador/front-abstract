"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_http_client_service_1 = require("../api-http-client.service");
var MaApiUserService = /** @class */ (function () {
    function MaApiUserService(apiHttpClient) {
        this.apiHttpClient = apiHttpClient;
    }
    MaApiUserService.prototype.authorize = function (authData) {
        return this.apiHttpClient.post("/user/authorize", authData);
    };
    MaApiUserService.prototype.fbAuthorize = function (fbAuthData) {
        return this.apiHttpClient.post("/user/fbauthorize", fbAuthData);
    };
    MaApiUserService.prototype.register = function (registerData) {
        return this.apiHttpClient.post("/user/register", registerData);
    };
    MaApiUserService.prototype.getAddressList = function () {
        return this.apiHttpClient.get("/user/addresslist");
    };
    MaApiUserService.prototype.changePassword = function (changePasswordData) {
        return this.apiHttpClient.post("/user/changepassword", changePasswordData);
    };
    MaApiUserService.prototype.getOrderList = function () {
        return this.apiHttpClient.get("/user/orderlist");
    };
    MaApiUserService.prototype.token = function () {
        return this.apiHttpClient.get("/user/token");
    };
    MaApiUserService.prototype.remind = function (remindData) {
        return this.apiHttpClient.post("/user/remindpassword", remindData);
    };
    MaApiUserService.prototype.getReturnsList = function () {
        return this.apiHttpClient.get("/user/returnlist");
    };
    MaApiUserService.prototype.checkUserExist = function (email) {
        return this.apiHttpClient.post("/user/exists", { email: email });
    };
    MaApiUserService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiUserService.ctorParameters = function () { return [
        { type: api_http_client_service_1.MaApiHttpClient, },
    ]; };
    return MaApiUserService;
}());
exports.MaApiUserService = MaApiUserService;
//# sourceMappingURL=api-user.service.js.map