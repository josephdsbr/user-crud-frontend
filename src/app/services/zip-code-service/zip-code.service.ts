import {Injectable} from '@angular/core';
import {ZipCodeDataService} from './zip-code-data.service';
import {AddressModel} from '../../models/user.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ZipCodeResponseModel} from '../../models/zip-code.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ZipCodeService implements ZipCodeDataService {
  private url = environment.zipCodeApiUrl;

  constructor(private http: HttpClient) {
  }

  findAddressByZipCode(zipCode: string): Observable<AddressModel> {
    return this.http
      .get<ZipCodeResponseModel>(`${this.url}/${zipCode}/json/`)
      .pipe(map(address => ({
          complement: address.complemento,
          city: address.localidade,
          district: address.bairro,
          state: address.uf,
          street: address.logradouro
        } as AddressModel)));
  }

}
