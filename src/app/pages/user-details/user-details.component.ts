import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';
import {selectUser} from '../../store/modules/user/user.selectors';
import {UserState} from '../../models/user.model';
import {UserUpdateRequest} from '../../store/modules/user/user.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss', './user-details-mobile.component.scss']
})
export class UserDetailsComponent implements OnInit {
  form: FormGroup;
  user: UserState;
  editable = false;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router) {
    this.store.select(selectUser).subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [this.user?.id, Validators.required],
      name: [this.user?.name, Validators.required] ,
      email: [this.user?.email, { validators: [Validators.required, Validators.email] }],
      phone: [this.user?.phone, { validators: [Validators.required, Validators.minLength(11)] }],
      password: [null, Validators.required],
      address: this.formBuilder.group({
        street: [this.user?.address?.street, Validators.required],
        number: [this.user?.address?.number, Validators.required],
        complement: [this.user?.address?.complement],
        district: [this.user?.address?.district, Validators.required],
        zipCode: [this.user?.address?.zipCode, Validators.required],
        city: [this.user?.address?.city, Validators.required],
        state: [this.user?.address?.state, Validators.required]
      })
    });
    this.form.disable();
  }

  get isValid(): boolean {
    return this.form.valid || this.isDisabled;
  }

  get isDisabled(): boolean {
    return this.form.disabled;
  }

  handleSubmit(): void {
    if (this.isDisabled) {
      this.form.enable();
      return;
    }

    const user = this.form.value;
    this.store.dispatch(new UserUpdateRequest(user));
    this.form.disable();
  }

  handleGoBack(): void {
    if (this.isDisabled) {
      this.router.navigate(['./..']);
      return;
    }

    this.form.disable();
  }
}
