"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var operators_1 = require("rxjs/operators");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var api_user_service_1 = require("../../modules/api-module/api-user/api-user.service");
exports.MaTokenKeyName = 'session-token';
var MaAuthService = /** @class */ (function () {
    function MaAuthService(apiUserService, cookieService) {
        this.apiUserService = apiUserService;
        this.cookieService = cookieService;
        this.authorized = false;
        this.authorizeSubject$ = new ReplaySubject_1.ReplaySubject(1);
        this.userData = null;
        this.userDataSubject$ = new ReplaySubject_1.ReplaySubject(1);
        this.versionMismatchSubject$ = new ReplaySubject_1.ReplaySubject(1);
    }
    MaAuthService.prototype.populate = function (clear, version) {
        var _this = this;
        if (clear === void 0) { clear = false; }
        if (version === void 0) { version = null; }
        if (clear) {
            this.clearData();
        }
        return new Promise(function (resolve) {
            var subscription = _this.apiUserService.token(clear).subscribe(function (response) {
                _this.handleTokenResponse(response, version);
                subscription.unsubscribe();
                resolve(true);
            });
        });
    };
    MaAuthService.prototype.handleTokenResponse = function (response, version) {
        if (version === void 0) { version = null; }
        this.handleVersionError(response, version);
        this.cookieService.set('session-token', response.data.x_jwt_token, 30, '/');
        this.setAuthorized(response.data.is_logged);
        this.setUserData(response.data.user_data);
    };
    MaAuthService.prototype.handleVersionError = function (response, version) {
        if (version === void 0) { version = null; }
        if (!!response.data.version && !!version && response.data.version !== version) {
            this.versionMismatchSubject$.next(true);
        }
    };
    MaAuthService.prototype.watchVersionError = function () {
        return this.versionMismatchSubject$.asObservable();
    };
    MaAuthService.prototype.setUserData = function (data) {
        this.userData = {
            id: !!data.user_id ? data.user_id : null,
            login: !!data.user_login ? data.user_login : null,
            cartId: !!data.last_cart_id ? data.last_cart_id : null,
            cartSafeId: !!data.last_safe_id ? data.last_safe_id : null,
            firstname: !!data.firstname ? data.firstname : null,
            lastname: !!data.lastname ? data.lastname : null,
            email: !!data.email ? data.email : null,
        };
    };
    MaAuthService.prototype.authorize = function (auth) {
        var _this = this;
        return this.apiUserService.authorize(auth).pipe(operators_1.tap(function (response) { return _this.handleAuthorizeResponse(response); }));
    };
    MaAuthService.prototype.handleAuthorizeResponse = function (response) {
        if (response.action_status) {
            this.setUserData(response.data);
            this.userDataSubject$.next(this.userData);
            if (!!response.data.x_jwt_token) {
                this.token = response.data.x_jwt_token;
                this.cookieService.set(exports.MaTokenKeyName, this.token, 30, '/');
            }
            this.setAuthorized(true);
        }
    };
    MaAuthService.prototype.fbAuthorize = function (auth) {
        var _this = this;
        return this.apiUserService.fbAuthorize(auth).pipe(operators_1.tap(function (response) { return _this.handleFbAuthorizeResponse(response); }));
    };
    MaAuthService.prototype.handleFbAuthorizeResponse = function (response) {
        if (response.action_status) {
            this.setUserData(response.data);
            this.userDataSubject$.next(this.userData);
            if (!!response.data.x_jwt_token) {
                this.token = response.data.x_jwt_token;
                this.cookieService.set(exports.MaTokenKeyName, this.token, 30, '/');
            }
            this.setAuthorized(true);
        }
    };
    MaAuthService.prototype.register = function (register) {
        var _this = this;
        return this.apiUserService.register(register).pipe(operators_1.tap(function (response) { return _this.handleRegisterResponse(response); }));
    };
    MaAuthService.prototype.handleRegisterResponse = function (response) {
        if (response.action_status) {
            this.setUserData(response.data);
            this.userDataSubject$.next(this.userData);
            this.setAuthorized(true);
        }
    };
    MaAuthService.prototype.remind = function (remind) {
        return this.apiUserService.remind(remind);
    };
    MaAuthService.prototype.setAuthorized = function (auth) {
        this.authorized = auth;
        this.authorizeSubject$.next(auth);
    };
    MaAuthService.prototype.watchAuthorized = function () {
        return this.authorizeSubject$.asObservable();
    };
    MaAuthService.prototype.isAuthorized = function () {
        return this.authorized;
    };
    MaAuthService.prototype.watchUserData = function () {
        return this.userDataSubject$.asObservable();
    };
    MaAuthService.prototype.getUserData = function () {
        return this.userData;
    };
    MaAuthService.prototype.clearData = function () {
        this.cookieService.deleteAll('/');
        localStorage.clear();
        sessionStorage.clear();
    };
    MaAuthService.prototype.logout = function () {
        var _this = this;
        this.clearData();
        this.apiUserService.logout().subscribe(function () { return _this.populate(); });
    };
    MaAuthService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaAuthService.ctorParameters = function () { return [
        { type: api_user_service_1.MaApiUserService, },
        { type: ngx_cookie_service_1.CookieService, },
    ]; };
    return MaAuthService;
}());
exports.MaAuthService = MaAuthService;
//# sourceMappingURL=auth.service.js.map