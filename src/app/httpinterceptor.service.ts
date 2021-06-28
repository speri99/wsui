import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token")
      if (!!token) {
        req = req.clone({
          setHeaders: {
            token: token
          }
        })
        req.body.token=token;
      }
    return next.handle(req).pipe(
      filter(event => event instanceof HttpResponse),
      map((event: HttpResponse<any>)=>
      {

        console.log(event);
        return event;

      })
    )
  }
}
