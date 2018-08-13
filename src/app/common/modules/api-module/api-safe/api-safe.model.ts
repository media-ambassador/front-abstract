import { MaApiResponse } from '../api-common.model';

export interface MaApiSafeCreateResponse extends MaApiResponse {
  data: {
    safe_id: string;
  };
}
