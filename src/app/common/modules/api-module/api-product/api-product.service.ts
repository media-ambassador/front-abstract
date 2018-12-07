import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiProductResponse } from './api-product.model';
import { MaApiCategoryResponse } from '../api-category/api-category.model';

@Injectable()
export class MaApiProductService<PR extends MaApiProductResponse, CR extends MaApiCategoryResponse> {

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
}
