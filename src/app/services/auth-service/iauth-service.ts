import {AuthSignInRequestModel, AuthSignInResponseModel} from '../../models/AuthModel';
import {Observable} from 'rxjs';

export abstract class IAuthService {
  abstract getUserByEmailAndPassword(data: AuthSignInRequestModel): Observable<AuthSignInResponseModel>;
}
