import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MaApiSearchService, MaApiSearchResponse } from '../../modules/api-module/api-search';
export declare class MaSearchService {
    protected apiSearchService: MaApiSearchService<MaApiSearchResponse<any, any, any>>;
    protected isProcessing: boolean;
    protected searchingProcessing$: ReplaySubject<boolean>;
    constructor(apiSearchService: MaApiSearchService<MaApiSearchResponse<any, any, any>>);
    watchSearchProcessing(): Observable<boolean>;
    search(query: string, filters: string): Observable<MaApiSearchResponse<any, any, any>>;
}
