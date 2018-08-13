import { MaApiHttpClient } from '../api-http-client.service';
import { Observable } from 'rxjs/Observable';
import { MaApiCartListResponse, MaApiSetItemData, MaApiSetItemResponse, MaApiSetDeliveryData, MaApiSetPaymentData, MaApiMakeOrderData, MaApiMakeOrderResponse } from './api-cart.model';
import { MaApiResponse } from '../api-common.model';
export declare class MaApiCartService {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getList(): Observable<MaApiCartListResponse>;
    setItem(setItemData: MaApiSetItemData): Observable<MaApiSetItemResponse>;
    setDelivery(data: MaApiSetDeliveryData): Observable<MaApiResponse>;
    setPayment(data: MaApiSetPaymentData): Observable<MaApiResponse>;
    clear(id: number): Observable<MaApiResponse>;
    makeOrder(makeOrderData: MaApiMakeOrderData): Observable<MaApiMakeOrderResponse>;
    setDiscount(code: string): Observable<MaApiResponse>;
    removeDiscount(): Observable<MaApiResponse>;
}
