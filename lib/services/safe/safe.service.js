"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var operators_1 = require("rxjs/operators");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var api_safe_service_1 = require("../../modules/api-module/api-safe/api-safe.service");
var _ = require("lodash");
var auth_service_1 = require("../auth/auth.service");
var MaSafeService = /** @class */ (function () {
    function MaSafeService(apiSafeService, authService, cookieService) {
        var _this = this;
        this.apiSafeService = apiSafeService;
        this.authService = authService;
        this.cookieService = cookieService;
        this.cartSafeListSubject$ = new ReplaySubject_1.ReplaySubject(1);
        this.authService.watchAuthorized().subscribe(function () { return _this.refreshCartSafeList(); });
    }
    MaSafeService.prototype.init = function () {
        var _this = this;
        return this.apiSafeService.create().pipe(operators_1.tap(function () {
            _this.refreshCartSafeList();
        }));
    };
    MaSafeService.prototype.refreshCartSafeList = function () {
        var _this = this;
        var subscription = this.apiSafeService.getList().subscribe(function (data) {
            subscription.unsubscribe();
            if (!data.action_status) {
                return;
            }
            _this.cartSafeList = data;
            _this.cartSafeListSubject$.next(data);
        });
    };
    MaSafeService.prototype.watchCartSafeList = function () {
        return this.cartSafeListSubject$.asObservable();
    };
    MaSafeService.prototype.getCartSafeData = function () {
        return this.cartSafeList ? this.cartSafeList.data : null;
    };
    MaSafeService.prototype.isInSafeList = function (productId) {
        if (!this.cartSafeList || !this.cartSafeList.data.items) {
            return false;
        }
        var isFavorite = false;
        _.forEach(this.cartSafeList.data.items, function (item) {
            if (!isFavorite) {
                // tslint:disable-next-line:triple-equals
                isFavorite = parseInt(item.product_id, 10) == productId;
            }
        });
        return isFavorite;
    };
    MaSafeService.prototype.addElement = function (productId, quantity) {
        var _this = this;
        if (quantity === void 0) { quantity = 1; }
        var itemData = {
            product_id: productId,
            quantity: quantity
        };
        return this.apiSafeService.setItem(itemData).pipe(operators_1.tap(function (response) {
            if (response.action_status) {
                _this.refreshCartSafeList();
            }
        }));
    };
    MaSafeService.prototype.removeElement = function (productId) {
        return this.addElement(productId, 0);
    };
    MaSafeService.prototype.clear = function () {
        var _this = this;
        var subscriber = this.apiSafeService.clear().subscribe(function () {
            _this.refreshCartSafeList();
            subscriber.unsubscribe();
        });
    };
    MaSafeService.prototype.reset = function () {
        this.refreshCartSafeList();
    };
    MaSafeService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaSafeService.ctorParameters = function () { return [
        { type: api_safe_service_1.MaApiSafeService, },
        { type: auth_service_1.MaAuthService, },
        { type: ngx_cookie_service_1.CookieService, },
    ]; };
    return MaSafeService;
}());
exports.MaSafeService = MaSafeService;
//# sourceMappingURL=safe.service.js.map