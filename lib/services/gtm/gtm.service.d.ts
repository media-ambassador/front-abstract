import { MaApiCartListData } from '../../modules/api-module/api-cart';
export declare class MaGtmService {
    protected dataLayer: any;
    protected referrer: any;
    constructor();
    init(): void;
    gtmSendStateChange(path: string, referrer: string): void;
    gtmStateChangePush(page: string): void;
    gtmEcommercePush(orderData: MaApiCartListData, orderId: string): void;
    gtmPushCustomEvent(event: string, category?: string, label?: string): void;
}
