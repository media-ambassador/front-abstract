import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';
import 'rxjs/add/observable/of';

import { MaApiSearchService, MaApiSearchResponse, MaApiSearchItemData } from '../../modules/api-module/api-search';
import { MaApiBreadcrumbs, MaApiFilters, MaApiFilterAttributes, MaApiFilterAttribute, MaApiFilterAttributesListValue } from '../../modules/api-module';

@Injectable()
export class MaSearchService<SR extends MaApiSearchResponse<MaApiBreadcrumbs,
                                                            MaApiFilters<MaApiFilterAttributes<MaApiFilterAttribute<MaApiFilterAttributesListValue>>>,
                                                            MaApiSearchItemData>> {
  protected isProcessing = false;
  protected searchingProcessing$ = new ReplaySubject<boolean>(1);

  constructor(protected apiSearchService: MaApiSearchService<SR>) { }

  watchSearchProcessing(): Observable<boolean> {
    return this.searchingProcessing$.asObservable();
  }

  search(query: string, filters: string ): Observable<SR> {
    if (this.isProcessing) {
      return Observable.of(null);
    }

    this.searchingProcessing$.next(true);

    return this.apiSearchService.search(query, filters).pipe(
        tap(() => this.searchingProcessing$.next(false))
      );
  }

}
