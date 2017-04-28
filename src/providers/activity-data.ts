import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class ActivityData {
	activities: any;

	constructor(public http: Http) {

	}

	load(): any {
		if (this.activities) {
			return Observable.of(this.activities);
		} else {
			return this.http.get('assets/data/activities.json')
				.map(this.processData, this);
		}
	}

	processData(data: any) {
		this.activities = data.json();
		return this.activities;
	}

	getActivities() {
		return this.load();
	}

}
