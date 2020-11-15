import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
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
  }

  onSubmitHandle(): void {
    console.log(this.form.value);
  }
}
