import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MaApiSearchService, MaApiSearchResponse } from '../../modules/api-module/api-search';
export declare class MaSearchService<SR extends MaApiSearchResponse<any, any, any>> {
    protected apiSearchService: MaApiSearchService<SR>;
    protected isProcessing: boolean;
    protected searchingProcessing$: ReplaySubject<boolean>;
    constructor(apiSearchService: MaApiSearchService<SR>);
    watchSearchProcessing(): Observable<boolean>;
    search(query: string, filters: string): Observable<SR>;
}
