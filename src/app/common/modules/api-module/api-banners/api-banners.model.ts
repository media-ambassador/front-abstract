import { MaApiResponse } from '../api-common.model';

export interface MaApiBannerData {
  id: string;
  language: string;
  identifier: string;
  file: string;
  type: string;
  url: string;
  target: string;
  place: string;
  html: string;
  title: string;
  description: string;
}

export interface MaApiBannersListResponse extends MaApiResponse {
  data: MaApiBannerData[];
}

export interface MaApiBannerEmission {
  id: string;
  date_from: string;
  date_to: string;
  probability: number;
  active: string;
  banner: MaApiBannerData;
}

export interface MaApiBannerEmissionList {
  id: string;
  identifier: string;
  name: string;
  emissions: MaApiBannerEmission[];
}

export interface MaApiBannersEmissionsListResponse extends MaApiResponse {
  data: MaApiBannerEmissionList[];
}
