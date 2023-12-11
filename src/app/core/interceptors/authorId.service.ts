// http-interceptor.service.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthorIdInterceptorService implements HttpInterceptor {
  private readonly AUTHOR_ID = environment.authorId;
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        authorId: this.AUTHOR_ID,
      },
    });
    return next.handle(modifiedReq);
  }
}
