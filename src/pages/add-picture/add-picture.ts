import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionProvider } from '../../providers/action/action';

/**
 * Generated class for the AddPicturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-add-picture',
	templateUrl: 'add-picture.html'
})
export class AddPicturePage {
	base64Image: string = null;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public cameraPlugin: Camera,
		public actionsProvider: ActionProvider,
		public alertCtrl: AlertController
	) {}

	takePicture(): void {
		this.cameraPlugin
			.getPicture({
				quality: 95,
				destinationType: this.cameraPlugin.DestinationType.DATA_URL,
				sourceType: this.cameraPlugin.PictureSourceType.CAMERA,
				allowEdit: true,
				encodingType: this.cameraPlugin.EncodingType.PNG,
				targetWidth: 500,
				targetHeight: 500,
				saveToPhotoAlbum: true
			})
			.then(
				(imageData) => {
					this.base64Image = imageData;
				},
				(error) => {
					let alert = this.alertCtrl.create({
						title: 'Registro Exitoso!!!',
						subTitle: 'Tu registro se hizo correctamente',
						buttons: [ 'Aceptar' ]
					});
					alert.present();
				}
			);
	}
}
