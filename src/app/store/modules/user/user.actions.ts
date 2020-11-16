import {Action} from '@ngrx/store';
import {UserState} from '../../../models/user.model';
import {HttpErrorResponse} from '@angular/common/http';

export enum UserActionsType {
  USER_FETCH_DATA_BY_ID_REQUEST = '[USER] FETCH DATA BY ID REQUEST',
  USER_FETCH_DATA_BY_ID_SUCCESS = '[USER] FETCH DATA BY ID SUCCESS',
  USER_FETCH_DATA_BY_ID_FAILURE = '[USER] FETCH DATA BY ID FAILURE',
  USER_UPDATE_REQUEST = '[USER] UPDATE REQUEST',
  USER_UPDATE_SUCCESS = '[USER] UPDATE SUCCESS',
  USER_UPDATE_FAILURE = '[USER] UPDATE FAILURE'
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

export class UserUpdateRequest implements Action {
  readonly type = UserActionsType.USER_UPDATE_REQUEST;
  constructor(public payload: UserState) {
  }
}

export class UserUpdateSuccess implements Action {
  readonly type = UserActionsType.USER_UPDATE_SUCCESS;
  constructor(public payload: UserState) {
  }
}

export class UserUpdateFailure implements Action {
  readonly type = UserActionsType.USER_UPDATE_FAILURE;
  constructor(public payload: HttpErrorResponse) {
  }
}

export type UserActions = UserFetchDataByIdRequest | UserFetchDataByIdSuccess | UserFetchDataByIdFailure |
  UserUpdateRequest | UserUpdateSuccess | UserUpdateFailure;
