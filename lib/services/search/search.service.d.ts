import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MaApiSearchService, MaApiSearchResponse, MaApiSearchItemData } from '../../modules/api-module/api-search';
import { MaApiBreadcrumbs, MaApiFilters, MaApiFilterAttributes, MaApiFilterAttribute, MaApiFilterAttributesListValue } from '../../modules/api-module';
export declare class MaSearchService<SR extends MaApiSearchResponse<MaApiBreadcrumbs, MaApiFilters<MaApiFilterAttributes<MaApiFilterAttribute<MaApiFilterAttributesListValue>>>, MaApiSearchItemData>> {
    protected apiSearchService: MaApiSearchService<SR>;
    protected isProcessing: boolean;
    protected searchingProcessing$: ReplaySubject<boolean>;
    constructor(apiSearchService: MaApiSearchService<SR>);
    watchSearchProcessing(): Observable<boolean>;
    search(query: string, filters: string): Observable<SR>;
}
