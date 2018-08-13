import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiCategoryResponse } from './api-category.model';

@Injectable()
export class MaApiCategoryService {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  getCategory(name: string, filters: string = ''): Observable<MaApiCategoryResponse> {
    return this.apiHttpClient.get(`/category/${name}/${filters}`);
  }
}
