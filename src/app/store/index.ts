import {AuthState} from '../models/AuthModel';
import {UserState} from '../models/UserModel';

export interface AppState {
  auth: AuthState;
  user: UserState;
}
