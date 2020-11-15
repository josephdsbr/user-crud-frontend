import {UserState} from '../../../models/UserModel';
import {UserActions, UserActionsType} from './user.actions';
import produce from 'immer';

export const userInitialState: UserState = {} as UserState;

export const UserReducer = (state: UserState = userInitialState, action: UserActions): UserState => {
  return produce(state, draft => {
    switch (action.type) {
      case UserActionsType.USER_FETCH_DATA_BY_ID_SUCCESS:
        return action.payload;
    }
  });
};
