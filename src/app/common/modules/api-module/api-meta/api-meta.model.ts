import { MaApiResponse } from '../api-common.model';

export interface MaApiMetaData {
  ss_id?: string;
  ss_code?: string;
  ss_display_name?: string;
  ss_description?: string;
  ss_value?: string;
  ss_lastmod_date?: string;
}

export interface MaApiMetaListResponse<T extends MaApiMetaData> extends MaApiResponse {
  data: T[];
}

export interface MaApiMetaTagResponse<T extends MaApiMetaData> extends MaApiResponse {
  data: T;
}

export interface MaApiSeo {
  description?: string;
  keywords?: string;
  nofollow?: string;
  noindex?: string;
  title?: string;
  url?: string;
  canonical?: string;
}
