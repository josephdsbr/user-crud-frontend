import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ZipCodeService} from '../../services/zip-code-service/zip-code.service';
import {AddressModel, UserRegisterRequestModel, UserState} from '../../models/user.model';
import {UserService} from '../../services/user-service/user.service';
import {UserRegisterRequestValidator} from '../../validators/user-register-request-validator';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss', './sign-up-mobile.components.scss']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService,
              private zipCodeService: ZipCodeService, private toastr: ToastrService,
              private router: Router) {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, { validators: [Validators.required, Validators.email] }],
      password: [null, Validators.required ],
      phone: [null, { validators: [Validators.required, Validators.minLength(11)] }],
      address: this.formBuilder.group({
        street: [null, Validators.required],
        number: [null, Validators.required],
        complement: [null],
        district: [null, Validators.required],
        zipCode: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required]
      })
    });
  }

  ngOnInit(): void {
    this.handleZipCode();
  }

  get isValid(): boolean {
    return this.form.valid;
  }

  handleZipCode(): void {
    const zipCode = (this.form.controls?.address as FormGroup)?.controls?.zipCode;

    zipCode.statusChanges.subscribe(status => {
      if (status === 'VALID') {
        this.zipCodeService.findAddressByZipCode(zipCode.value)
          .subscribe(address => this.handleZipCodeServiceResult(address));
      }
    });
  }

  handleZipCodeServiceResult(address: AddressModel): void {
    const addressForm = (this.form.controls?.address as FormGroup);

    const actualAddress = addressForm.value;
    const serializedAddress = Object.assign(actualAddress, address) as AddressModel;

    addressForm.controls.street.setValue(serializedAddress.street);
    addressForm.controls.complement.setValue(serializedAddress.complement);
    addressForm.controls.district.setValue(serializedAddress.district);
    addressForm.controls.city.setValue(serializedAddress.city);
    addressForm.controls.state.setValue(serializedAddress.state);
  }

  onSubmitHandle(): void {
    const user = this.form.value;
    UserRegisterRequestValidator.validate(user)
      .then(validatedUser => this.userService.saveUser(validatedUser)
        .pipe(
          map(() => this.toastr.success('Cadastro realizado com sucesso.', 'Sucesso')),
          tap(() => this.router.navigate(['/pages/sign-in'])),
          catchError(err => of(this.toastr.warning(err.message)))
        )
        .subscribe()
      )
      .catch(err => this.toastr.warning('Ocorreu um erro'));
  }
}
