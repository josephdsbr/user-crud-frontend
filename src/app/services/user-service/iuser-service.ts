import {Observable} from 'rxjs';
import {UserState} from '../../models/UserModel';

export abstract class IuserService {
  abstract getUserDetailsById(id: number): Observable<UserState>;
}
