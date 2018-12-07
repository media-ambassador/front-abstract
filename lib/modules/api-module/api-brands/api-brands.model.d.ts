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
export interface MaApiBrandsResponse extends MaApiResponse {
    data: MaApiBrandData[];
}
export interface MaApiBrandImage {
    image_1: string;
    image_2: string;
}
export interface MaApiBrandImages {
    full?: MaApiBrandImage;
    normal?: MaApiBrandImage;
    medium?: MaApiBrandImage;
    thumb?: MaApiBrandImage;
    mini?: MaApiBrandImage;
}
