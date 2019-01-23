import { MaApiAddressData, MaApiAddressType } from '../api-address';
export interface MaApiReturnItem {
    item_id: string;
    quantity: string;
    reason: string;
    exchange_to?: string;
}
export interface MaApiReturnData<I extends MaApiReturnItem, A extends MaApiAddressData<MaApiAddressType>> {
    id: string;
    items: I[];
    type: string;
    shippingData: A;
    bankaccount: string;
}
