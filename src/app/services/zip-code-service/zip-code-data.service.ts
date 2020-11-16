import {Observable} from 'rxjs';
import {AddressModel, UserState} from '../../models/user.model';

export abstract class ZipCodeDataService {
  abstract findAddressByZipCode(zipCode: string): Observable<AddressModel>;
}
