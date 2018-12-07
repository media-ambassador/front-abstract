import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiProductResponse, MaApiProductAttributeList } from './api-product.model';
import { MaApiCategoryResponse } from '../api-category/api-category.model';
import { MaApiResponse } from '../api-common.model';
import { MaApiShopListResponse } from '../api-shop';

@Injectable()
export class MaApiProductService<PR extends MaApiProductResponse,
                                 CR extends MaApiCategoryResponse,
                                 SL extends MaApiShopListResponse,
                                 AR extends MaApiProductAttributeList,
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
