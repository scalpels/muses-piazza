import { Component, Input } from '@angular/core';

import { ImagePicker } from 'ionic-native';
import { NavController } from 'ionic-angular';


import { NotificationData } from '../../providers/notification-data';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  @Input() imgs: string[];
  notification: string;

  notifications: any[] = [];


  constructor(
    public navCtrl: NavController,
    public notificationData: NotificationData
  ) { }

  ionViewDidLoad() {
    this.notification = 'message';
    this.notificationData.getNotifications().subscribe((notifications: any[]) => {
      this.notifications = notifications;
    });
  }

  swithNotification() {

  }

  test() {
    ImagePicker.getPictures({}).then((results) => {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
      }
      this.imgs = results;
    }, (err) => {
      console.log('the err: ' + err);
    });
  }

}







