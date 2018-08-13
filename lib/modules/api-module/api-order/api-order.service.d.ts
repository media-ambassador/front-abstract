import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiOrderResponse } from './api-order.model';
export declare class MaApiOrderService {
    private apiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getOrder(id: string): Observable<MaApiOrderResponse>;
}
