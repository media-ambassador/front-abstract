import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiCategoryResponse } from './api-category.model';
export declare class MaApiCategoryService<CR extends MaApiCategoryResponse<any, any, any, any>> {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getCategory(name: string, filters?: string): Observable<CR>;
}
