import { Component, Input,ViewChild, ElementRef } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { NavController } from 'ionic-angular';

declare var Caman: any;

@Component({
	selector: 'page-contact',
	templateUrl: 'contact.html'
})
export class ContactPage {

   @Input() barcode: string;

	@ViewChild('mapCanvas') mapElement: ElementRef;
	constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) { }

	ionViewDidLoad() {
		let theEle = this.mapElement.nativeElement;
		Caman('#map_canvas', function() {
		    // this.brightness(50);
		    // this.contrast(30);
		    this.sepia(60);
		    // this.saturation(-30);
		    this.render();
		});
	}

	generateBarcode() {
		this.barcodeScanner.scan().then((theBarcode) => {
			this.barcode = theBarcode;
		}, (err) => {
			// An error occurred
		});
	}


}
