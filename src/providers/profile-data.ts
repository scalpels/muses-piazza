import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class ProfileData {
	profiles: any;

	constructor(public http: Http) {

	}

	load(): any {
		if (this.profiles) {
			return Observable.of(this.profiles);
		} else {
			return this.http.get('assets/data/profiles.json')
				.map(this.processData, this);
		}
	}

	processData(data: any) {
		this.profiles = data.json();
		return this.profiles;
	}

	getProfiles() {
		return this.load().map((data: any) => {
			return data.sort((a: any, b: any) => {
				let aName = a.name.split(' ').pop();
				let bName = b.name.split(' ').pop();
				return aName.localeCompare(bName);
			});
		});
	}

	getProfile() {
		return this.getProfiles()[0];
	}

}
