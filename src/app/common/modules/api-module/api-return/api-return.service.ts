import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MaApiReturnData, MaApiReturnItem } from './api-return.model';
import { MaApiAddressData, MaApiAddressType } from '../api-address/api-address.model';
import { MaApiResponse } from '../api-common.model';
import { MaApiHttpClient } from '..';

@Injectable()
export class MaApiReturnService<RD extends MaApiReturnData<
                                          MaApiReturnItem,
                                          MaApiAddressData<MaApiAddressType>
                                         >,
                              R extends MaApiResponse
                             > {

  constructor(protected apiHttpClient: MaApiHttpClient) { }

  createReturn(returnData: RD): Observable<R> {
    return this.apiHttpClient.post(`/return/create`, returnData);
  }
}
