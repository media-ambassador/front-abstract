import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { MaApiModuleConfig } from './api-common.model';
export declare class MaApiHttpClientInterceptor implements HttpInterceptor {
    protected config: MaApiModuleConfig;
    protected cookieService: CookieService;
    protected tokenName: string;
    protected headerName: string;
    constructor(config: MaApiModuleConfig, cookieService: CookieService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
