import { Injectable } from '@angular/core';

import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { AuthenticationService } from '../_services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{

  constructor(private authenticationService: AuthenticationService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request )
    const currentUser = this.authenticationService.currentUserValue;
    const isLoggedIn = currentUser && currentUser.token;
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isLoggedIn && isApiUrl) {
      debugger;
      request = request.clone({
          setHeaders: {
              Authorization: `Bearer ${currentUser.token}`
          }
      });
  }

  return next.handle(request);
  }
}
