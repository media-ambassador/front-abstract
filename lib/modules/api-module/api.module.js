"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var api_common_model_1 = require("./api-common.model");
var api_http_client_service_1 = require("./api-http-client.service");
var api_http_client_interceptor_1 = require("./api-http-client.interceptor");
var api_address_service_1 = require("./api-address/api-address.service");
var api_article_service_1 = require("./api-article/api-article.service");
var api_banners_service_1 = require("./api-banners/api-banners.service");
var api_brands_service_1 = require("./api-brands/api-brands.service");
var api_cart_service_1 = require("./api-cart/api-cart.service");
var api_category_service_1 = require("./api-category/api-category.service");
var api_menu_service_1 = require("./api-menu/api-menu.service");
var api_order_service_1 = require("./api-order/api-order.service");
var api_product_service_1 = require("./api-product/api-product.service");
var api_safe_service_1 = require("./api-safe/api-safe.service");
var api_shop_service_1 = require("./api-shop/api-shop.service");
var api_user_service_1 = require("./api-user/api-user.service");
var api_search_1 = require("./api-search");
var MaApiModule = /** @class */ (function () {
    function MaApiModule(parentModule) {
        if (parentModule) {
            throw new Error('MaApiModule is already loaded. Import only in MaApiModule');
        }
    }
    MaApiModule.forRoot = function (config) {
        return {
            ngModule: MaApiModule,
            providers: [
                {
                    provide: api_common_model_1.MaApiModuleConfigKey, useValue: config,
                },
                {
                    provide: api_http_client_service_1.MaApiHttpClient,
                    useFactory: api_http_client_service_1.MaApiHttpClientCreator,
                    deps: [api_common_model_1.MaApiModuleConfigKey, http_1.HttpClient]
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: api_http_client_interceptor_1.MaApiHttpClientInterceptor,
                    multi: true
                }
            ]
        };
    };
    MaApiModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        http_1.HttpClientModule
                    ],
                    providers: [
                        ngx_cookie_service_1.CookieService,
                        api_address_service_1.MaApiAddressService,
                        api_article_service_1.MaApiArticleService,
                        api_banners_service_1.MaApiBannersService,
                        api_brands_service_1.MaApiBrandsService,
                        api_cart_service_1.MaApiCartService,
                        api_category_service_1.MaApiCategoryService,
                        api_menu_service_1.MaApiMenuService,
                        api_order_service_1.MaApiOrderService,
                        api_product_service_1.MaApiProductService,
                        api_safe_service_1.MaApiSafeService,
                        api_shop_service_1.MaApiShopService,
                        api_user_service_1.MaApiUserService,
                        api_search_1.MaApiSearchService
                    ]
                },] },
    ];
    /** @nocollapse */
    MaApiModule.ctorParameters = function () { return [
        { type: MaApiModule, decorators: [{ type: core_1.Optional }, { type: core_1.SkipSelf },] },
    ]; };
    return MaApiModule;
}());
exports.MaApiModule = MaApiModule;
//# sourceMappingURL=api.module.js.map