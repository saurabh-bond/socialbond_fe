import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class OrderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authLocalStorageToken = `${environment.authTokenName}`;
    const token: any = localStorage.getItem(authLocalStorageToken);

    if (token) {
      req = req.clone({
        headers: req.headers.set('x-auth-token', token)
      });
    }
    return next.handle(req);
  }
}
