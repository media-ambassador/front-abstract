"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var isObject_1 = require("lodash/isObject");
var map_1 = require("lodash/map");
var MaGtmService = /** @class */ (function () {
    function MaGtmService() {
    }
    MaGtmService.prototype.init = function () {
        this.dataLayer = window.dataLayer = window.dataLayer || [];
        this.referrer = document.referrer;
    };
    MaGtmService.prototype.gtmSendStateChange = function (path, referrer) {
        this.dataLayer.push({
            event: 'ngRouteChange',
            attributes: {
                page: path,
                referrer: referrer
            }
        });
    };
    MaGtmService.prototype.gtmStateChangePush = function (page) {
        this.gtmSendStateChange(page, this.referrer);
        this.referrer = document.referrer;
    };
    MaGtmService.prototype.gtmEcommercePush = function (orderData, orderId) {
        if (isObject_1.default(orderData)) {
            var gtmProducts = [];
            if (isObject_1.default(orderData.items)) {
                gtmProducts = map_1.default(orderData.items, function (orderItem) {
                    return {
                        'sku': orderItem.sku,
                        'name': orderItem.display_name,
                        'category': orderItem.category_name,
                        'price': orderItem.price.final.total.gross,
                        'quantity': orderItem.quantity
                    };
                });
            }
            var gtmPush = {
                event: 'ngEcommerce',
                'transactionId': orderId,
                'transactionAffiliation': 'Bytom',
                'transactionTotal': orderData.price.final.summary.gross,
                'transactionTax': orderData.price.final.components.items.tax,
                'transactionShipping': orderData.price.final.components.delivery.gross,
                'transactionProducts': gtmProducts
            };
            this.dataLayer.push(gtmPush);
        }
    };
    MaGtmService.prototype.gtmPushCustomEvent = function (event, category, label) {
        if (category === void 0) { category = ''; }
        if (label === void 0) { label = ''; }
        var gtmEventData = {
            event: event,
            category: category,
            label: label
        };
        this.dataLayer.push(gtmEventData);
    };
    MaGtmService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MaGtmService.ctorParameters = function () { return []; };
    return MaGtmService;
}());
exports.MaGtmService = MaGtmService;
//# sourceMappingURL=gtm.service.js.map