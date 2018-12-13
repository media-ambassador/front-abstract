import { MaApiHttpClient } from '../api-http-client.service';
import { Observable } from 'rxjs/Observable';
import { MaApiCartListResponse, MaApiSetItemData, MaApiSetItemResponse, MaApiSetDeliveryData, MaApiSetPaymentData, MaApiMakeOrderData, MaApiMakeOrderResponse } from './api-cart.model';
import { MaApiResponse } from '../api-common.model';
export declare class MaApiCartService<CR extends MaApiCartListResponse<any>, ID extends MaApiSetItemData, IR extends MaApiSetItemResponse<any>, DD extends MaApiSetDeliveryData, R extends MaApiResponse, PD extends MaApiSetPaymentData, OD extends MaApiMakeOrderData<any>, OR extends MaApiMakeOrderResponse> {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getList(): Observable<CR>;
    setItem(setItemData: ID): Observable<IR>;
    setDelivery(data: DD): Observable<R>;
    setPayment(data: PD): Observable<R>;
    clear(id: number): Observable<R>;
    makeOrder(makeOrderData: OD): Observable<OR>;
    setDiscount(code: string): Observable<R>;
    removeDiscount(): Observable<R>;
}
