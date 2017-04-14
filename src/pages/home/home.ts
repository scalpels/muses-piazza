import { Component } from '@angular/core';

import { NavController, FabContainer, LoadingController } from 'ionic-angular';

import { ArtifactData } from '../../providers/artifact-data';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	artifacts: any[] = [];

	constructor(
		public navCtrl: NavController,
		public loadingCtrl: LoadingController,
		public artifactData: ArtifactData
	) {}

	ionViewDidLoad() {
		this.artifactData.getArtifacts().subscribe((artifacts: any[]) => {
			this.artifacts = artifacts;
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
