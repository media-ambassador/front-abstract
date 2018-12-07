import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { MaApiModuleConfig, MaApiModuleConfigKey } from './api-common.model';
import { MaApiHttpClient, MaApiHttpClientCreator } from './api-http-client.service';
import { MaApiHttpClientInterceptor } from './api-http-client.interceptor';

import { MaApiAddressService } from './api-address/api-address.service';
import { MaApiArticleService } from './api-article/api-article.service';
import { MaApiBannersService } from './api-banners/api-banners.service';
import { MaApiBrandsService } from './api-brands/api-brands.service';
import { MaApiCartService } from './api-cart/api-cart.service';
import { MaApiCategoryService } from './api-category/api-category.service';
import { MaApiMenuService } from './api-menu/api-menu.service';
import { MaApiOrderService } from './api-order/api-order.service';
import { MaApiProductService } from './api-product/api-product.service';
import { MaApiSafeService } from './api-safe/api-safe.service';
import { MaApiShopService } from './api-shop/api-shop.service';
import { MaApiUserService } from './api-user/api-user.service';
import { MaApiSearchService } from './api-search';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CookieService,

    MaApiAddressService,
    MaApiArticleService,
    MaApiBannersService,
    MaApiBrandsService,
    MaApiCartService,
    MaApiCategoryService,
    MaApiMenuService,
    MaApiOrderService,
    MaApiProductService,
    MaApiSafeService,
    MaApiShopService,
    MaApiUserService,
    MaApiSearchService
  ]
})
export class MaApiModule {

  constructor(@Optional() @SkipSelf() parentModule: MaApiModule
    ) {
    if (parentModule) {
      throw new Error('MaApiModule is already loaded. Import only in MaApiModule');
    }

  }

  static forRoot(config: MaApiModuleConfig): ModuleWithProviders {
    return {
      ngModule: MaApiModule,
      providers: [
        {
          provide: MaApiModuleConfigKey, useValue: config,
        },
        {
          provide: MaApiHttpClient,
          useFactory: MaApiHttpClientCreator,
          deps: [MaApiModuleConfigKey, HttpClient]
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: MaApiHttpClientInterceptor,
          multi: true
        }
      ]
    };
  }

}
