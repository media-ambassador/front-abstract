"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var api_common_model_1 = require("./api-common.model");
var MaApiHttpClientInterceptor = /** @class */ (function () {
    function MaApiHttpClientInterceptor(config, cookieService) {
        this.config = config;
        this.cookieService = cookieService;
        this.tokenName = !!this.config && this.config.cookieSessionToken ? this.config.cookieSessionToken : 'session-token';
        this.headerName = !!this.config && this.config.headerSessionToken ? this.config.headerSessionToken : 'x-jwt-token';
    }
    MaApiHttpClientInterceptor.prototype.intercept = function (req, next) {
        var token = this.cookieService.get(this.tokenName);
        if (!!token) {
            var sessionHeader = {};
            sessionHeader[this.headerName] = token;
            var modified = req.clone({
                setHeaders: sessionHeader,
                withCredentials: true
            });
            return next.handle(modified);
        }
        else {
            return next.handle(req);
        }
    };
    MaApiHttpClientInterceptor.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaApiHttpClientInterceptor.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [api_common_model_1.MaApiModuleConfigKey,] },] },
        { type: ngx_cookie_service_1.CookieService, },
    ]; };
    return MaApiHttpClientInterceptor;
}());
exports.MaApiHttpClientInterceptor = MaApiHttpClientInterceptor;
//# sourceMappingURL=api-http-client.interceptor.js.map