import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppState} from '../../store';
import {Store} from '@ngrx/store';
import {AuthSignInRequest} from '../../store/modules/auth/auth.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss', './sign-in-mobile.components.scss']
})
export class SignInComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {
    this.form = this.formBuilder.group({
      email: [null, {
        validators: [Validators.required, Validators.email ]
      }],
      password: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  get isValid(): boolean {
    return this.form.valid;
  }

  handleSignIn(): void {
    const data = this.form.value;
    this.store.dispatch(new AuthSignInRequest(data));
  }

}
