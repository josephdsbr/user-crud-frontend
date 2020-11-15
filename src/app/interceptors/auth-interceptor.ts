import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {AppState} from "../store";
import {Observable} from "rxjs";
import {selectToken} from "../store/modules/auth/auth.selectors";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token: string;
  constructor(private store: Store<AppState>) {
    this.store.select(selectToken).subscribe(token => this.token = token);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`
        }
      });
    }
    return next.handle(req);
  }
}
