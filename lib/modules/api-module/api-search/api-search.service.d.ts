import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiSearchResponse, MaApiSearchItemData } from './api-search.model';
import { MaApiBreadcrumbs, MaApiFilters, MaApiFilterAttributes, MaApiFilterAttribute, MaApiFilterAttributesListValue } from './../api-common.model';
export declare class MaApiSearchService<SR extends MaApiSearchResponse<MaApiBreadcrumbs, MaApiFilters<MaApiFilterAttributes<MaApiFilterAttribute<MaApiFilterAttributesListValue>>>, MaApiSearchItemData>> {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    search(searchQuery: string, filters?: string): Observable<SR>;
}
