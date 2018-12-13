import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import {
  MaApiProductResponse,
  MaApiProductAttributeList,
  MaApiProductData,
  MaApiProductAttribute,
  MaApiProductCustomFlag,
  MaApiProductImage,
  MaApiProductTemplate,
  MaApiProductSize,
  MaApiProductVariation
} from './api-product.model';
import { MaApiCategoryResponse, MaApiCategoryData } from '../api-category/api-category.model';
import { MaApiResponse, MaApiBreadcrumbs, MaApiFilters, MaApiFilterAttributes, MaApiFilterAttribute, MaApiFilterAttributesListValue } from '../api-common.model';
import { MaApiShopListResponse, MaApiShopData } from '../api-shop';

@Injectable()
export class MaApiProductService<PR extends MaApiProductResponse<MaApiBreadcrumbs,
                                                                 MaApiProductData<MaApiProductAttribute,
                                                                                  MaApiProductCustomFlag,
                                                                                  MaApiProductImage,
                                                                                  MaApiProductTemplate,
                                                                                  MaApiShopData,
                                                                                  MaApiProductSize,
                                                                                  MaApiProductVariation<MaApiProductAttribute,
                                                                                  MaApiProductImage,
                                                                                  MaApiShopData>
                                                                                 >
                                                                  >,
                                 CR extends MaApiCategoryResponse<MaApiFilters<MaApiFilterAttributes<MaApiFilterAttribute<MaApiFilterAttributesListValue>>>,
                                                                  MaApiBreadcrumbs,
                                                                  MaApiCategoryData,
                                                                  MaApiProductData<MaApiProductAttribute,
                                                                                              MaApiProductCustomFlag,
                                                                                              MaApiProductImage,
                                                                                              MaApiProductTemplate,
                                                                                              MaApiShopData,
                                                                                              MaApiProductSize,
                                                                                              MaApiProductVariation<MaApiProductAttribute,
                                                                                                                    MaApiProductImage,
                                                                                                                    MaApiShopData>
                                                                                              >
                                                                  >,
                                 SL extends MaApiShopListResponse<MaApiShopData>,
                                 AR extends MaApiProductAttributeList<MaApiProductAttribute>,
                                 R extends MaApiResponse> {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  getProduct(name: string): Observable<PR> {
    return this.apiHttpClient.get(`/product/${name}`);
  }

  getProductsWithFlag(flag: string, category: string = '', filters: string = ''): Observable<PR> {
    const url = category.length > 0
                ? `/p/${flag}/c-${category}/${filters}`
                : `/p/${flag}/${filters}`;

    return this.apiHttpClient.get(url);
  }

  getProductsById(ids: string[]): Observable<CR> {
    const query = `{"productsIds":${JSON.stringify(ids)}}`;
    return this.apiHttpClient.get(`/products/?query=${query}`);
  }

  getProductAttributes(variantId: number): Observable<AR> {
    return this.apiHttpClient.post(`/product/attributes`, {id: variantId});
  }

  setProductAvailabilityNotification(variation_id: string, email: string): Observable<R> {
    return this.apiHttpClient.post(`/notification/stock/subscribe`, { variation_id, email });
  }

  getProductAvailabilitySalons(variation_id: string): Observable<SL> {
    return this.apiHttpClient.get(`/product/` + variation_id + `/salons`);
  }
}
