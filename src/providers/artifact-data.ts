import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class ArtifactData {
	artifacts: any;

	constructor(public http: Http) {

	}

	load(): any {
		if (this.artifacts) {
			return Observable.of(this.artifacts);
		} else {
			return this.http.get('assets/data/artifacts.json')
				.map(this.processData, this);
		}
	}

	processData(data: any) {
		this.artifacts = data.json();
		return this.artifacts;
	}

	getArtifacts() {
		return this.load();
	}

}
