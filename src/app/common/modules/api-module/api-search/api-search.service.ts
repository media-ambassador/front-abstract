import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiSearchResponse, MaApiSearchItemData } from './api-search.model';
import { MaApiBreadcrumbs, MaApiFilters, MaApiFilterAttributes, MaApiFilterAttribute, MaApiFilterAttributesListValue } from './../api-common.model';

@Injectable()
export class MaApiSearchService<SR extends MaApiSearchResponse<MaApiBreadcrumbs,
                                                               MaApiFilters<MaApiFilterAttributes<MaApiFilterAttribute<MaApiFilterAttributesListValue>>>,
                                                               MaApiSearchItemData>
                               > {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  search(searchQuery: string, filters: string = ''): Observable<SR> {
    return this.apiHttpClient.get(`/search/${searchQuery}/${filters}`);
  }
}
