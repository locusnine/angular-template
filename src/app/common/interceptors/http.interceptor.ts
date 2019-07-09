import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from 'src/app/common/services/storage.service';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state';
import { SetBusy, UnsetBusy } from 'src/app/store/actions/common';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class HttpConfigInterceptor implements HttpInterceptor {

  constructor(
    private storage: StorageService,
    private store: Store<IAppState>
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.store.dispatch(new SetBusy())
    const token: string = this.storage.get('token')

    if (token && request.url.includes(environment.apiUrl)) {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
    }

    return next.handle(request).pipe(
      finalize(() => {
        this.store.dispatch(new UnsetBusy())
      })
    );
  }

} 