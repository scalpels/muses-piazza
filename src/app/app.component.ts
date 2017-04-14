import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, ScreenOrientation} from 'ionic-native';
import { TranslateService } from '@ngx-translate/core';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MusesPiazza {
  rootPage = TabsPage;

  constructor(platform: Platform, translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('zh');
    platform.ready().then(() => {
      if (platform.is('cordova')) {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        StatusBar.styleDefault();
        Splashscreen.hide();
        //lock orientation
        ScreenOrientation.lockOrientation('portrait');
      }

    });
  }
}
