import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {UserState} from '../../../models/user.model';
import {
  UserActionsType,
  UserFetchDataByIdFailure,
  UserFetchDataByIdRequest,
  UserFetchDataByIdSuccess, UserUpdateFailure, UserUpdateRequest, UserUpdateSuccess
} from './user.actions';
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {UserService} from '../../../services/user-service/user.service';
import {of} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService,
              private toastr: ToastrService, private router: Router) {
  }

  @Effect()
  userFetchDetailsByIdRequest = this.actions$.pipe(
    ofType<UserFetchDataByIdRequest>(UserActionsType.USER_FETCH_DATA_BY_ID_REQUEST),
    mergeMap(({ payload }) => this.userService.getUserDetailsById(payload).pipe(
      map((user) => new UserFetchDataByIdSuccess(user)),
      catchError(err => of(new UserFetchDataByIdFailure(err)))
    ))
  );

  @Effect({ dispatch: false })
  userFetchDetailsByIdSuccess = this.actions$.pipe(
    ofType(UserActionsType.USER_FETCH_DATA_BY_ID_SUCCESS),
    tap(() => this.router.navigate(['/pages/details']))
  );

  @Effect({ dispatch: false })
  userFetchDetailsByIdFailure = this.actions$.pipe(
    ofType<UserFetchDataByIdFailure>(UserActionsType.USER_FETCH_DATA_BY_ID_FAILURE),
    map(({ payload }) => this.toastr.warning(payload.error.error || 'Unexpected Error'))
  );

  @Effect()
  userUpdateRequest = this.actions$.pipe(
    ofType<UserUpdateRequest>(UserActionsType.USER_UPDATE_REQUEST),
    switchMap(({ payload }) => this.userService.updateUser(payload).pipe(
      map(user => new UserUpdateSuccess(user)),
      catchError(err => of(new UserUpdateFailure(err)))
    ))
  );

  @Effect()
  userUpdateFailure = this.actions$.pipe(
    ofType<UserUpdateFailure>(UserActionsType.USER_UPDATE_FAILURE),
    map(({ payload }) => this.toastr.warning(payload.error.error || 'Unexpected Error'))
  );
}
