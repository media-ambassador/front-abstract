import { MaApiHttpClient } from '../api-http-client.service';
import { Observable } from 'rxjs/Observable';
import { MaApiCartListResponse, MaApiSetItemData, MaApiSetItemResponse, MaApiSetDeliveryData, MaApiSetPaymentData, MaApiMakeOrderData, MaApiMakeOrderResponse, MaApiCartListData, MaApiPayment, MaApiPaymentOption, MaApiDeliveryParcelData, MaApiDelivery, MaApiDeliveryOption, MaApiParcelShopData, MaApiCartProduct, MaApiCartProductAttribute, MaApiCartPrice, MaApiCartPriceInfo, MaApiMakeOrderAddressData } from './api-cart.model';
import { MaApiResponse, MaApiPriceDetails, MaApiPriceCurrency, MaApiPriceInfo } from '../api-common.model';
import { MaApiProductPrice, MaApiProductDiscount, MaApiProductSize, MaApiProductVariation, MaApiProductAttribute, MaApiProductImage } from '../api-product';
import { MaApiShopData } from '../api-shop';
import { MaApiAddressData, MaApiAddressType, MaApiInvoiceData } from '../api-address';
export declare class MaApiCartService<CR extends MaApiCartListResponse<MaApiCartListData<MaApiPayment<MaApiPaymentOption>, MaApiPriceDetails<MaApiPriceCurrency>, MaApiDeliveryParcelData, MaApiProductPrice<MaApiPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>, MaApiProductDiscount<MaApiPriceDetails<MaApiPriceCurrency>>, MaApiDelivery<MaApiDeliveryOption<MaApiPriceDetails<MaApiPriceCurrency>, MaApiParcelShopData<MaApiDeliveryParcelData>>>, MaApiCartProduct<MaApiCartProductAttribute, MaApiPriceDetails<MaApiPriceCurrency>, MaApiCartPrice<MaApiCartPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>, MaApiProductSize>>>, ID extends MaApiSetItemData, IR extends MaApiSetItemResponse<MaApiProductVariation<MaApiProductAttribute, MaApiProductImage, MaApiShopData>>, DD extends MaApiSetDeliveryData, R extends MaApiResponse, PD extends MaApiSetPaymentData, OD extends MaApiMakeOrderData<MaApiMakeOrderAddressData<MaApiAddressData<MaApiAddressType>, MaApiInvoiceData>>, OR extends MaApiMakeOrderResponse> {
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
