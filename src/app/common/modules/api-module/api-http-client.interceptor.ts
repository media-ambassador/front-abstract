
import { Injectable, Inject } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { MaApiModuleConfigKey, MaApiModuleConfig } from './api-common.model';

@Injectable()
export class MaApiHttpClientInterceptor implements HttpInterceptor {
  protected tokenName: string;
  protected headerName: string;

  constructor(@Inject(MaApiModuleConfigKey) protected config: MaApiModuleConfig,
              protected cookieService: CookieService) {
      this.tokenName = !!this.config && this.config.cookieSessionToken ? this.config.cookieSessionToken : 'session-token';
      this.headerName = !!this.config && this.config.headerSessionToken ? this.config.headerSessionToken : 'x-jwt-token';
    }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.cookieService.get(this.tokenName);

    if (!!token) {
      const sessionHeader: any = {};
      sessionHeader[this.headerName] = token;

      const modified = req.clone({
        setHeaders: sessionHeader,
        withCredentials: true
      });

      return next.handle(modified);
    } else {
      return next.handle(req);
    }
}

}
