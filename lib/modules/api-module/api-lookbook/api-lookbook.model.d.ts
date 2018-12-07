import { MaApiResponse } from '../api-common.model';
export interface MaApiLookBookItemProduct {
    idProduct?: string;
    ean?: string;
    displayName?: string;
    product_code?: string;
}
export interface MaApiLookBookItem {
    ll_id?: string;
    lb_id?: string;
    ll_name?: string;
    ll_file?: string;
    ll_imagetype?: string;
    products: MaApiLookBookItemProduct[];
}
export interface MaApiLookBookData {
    id?: string;
    identifier?: string;
    url?: string;
    slug_name?: string;
    title?: string;
    Items?: MaApiLookBookItem[];
}
export interface MaApiLookBookResponse extends MaApiResponse {
    data: MaApiLookBookData[];
}
