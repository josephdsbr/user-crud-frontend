import {AuthState} from '../../../models/auth.model';
import {AuthActions, AuthActionsType} from './auth.actions';
import produce from 'immer';

export const authInitialState: AuthState = {
  email: null, token: null, loading: false
};

export const AuthReducer = (state: AuthState = authInitialState, action: AuthActions) => {
  return produce(state, draft => {
    switch (action.type) {
      case AuthActionsType.AUTH_SIGN_IN_REQUEST:
        draft.loading = true;
        break;
      case AuthActionsType.AUTH_SIGN_IN_SUCCESS:
        const user = action.payload;
        draft.email = user.email;
        draft.token = user.token;
        draft.loading = false;
        break;
      case AuthActionsType.AUTH_SIGN_IN_FAILURE:
        draft.loading = false;
        break;
    }
  });
};
