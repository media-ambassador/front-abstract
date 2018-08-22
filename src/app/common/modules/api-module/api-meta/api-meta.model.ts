import { MaApiResponse } from '../api-common.model';

export interface MaApiMetaData {
  ss_id: string;
  ss_code: string;
  ss_display_name: string;
  ss_description: string;
  ss_value: string;
  ss_lastmod_date: string;
}

export interface MaApiMetaListResponse extends MaApiResponse {
  data: MaApiMetaData[];
}

export interface MaApiMetaTagResponse extends MaApiResponse {
  data: MaApiMetaData;
}
