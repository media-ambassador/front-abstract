import { MaApiResponse } from '../api-common.model';
export interface MaApiBrandData {
    brand_url?: string;
    brand_images?: {
        normal?: {
            image_1?: string;
        };
    };
    brand_name?: string;
}
export interface MaApiBrandsResponse<T extends MaApiBrandData> extends MaApiResponse {
    data: T[];
}
export interface MaApiBrandImage {
    image_1: string;
    image_2: string;
}
export interface MaApiBrandImages<T extends MaApiBrandImage> {
    full?: T;
    normal?: T;
    medium?: T;
    thumb?: T;
    mini?: T;
}
