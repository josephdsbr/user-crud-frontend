import {Action} from '@ngrx/store';
import {UserState} from '../../../models/UserModel';
import {HttpErrorResponse} from '@angular/common/http';

export enum UserActionsType {
  USER_FETCH_DATA_BY_ID_REQUEST = '[USER] FETCH DATA BY ID REQUEST',
  USER_FETCH_DATA_BY_ID_SUCCESS = '[USER] FETCH DATA BY ID SUCCESS',
  USER_FETCH_DATA_BY_ID_FAILURE = '[USER] FETCH DATA BY ID FAILURE'
}

export class UserFetchDataByIdRequest implements Action {
  readonly type = UserActionsType.USER_FETCH_DATA_BY_ID_REQUEST;
  constructor(public payload: number) {
  }
}

export class UserFetchDataByIdSuccess implements Action {
  readonly type = UserActionsType.USER_FETCH_DATA_BY_ID_SUCCESS;
  constructor(public payload: UserState) {
  }
}

export class UserFetchDataByIdFailure implements Action {
  readonly type = UserActionsType.USER_FETCH_DATA_BY_ID_FAILURE;
  constructor(public payload: HttpErrorResponse) {
  }
}

export type UserActions = UserFetchDataByIdRequest | UserFetchDataByIdSuccess | UserFetchDataByIdFailure;
