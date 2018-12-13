import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import {
  MaApiMenuCategories,
  MaApiMenuCategoryData,
  MaApiMenuCategoryChild
} from './api-menu.model';

@Injectable()
export class MaApiMenuService<MR extends MaApiMenuCategories<MaApiMenuCategoryData<MaApiMenuCategoryChild>>> {
  protected baseUrl = `/menu`;

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  getMenuCategories(): Observable<MR> {
    return this.apiHttpClient.get<MR>(`${this.baseUrl}/categories`);
  }
}
