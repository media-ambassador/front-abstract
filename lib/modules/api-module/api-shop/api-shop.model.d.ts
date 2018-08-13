import { MaApiResponse } from '../api-common.model';
export interface MaApiShopItem {
    id: string;
    code: string;
    name: string;
    name_short: string;
    city: string;
    address: string;
    address_number: string;
    address_description: string;
    phone: string;
    country: string;
    region: string;
    description: string;
    zip: string;
    email: string;
    shop_type: string;
    link: string;
    updatedate: string;
    imagefilename: string;
    imagefilename_mime_type: string;
    gps_x: string;
    gps_y: string;
    collection_point: string;
    opening_hours: string;
}
export interface MaApiShopListResponse extends MaApiResponse {
    data: MaApiShopItem[];
}
