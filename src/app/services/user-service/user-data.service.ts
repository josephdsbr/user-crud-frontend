import {Observable} from 'rxjs';
import {UserRegisterRequestModel, UserState} from '../../models/user.model';

export abstract class UserDataService {
  abstract getUserDetailsById(id: number): Observable<UserState>;
  abstract saveUser(user: UserRegisterRequestModel): Observable<UserState>;
  abstract updateUser(user: UserState): Observable<UserState>;
}
