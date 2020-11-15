import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { pageRoutes } from './pages.routes';
import { SignInComponent } from './sign-in/sign-in.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import {NgxMaskModule, IConfig} from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    RouterModule.forChild(pageRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options)
  ]
})
export class PagesModule { }
