import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiSearchResponse } from './api-search.model';
export declare class MaApiSearchService {
    private apiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    search(searchQuery: string, filters?: string): Observable<MaApiSearchResponse>;
}
