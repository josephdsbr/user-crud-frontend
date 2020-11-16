import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AppState} from '../store';
import {Store} from '@ngrx/store';
import {selectToken} from '../store/modules/auth/auth.selectors';

@Injectable()
export class AuthGuard implements CanActivate {
  token: string;
  constructor(private store: Store<AppState>, private router: Router) {
    this.store.select(selectToken).subscribe(token => this.token = token);
  }
  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.token) {
      return true;
    }

    this.router.navigate(['/']);

    return false;
  }
}
