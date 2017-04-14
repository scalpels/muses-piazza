import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class NotificationData {

	notifications: any;

	constructor(public http: Http) {}

	load(): any {
		if (this.notifications) {
			return Observable.of(this.notifications);
		} else {
			return this.http.get('assets/data/notifications.json')
				.map(this.processData, this);
		}
	}

	processData(data: any) {
		this.notifications = data.json();
		return this.notifications;
	}

	getNotifications() {
		return this.load();
	}
}
