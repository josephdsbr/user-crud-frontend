import {Routes} from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {AuthGuard} from "../guards/auth.guard";

const pageRoutes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'details',
    component: UserDetailsComponent,
    canActivate: [AuthGuard]
  }
];

export { pageRoutes };
