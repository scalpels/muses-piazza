import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class DiscoveryData {
	discoveries: any;

	constructor(public http: Http) {}

	load(): any {
		if (this.discoveries) {
			return Observable.of(this.discoveries);
		} else {
			return this.http.get('assets/data/discovery.json')
				.map(this.processData, this);
		}
	}

	processData(data: any) {
		this.discoveries = data.json();
		return this.discoveries;
	}

	getDiscoveries() {
		return this.load();
	}

}
