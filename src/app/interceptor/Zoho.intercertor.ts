import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class ZohoInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json',
        'cache-control': 'no-cache',
        'Authorization': `Zoho-oauthtoken 1000.9e053eb8a393c8bf0cd1a5883c50bf4d.133f87ea16d580703ee1d6077eb5b4db`,
      },
    });

    return next.handle(req);
  }
}
