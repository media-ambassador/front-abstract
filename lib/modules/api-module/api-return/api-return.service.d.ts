import { Observable } from 'rxjs/Observable';
import { MaApiReturnData, MaApiReturnItem } from './api-return.model';
import { MaApiAddressData, MaApiAddressType } from '../api-address/api-address.model';
import { MaApiResponse } from '../api-common.model';
import { MaApiHttpClient } from '..';
export declare class ApiReturnService<RD extends MaApiReturnData<MaApiReturnItem, MaApiAddressData<MaApiAddressType>>, R extends MaApiResponse> {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    createReturn(returnData: RD): Observable<R>;
}
