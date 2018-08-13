
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { MaApiModuleConfigKey, MaApiModuleConfig } from './api-common.model';

export interface MaRequestOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
}

@Injectable()
export class MaApiHttpClient {
  private api: string;

  // Extending the HttpClient through the Angular DI.
  public constructor(@Inject(MaApiModuleConfigKey) private config: MaApiModuleConfig,
                     public http: HttpClient) {
    this.api = this.config.api;
  }

  /**
   * GET request
   * @param {string} endPoint it doesn't need / in front of the end point
   * @param {RequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public get<T>(endPoint: string, options?: MaRequestOptions): Observable<T> {
    return this.http.get<T>(this.api + endPoint, options);
  }

  /**
   * POST request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {RequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public post<T>(endPoint: string, params: Object, options?: MaRequestOptions): Observable<T> {
    return this.http.post<T>(this.api + endPoint, params, options);
  }

  /**
   * PUT request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {RequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public put<T>(endPoint: string, params: Object, options?: MaRequestOptions): Observable<T> {
    return this.http.put<T>(this.api + endPoint, params, options);
  }

  /**
   * DELETE request
   * @param {string} endPoint end point of the api
   * @param {RequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public delete<T>(endPoint: string, options?: MaRequestOptions): Observable<T> {
    return this.http.delete<T>(this.api + endPoint, options);
  }
}

export function maApiHttpClientCreator(config: MaApiModuleConfig, http: HttpClient) {
  return new MaApiHttpClient(config, http);
}
