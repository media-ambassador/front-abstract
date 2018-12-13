import { MaApiResponse } from '../api-common.model';
export interface MaApiBannerData {
    id: string;
    language: string;
    identifier: string;
    file: string;
    file_tablet_vertical?: string;
    file_mobile_vertical?: string;
    type: string;
    url: string;
    target: string;
    place: string;
    html: string;
    title: string;
    description: string;
    slogan?: string;
}
export interface MaApiBannersListResponse<T extends MaApiBannerData> extends MaApiResponse {
    data: T[];
}
export interface MaApiBannerEmission<T extends MaApiBannerData> {
    id: string;
    date_from: string;
    date_to: string;
    probability: number;
    active: string;
    banner: T;
}
export interface MaApiBannerEmissionList<T extends MaApiBannerEmission<MaApiBannerData>> {
    id: string;
    identifier: string;
    name: string;
    emissions: T[];
}
export interface MaApiBannersEmissionsListResponse<T extends MaApiBannerEmissionList<MaApiBannerEmission<MaApiBannerData>>> extends MaApiResponse {
    data: T[];
}
