import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { SigninPage } from '../signin/signin';
import { ProfilePage } from '../profile/profile';

@Component({
	selector: 'page-menu',
	templateUrl: 'menu.html'
})
export class MenuPage {

	constructor(public modalCtrl: ModalController, public navCtrl: NavController) {

	}

	goToSignin() {
		let signinModal = this.modalCtrl.create(SigninPage);
		signinModal.present();
	}

	goToSignup() {
		let signupModal = this.modalCtrl.create(SignupPage);
		signupModal.present();
	}

	goToProfile() {
		this.navCtrl.push(ProfilePage);
	}

}