import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiResponse } from '../api-common.model';
import { MaApiAddressData } from './api-address.model';
export declare class MaApiAddressService<D extends MaApiAddressData, R extends MaApiResponse> {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    createAddress(data: D): Observable<R>;
    updateAddress(data: D): Observable<R>;
    deleteAddress(id: string): Observable<R>;
}
