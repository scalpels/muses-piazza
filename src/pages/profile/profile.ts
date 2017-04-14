import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SigninPage } from '../signin/signin';

import { ProfileData } from '../../providers/profile-data';

@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html'
})
export class ProfilePage {
	profile: any[] = [];

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public profileData: ProfileData
	) { }

	ionViewDidLoad() {
		this.profileData.getProfiles().subscribe((profiles: any[]) => {
			this.profile = profiles[0];
		});
	}
   
   goToSignin() {
    this.navCtrl.push(SigninPage);
  }
   goToSignup() {
  }
}
