import {Injectable} from '@angular/core';
import {AuthDataService} from './auth-data.service';
import {AuthSignInRequestModel, AuthSignInResponseModel} from '../../models/auth.model';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthDataService{
  private url = environment.serverUrl;

  constructor(private http: HttpClient) {
  }

  getUserByEmailAndPassword(data: AuthSignInRequestModel): Observable<AuthSignInResponseModel> {
    return this.http.post<AuthSignInResponseModel>(`https://crud-user-example.herokuapp.com/sign-in`, data );
  }
}
