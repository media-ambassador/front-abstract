import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';
import 'rxjs/add/observable/of';

import { MaApiSearchService, MaApiSearchResponse } from '../../modules/api-module/api-search';

@Injectable()
export class MaSearchService {
  protected isProcessing = false;
  protected searchingProcessing$ = new ReplaySubject<boolean>(1);

  constructor(protected apiSearchService: MaApiSearchService<MaApiSearchResponse>) { }

  watchSearchProcessing(): Observable<boolean> {
    return this.searchingProcessing$.asObservable();
  }

  search(query: string, filters: string ): Observable<MaApiSearchResponse> {
    if (this.isProcessing) {
      return Observable.of(null);
    }

    this.searchingProcessing$.next(true);

    return this.apiSearchService.search(query, filters).pipe(
        tap(() => this.searchingProcessing$.next(false))
      );
  }

}
