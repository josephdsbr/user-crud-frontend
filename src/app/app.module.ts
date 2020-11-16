import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {AuthReducer} from './store/modules/auth/auth.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {PagesModule} from './pages/pages.module';
import {LayoutsModule} from './@layouts/layouts.module';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './store/modules/auth/auth.effects';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserReducer} from './store/modules/user/user.reducer';
import {UserEffects} from './store/modules/user/user.effects';
import {InterceptorsModule} from './interceptors/interceptors.module';
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserAnimationsModule,
    StoreModule.forRoot({
      auth: AuthReducer,
      user: UserReducer
    }),
    StoreDevtoolsModule.instrument({maxAge: 50}),
    EffectsModule.forRoot([AuthEffects, UserEffects]),
    AppRoutingModule,
    PagesModule,
    InterceptorsModule,
    LayoutsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
