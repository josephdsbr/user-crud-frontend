import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { pageRoutes } from './pages.routes';
import { SignInComponent } from './sign-in/sign-in.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import {NgxMaskModule, IConfig} from 'ngx-mask';
import {NgxSpinnerModule} from 'ngx-spinner';
import { UserDetailsComponent } from './user-details/user-details.component';
import {AuthGuard} from '../guards/auth.guard';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [SignInComponent, SignUpComponent, UserDetailsComponent],
  imports: [
    RouterModule.forChild(pageRoutes),
    CommonModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options),
  ],
  providers: [
    AuthGuard
  ]
})
export class PagesModule { }
