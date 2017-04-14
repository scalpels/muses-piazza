import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DiscoveryData } from '../../providers/discovery-data';

@Component({
	selector: 'page-discovery',
	templateUrl: 'discovery.html'
})
export class DiscoveryPage {
	discoveries: any[] = [];

	slides = [
		{
			title: "Welcome to the Docs!",
			description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
			image: "assets/img/card-saopaolo.png",
		},
		{
			title: "What is Ionic?",
			description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
			image: "assets/img/card-amsterdam.png",
		},
		{
			title: "What is Ionic Cloud?",
			description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
			image: "assets/img/card-sf.png",
		}
	];

	constructor(
		public navCtrl: NavController,
		public discoveryData: DiscoveryData
	) { }

	ionViewDidLoad() {
		this.discoveryData.getDiscoveries().subscribe((discoveries: any[]) => {
			this.discoveries = discoveries;
		});
	}

}
