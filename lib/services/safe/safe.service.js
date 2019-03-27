"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var operators_1 = require("rxjs/operators");
var forEach_1 = require("lodash/forEach");
var api_safe_service_1 = require("../../modules/api-module/api-safe/api-safe.service");
var auth_service_1 = require("../auth/auth.service");
var MaSafeService = /** @class */ (function () {
    function MaSafeService(apiSafeService, authService) {
        var _this = this;
        this.apiSafeService = apiSafeService;
        this.authService = authService;
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
        forEach_1.default(this.cartSafeList.data.items, function (item) {
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
    MaSafeService.prototype.addAllToCart = function (removeAll) {
        var _this = this;
        if (removeAll === void 0) { removeAll = false; }
        return this.apiSafeService.addAllToCart(removeAll).pipe(operators_1.tap(function (response) {
            if (response.action_status && removeAll) {
                _this.refreshCartSafeList();
            }
        }));
    };
    MaSafeService.prototype.removeElement = function (productId) {
        return this.addElement(productId, 0);
    };
    MaSafeService.prototype.changeQuantity = function (productId, quantity) {
        var _this = this;
        var itemData = {
            product_id: productId,
            quantity: quantity
        };
        return this.apiSafeService.setItem(itemData).pipe(operators_1.tap(function () { return _this.refreshCartSafeList(); }));
    };
    MaSafeService.prototype.changeSize = function (oldProductId, newProductId, quantity) {
        var _this = this;
        var itemData = {
            product_id: newProductId,
            quantity: quantity
        };
        this.removeElement(oldProductId).subscribe();
        return this.apiSafeService.setItem(itemData).pipe(operators_1.tap(function () { return _this.refreshCartSafeList(); }));
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
    ]; };
    return MaSafeService;
}());
exports.MaSafeService = MaSafeService;
//# sourceMappingURL=safe.service.js.map