import {Injectable} from '@angular/core';
import {IAuthService} from './iauth-service';
import {AuthSignInRequestModel, AuthSignInResponseModel} from '../../models/AuthModel';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService{
  private url = environment.serverUrl;

  constructor(private http: HttpClient) {
  }

  getUserByEmailAndPassword(data: AuthSignInRequestModel): Observable<AuthSignInResponseModel> {
    return this.http.post<AuthSignInResponseModel>(`https://crud-user-example.herokuapp.com/sign-in`, data );
  }
}
