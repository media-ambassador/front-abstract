import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiResponse } from '../api-common.model';
import { MaApiAddressData } from './api-address.model';
export declare class MaApiAddressService {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    createAddress(data: MaApiAddressData): Observable<MaApiResponse>;
    updateAddress(data: MaApiAddressData): Observable<MaApiResponse>;
    deleteAddress(id: string): Observable<MaApiResponse>;
}
