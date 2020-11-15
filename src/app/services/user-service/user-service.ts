import {Injectable} from '@angular/core';
import {IuserService} from './iuser-service';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {UserState} from '../../models/UserModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IuserService {
  private url = environment.serverUrl;

  constructor(private http: HttpClient) {
  }

  getUserDetailsById(id: number): Observable<UserState> {
    return this.http.get<UserState>(`https://crud-user-example.herokuapp.com/users/${id}`);
  }
}
