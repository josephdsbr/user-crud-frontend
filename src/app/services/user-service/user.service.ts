import {Injectable} from '@angular/core';
import {UserDataService} from './user-data.service';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {UserRegisterRequestModel, UserState} from '../../models/user.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserDataService {
  private url = environment.serverUrl;

  constructor(private http: HttpClient) {
  }

  getUserDetailsById(id: number): Observable<UserState> {
    return this.http.get<UserState>(`${this.url}/users/${id}`);
  }

  saveUser(user: UserRegisterRequestModel): Observable<UserState> {
    return this.http.post<UserState>(`${this.url}/users`, user);
  }

  updateUser(user: UserState): Observable<UserState> {
    return this.http.put<UserState>(`${this.url}/users`, user);
  }
}
