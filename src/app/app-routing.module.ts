import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultLayoutComponent} from './@layouts/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'pages',
    component: DefaultLayoutComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
