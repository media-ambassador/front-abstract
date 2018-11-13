"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var operators_1 = require("rxjs/operators");
var auth_service_1 = require("../auth/auth.service");
var api_cart_service_1 = require("../../modules/api-module/api-cart/api-cart.service");
var _ = require("lodash");
var MaCartService = /** @class */ (function () {
    function MaCartService(apiCartService, authService) {
        var _this = this;
        this.apiCartService = apiCartService;
        this.authService = authService;
        this.sidebarCartOpenSubject$ = new ReplaySubject_1.ReplaySubject(1);
        this.cartListSubject$ = new ReplaySubject_1.ReplaySubject(1);
        this.relatedProductsData$ = new ReplaySubject_1.ReplaySubject(1);
        this.authService.watchAuthorized().subscribe(function () { return _this.refreshCartList(); });
    }
    MaCartService.prototype.getCartList = function () {
        var _this = this;
        return this.apiCartService.getList().pipe(operators_1.tap(function (data) { return _this.updateCartList(data); }));
    };
    MaCartService.prototype.refreshCartList = function () {
        var _this = this;
        var subscription = this.apiCartService.getList().subscribe(function (data) {
            subscription.unsubscribe();
            _this.updateCartList(data);
        });
    };
    MaCartService.prototype.updateCartList = function (data) {
        if (!data.action_status) {
            this.cartId = null;
            this.cartList = null;
            return;
        }
        this.cartList = data;
        this.cartId = data.data.id;
        this.cartListSubject$.next(data);
    };
    MaCartService.prototype.watchCartList = function () {
        return this.cartListSubject$.asObservable();
    };
    MaCartService.prototype.getProduct = function (id) {
        return _.find(this.cartList.data.items, function (item) {
            return item.product_id === id;
        });
    };
    MaCartService.prototype.getCartData = function () {
        return this.cartList ? this.cartList.data : null;
    };
    MaCartService.prototype.getItemsCount = function () {
        var _this = this;
        var total = 0;
        Object.keys(this.cartList.data.items).forEach(function (key) {
            total += _this.cartList.data.items[key].quantity;
        });
        return total;
    };
    MaCartService.prototype.getCartId = function () {
        return this.cartId;
    };
    MaCartService.prototype.watchSidebarCartOpen = function () {
        return this.sidebarCartOpenSubject$.asObservable();
    };
    MaCartService.prototype.watchRelatedProducts = function () {
        return this.relatedProductsData$.asObservable();
    };
    MaCartService.prototype.updateRelatedProducts = function (response) {
        !!response.data && response.data.related_products
            ? this.relatedProductsData$.next(response.data.related_products)
            : this.relatedProductsData$.next(null);
    };
    MaCartService.prototype.addElement = function (productId) {
        var cartProduct = this.getProduct(productId.toString());
        var quantity = !!cartProduct ? cartProduct.quantity + 1 : 1;
        return this.changeQuantity(productId, quantity);
    };
    MaCartService.prototype.removeElement = function (productId) {
        return this.changeQuantity(productId, 0);
    };
    MaCartService.prototype.clear = function () {
        var _this = this;
        var subscriber = this.apiCartService.clear(this.cartId).subscribe(function () {
            _this.refreshCartList();
            subscriber.unsubscribe();
        });
    };
    MaCartService.prototype.changeQuantity = function (productId, quantity) {
        var _this = this;
        var itemData = {
            product_id: productId,
            quantity: quantity
        };
        return this.apiCartService.setItem(itemData).pipe(operators_1.tap(function (response) {
            _this.updateRelatedProducts(response);
            _this.refreshCartList();
        }));
    };
    MaCartService.prototype.changeSize = function (oldProductId, newProductId, quantity) {
        var _this = this;
        var itemData = {
            product_id: newProductId,
            quantity: quantity
        };
        this.removeElement(oldProductId).subscribe();
        return this.apiCartService.setItem(itemData).pipe(operators_1.tap(function (response) {
            _this.updateRelatedProducts(response);
            _this.refreshCartList();
        }));
    };
    MaCartService.prototype.setDelivery = function (id, parcel) {
        var _this = this;
        if (parcel === void 0) { parcel = null; }
        var data = {
            delivery_id: id,
            delivery_parcel_code_preferred: parcel
        };
        this.apiCartService.setDelivery(data).subscribe(function (response) {
            if (response.action_status) {
                _this.refreshCartList();
            }
        });
    };
    MaCartService.prototype.getSelectedDeliveryOption = function () {
        var selected = this.cartList.data.delivery.selected;
        if (!selected) {
            return null;
        }
        return this.cartList.data.delivery.options[selected];
    };
    MaCartService.prototype.isDeliveryInpost = function () {
        if (!this.cartList.data.delivery.selected) {
            return false;
        }
        var selectedOption = this.getSelectedDeliveryOption();
        return selectedOption ? selectedOption.abbrev === 'inpost' : false;
    };
    MaCartService.prototype.isSalonDelivery = function () {
        if (!this.cartList.data.delivery.selected) {
            return false;
        }
        var selectedOption = this.getSelectedDeliveryOption();
        return selectedOption ? selectedOption.code.indexOf('salon_') >= 0 : false;
    };
    MaCartService.prototype.setPayment = function (type) {
        var _this = this;
        var data = {
            payment_type: type
        };
        this.apiCartService.setPayment(data).subscribe(function (response) {
            if (response.action_status) {
                _this.refreshCartList();
            }
        });
    };
    MaCartService.prototype.makeOrder = function (makeOrderData) {
        var _this = this;
        return this.apiCartService.makeOrder(makeOrderData).pipe(operators_1.tap(function (response) {
            if (response.action_status) {
                _this.refreshCartList();
            }
            else {
                if (!!response.data.reload) {
                    _this.refreshCartList();
                }
            }
        }));
    };
    MaCartService.prototype.validateCart = function () {
        var selectedOption = this.getSelectedDeliveryOption();
        return !!selectedOption
            && !!this.cartList.data.payment.selected
            && (!this.isDeliveryInpost() || (this.isDeliveryInpost() && !!selectedOption.parcel_shop && !!selectedOption.parcel_shop.code))
            && (!this.isSalonDelivery() || (this.isSalonDelivery() && !!selectedOption.parcel_shop && !!selectedOption.parcel_shop.code));
    };
    MaCartService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaCartService.ctorParameters = function () { return [
        { type: api_cart_service_1.MaApiCartService, },
        { type: auth_service_1.MaAuthService, },
    ]; };
    return MaCartService;
}());
exports.MaCartService = MaCartService;
//# sourceMappingURL=cart.service.js.map