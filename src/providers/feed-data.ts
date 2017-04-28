import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class FeedData {
	feeds: any;

	constructor(public http: Http) {

	}

	load(): any {
		if (this.feeds) {
			return Observable.of(this.feeds);
		} else {
			return this.http.get('assets/data/feeds.json')
				.map(this.processData, this);
		}
	}

	processData(data: any) {
		this.feeds = data.json();
		return this.feeds;
	}

	getFeeds() {
		return this.load();
	}

}
