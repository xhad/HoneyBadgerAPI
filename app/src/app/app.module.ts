import { NgModule }                    from '@angular/core';
import { IonicApp, IonicModule }       from 'ionic-angular';
import { MyApp }                       from './app.component';
import { HttpModule, URLSearchParams } from "@angular/http";
import { BrowserTab }                  from '@ionic-native/browser-tab';
import { Deeplinks }                   from '@ionic-native/deeplinks';
import { ComponentsModule }            from "../components/components.module";
import { NavbarComponent }             from "../components/navbar/navbar";

import { AboutPage }                   from '../pages/about/about';
import { AccountConfirmationCodePage } from '../pages/account-confirmation-code/account-confirmation-code';
import { AccountChangePasswordPage }   from '../pages/account-change-password/account-change-password';
import { AccountForgotPasswordPage }   from '../pages/account-forgot-password/account-forgot-password';
import { AccountPage }                 from '../pages/account/account';
import { AccountSigninPage }           from '../pages/account-signin/account-signin';
import { AccountSignupPage }           from '../pages/account-signup/account-signup';
import { BookingsPage }                from '../pages/bookings/bookings';
import { LocationListPage }            from '../pages/location-list/location-list';
import { LocationAddPage }             from '../pages/location-add/location-add';
import { ResourceListPage }            from '../pages/resource-list/resource-list';
import { ResourceAddPage }             from '../pages/resource-add/resource-add';
import { ResourceAvailabilityPage }    from '../pages/resource-availability/resource-availability';
import { TabsPage }                    from '../pages/tabs/tabs';
import { WelcomePage }                 from '../pages/welcome/welcome';
import { BrowserModule }               from "@angular/platform-browser";
import { HttpService }                 from "../services/http-service";
import {
  IamAuthorizerClient,
  CustomAuthorizerClient,
  UserPoolsAuthorizerClient,
  NoAuthorizationClient
} from "../services/spacefinder-api.service";

@NgModule({
  declarations: [
    AccountConfirmationCodePage,
    AccountChangePasswordPage,
    AccountForgotPasswordPage,
    AccountPage,
    AccountSigninPage,
    AccountSignupPage,
    BookingsPage,
    LocationAddPage,
    LocationListPage,
    ResourceAddPage,
    ResourceListPage,
    ResourceAvailabilityPage,
    MyApp,
    TabsPage,
    WelcomePage,
    NavbarComponent
  ],
  imports: [
    HttpModule,
    IonicModule.forRoot(MyApp),
    BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AccountConfirmationCodePage,
    AccountChangePasswordPage,
    AccountForgotPasswordPage,
    AccountPage,
    AccountSigninPage,
    AccountSignupPage,
    BookingsPage,
    LocationAddPage,
    LocationListPage,
    ResourceAddPage,
    ResourceListPage,
    ResourceAvailabilityPage,
    MyApp,
    TabsPage,
    WelcomePage
  ],
  providers: [
    BrowserTab,
    Deeplinks,
    ComponentsModule,
    { provide: HttpService, useClass: HttpService },
    { provide: CustomAuthorizerClient, useClass: CustomAuthorizerClient },
    { provide: IamAuthorizerClient, useClass: IamAuthorizerClient },
    { provide: UserPoolsAuthorizerClient, useClass: UserPoolsAuthorizerClient },
    { provide: NoAuthorizationClient, useClass: NoAuthorizationClient },
  ]
})
export class AppModule {}
