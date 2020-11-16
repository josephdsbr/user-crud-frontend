import {Routes} from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {UserDetailsComponent} from "./user-details/user-details.component";

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
    component: UserDetailsComponent
  }
];

export { pageRoutes };
