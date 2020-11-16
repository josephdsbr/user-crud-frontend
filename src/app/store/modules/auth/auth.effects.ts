import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActionsType, AuthSignInFailure, AuthSignInRequest, AuthSignInSuccess} from './auth.actions';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {AuthService} from '../../../services/auth-service/auth.service';
import {of} from 'rxjs';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {UserFetchDataByIdRequest} from '../user/user.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private router: Router,
              private toastr: ToastrService) {
  }

  @Effect()
  authSignInRequest = this.actions$.pipe(
    ofType<AuthSignInRequest>(AuthActionsType.AUTH_SIGN_IN_REQUEST),
    mergeMap(({ payload }) => this.authService.getUserByEmailAndPassword(payload)
      .pipe(
        map(user => new AuthSignInSuccess(user)),
        catchError(err => of(new AuthSignInFailure(err)))
      )),
  );

  @Effect()
  authSignInSuccess = this.actions$.pipe(
    ofType<AuthSignInSuccess>(AuthActionsType.AUTH_SIGN_IN_SUCCESS),
    map(({ payload: { id } }) => new UserFetchDataByIdRequest(id))
  );

  @Effect({ dispatch: false })
  authSignInFailure = this.actions$.pipe(
    ofType<AuthSignInFailure>(AuthActionsType.AUTH_SIGN_IN_FAILURE),
    tap(({ payload }) => this.toastr.warning(payload.error.error))
  );
}
