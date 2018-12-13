import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiCategoryResponse } from './api-category.model';

@Injectable()
export class MaApiCategoryService<CR extends MaApiCategoryResponse<any, any, any, any>> {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  getCategory(name: string, filters: string = ''): Observable<CR> {
    return this.apiHttpClient.get(`/category/${name}/${filters}`);
  }
}
