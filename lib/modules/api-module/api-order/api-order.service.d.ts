import { Observable } from 'rxjs/Observable';
import { MaApiHttpClient } from '../api-http-client.service';
import { MaApiOrderResponse, MaApiOrderListData, MaApiOrderListItem, MaApiOrderStatus } from './api-order.model';
import { MaApiPriceCurrency, MaApiPriceDetails, MaApiPriceInfo } from '..';
import { MaApiCartPrice, MaApiCartPriceInfo, MaApiCartProductAttribute, MaApiDeliveryOption, MaApiPaymentOption } from '../api-cart';
import { MaApiProductDiscount, MaApiProductPrice, MaApiProductVariation, MaApiProductAttribute, MaApiProductImage } from '../api-product';
import { MaApiAddressData, MaApiAddressType } from '../api-address';
import { MaApiParcelShopData, MaApiDeliveryParcelData } from '../api-cart/api-cart.model';
import { MaApiShopData } from '../api-shop';
export declare class MaApiOrderService<OR extends MaApiOrderResponse<MaApiOrderListData<MaApiPriceCurrency, MaApiPriceDetails<MaApiPriceCurrency>, MaApiOrderListItem<MaApiCartPrice<MaApiCartPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>, MaApiProductDiscount<MaApiPriceDetails<MaApiPriceCurrency>>, MaApiCartProductAttribute, MaApiProductVariation<MaApiProductAttribute, MaApiProductImage, MaApiShopData>>, MaApiAddressData<MaApiAddressType>, MaApiDeliveryOption<MaApiPriceDetails<MaApiPriceCurrency>, MaApiParcelShopData<MaApiDeliveryParcelData>>, MaApiPaymentOption, MaApiOrderStatus, MaApiProductPrice<MaApiPriceInfo<MaApiPriceDetails<MaApiPriceCurrency>>>>>> {
    protected apiHttpClient: MaApiHttpClient;
    constructor(apiHttpClient: MaApiHttpClient);
    getOrder(id: string): Observable<OR>;
}
