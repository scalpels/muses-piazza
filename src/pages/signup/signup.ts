import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ViewController, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: { username?: string, password?: string } = {};
  submitted = false;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController,
    public navCtrl: NavController
  ) { }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.navCtrl.push(TabsPage);
    }
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }
}
