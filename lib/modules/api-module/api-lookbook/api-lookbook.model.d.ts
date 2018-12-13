import { MaApiResponse } from '../api-common.model';
export interface MaApiLookBookItemProduct {
    idProduct?: string;
    ean?: string;
    displayName?: string;
    product_code?: string;
}
export interface MaApiLookBookItem<T extends MaApiLookBookItemProduct> {
    ll_id?: string;
    lb_id?: string;
    ll_name?: string;
    ll_file?: string;
    ll_imagetype?: string;
    products: T[];
}
export interface MaApiLookBookData<T extends MaApiLookBookItem<MaApiLookBookItemProduct>> {
    id?: string;
    identifier?: string;
    url?: string;
    slug_name?: string;
    title?: string;
    Items?: T[];
}
export interface MaApiLookBookResponse<T extends MaApiLookBookData<MaApiLookBookItem<MaApiLookBookItemProduct>>> extends MaApiResponse {
    data: T[];
}
