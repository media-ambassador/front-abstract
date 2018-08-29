import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiMenuCategories } from './api-menu.model';

@Injectable()
export class MaApiMenuService {
  protected baseUrl = `/menu`;

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  getMenuCategories(): Observable<MaApiMenuCategories> {
    return this.apiHttpClient.get<MaApiMenuCategories>(`${this.baseUrl}/categories`);
  }
}
