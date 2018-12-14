import { MaApiCartListData, MaApiCartProduct } from '../../modules/api-module/api-cart';
export declare class MaGtmService<CL extends MaApiCartListData<any, any, any, any, any, any, any>, CP extends MaApiCartProduct<any, any, any, any>> {
    protected dataLayer: any;
    protected referrer: any;
    constructor();
    init(): void;
    gtmSendStateChange(path: string, referrer: string): void;
    gtmStateChangePush(page: string): void;
    gtmEcommercePush(orderData: CL, orderId: string): void;
    gtmPushCustomEvent(event: string, category?: string, label?: string): void;
}
