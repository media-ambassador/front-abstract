import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MaApiModuleConfig } from './api-common.model';
export interface MaRequestOptions {
    headers?: HttpHeaders;
    observe?: 'body';
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    body?: any;
}
export declare class MaApiHttpClient {
    protected config: MaApiModuleConfig;
    http: HttpClient;
    protected api: string;
    constructor(config: MaApiModuleConfig, http: HttpClient);
    /**
     * GET request
     * @param {string} endPoint it doesn't need / in front of the end point
     * @param {RequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    get<T>(endPoint: string, options?: MaRequestOptions): Observable<T>;
    /**
     * POST request
     * @param {string} endPoint end point of the api
     * @param {Object} params body of the request.
     * @param {RequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    post<T>(endPoint: string, params: Object, options?: MaRequestOptions): Observable<T>;
    /**
     * PUT request
     * @param {string} endPoint end point of the api
     * @param {Object} params body of the request.
     * @param {RequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    put<T>(endPoint: string, params: Object, options?: MaRequestOptions): Observable<T>;
    /**
     * DELETE request
     * @param {string} endPoint end point of the api
     * @param {RequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    delete<T>(endPoint: string, options?: MaRequestOptions): Observable<T>;
}
export declare function MaApiHttpClientCreator(config: MaApiModuleConfig, http: HttpClient): MaApiHttpClient;
