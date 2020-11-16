import {AuthSignInRequestModel, AuthSignInResponseModel} from '../../models/auth.model';
import {Observable} from 'rxjs';

export abstract class AuthDataService {
  abstract getUserByEmailAndPassword(data: AuthSignInRequestModel): Observable<AuthSignInResponseModel>;
}
