import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiSearchResponse } from './api-search.model';

@Injectable()
export class MaApiSearchService<SR extends MaApiSearchResponse> {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  search(searchQuery: string, filters: string = ''): Observable<SR> {
    return this.apiHttpClient.get(`/search/${searchQuery}/${filters}`);
  }
}
