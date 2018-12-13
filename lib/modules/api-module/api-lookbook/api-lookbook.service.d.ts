import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiLookBookResponse, MaApiLookBookData, MaApiLookBookItem, MaApiLookBookItemProduct } from './api-lookbook.model';
export declare class MaApiLookBookService<LR extends MaApiLookBookResponse<MaApiLookBookData<MaApiLookBookItem<MaApiLookBookItemProduct>>>> {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getLookBook(): Observable<LR>;
    getLookBookBySlug(slug: string): Observable<LR>;
}
