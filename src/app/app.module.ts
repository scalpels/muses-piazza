import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MusesPiazza } from './app.component';
import { MenuPage } from '../pages/menu/menu';
import { DiscoveryPage } from '../pages/discovery/discovery';
import { NotificationPage } from '../pages/notification/notification';
import { NavigationPage } from '../pages/navigation/navigation';
import { NavigationDetailsPage } from '../pages/navigation/navigationDetails';
import { ContactPage } from '../pages/contact/contact';
import { ProfilePage } from '../pages/profile/profile';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { ArtifactData } from '../providers/artifact-data';
import { ProfileData } from '../providers/profile-data';
import { DiscoveryData } from '../providers/discovery-data';
import { NotificationData } from '../providers/notification-data';

export function musesPiazzaTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MusesPiazza,
    MenuPage,
    DiscoveryPage,
    NotificationPage,
    NavigationPage,
    NavigationDetailsPage,
    ContactPage,
    ProfilePage,
    SigninPage,
    SignupPage,
    HomePage,
    TabsPage
  ],
  imports: [
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: musesPiazzaTranslateLoader,
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MusesPiazza)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MusesPiazza,
    MenuPage,
    DiscoveryPage,
    NotificationPage,
    NavigationPage,
    NavigationDetailsPage,
    ContactPage,
    ProfilePage,
    SigninPage,
    SignupPage,
    HomePage,
    TabsPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BarcodeScanner,
    ArtifactData,
    ProfileData,
    DiscoveryData,
    NotificationData
  ]
})
export class AppModule { }
