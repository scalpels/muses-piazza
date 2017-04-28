import { Component } from '@angular/core';

import { NavController, FabContainer, LoadingController } from 'ionic-angular';

import { FeedData } from '../../providers/feed-data';
import { ActivityData } from '../../providers/activity-data';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	feeds: any[] = [];
	activities:any[] = [];

	constructor(
		public navCtrl: NavController,
		public loadingCtrl: LoadingController,
		public feedData: FeedData,
		public activityData: ActivityData,
	) {}

	ionViewDidLoad() {
		this.feedData.getFeeds().subscribe((feeds: any[]) => {
			this.feeds = feeds;
		});
		this.activityData.getActivities().subscribe((activities: any[]) => {
			this.activities = activities;
		});
	}
	
	openSocial(network: string, fabContainer: FabContainer) {
		let loading = this.loadingCtrl.create({
			content: `Loading to ${network}`,
			duration: (Math.random() * 1000) + 500
		});
		loading.onWillDismiss(() => {
			fabContainer.close();
		});
		loading.present();
	}
}
