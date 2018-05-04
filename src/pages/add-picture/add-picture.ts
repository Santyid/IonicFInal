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
	base64Image: string = '';
	image2: string = 'assets/imgs/perfil.jpg';

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public cameraPlugin: Camera,
		public actionsProvider: ActionProvider,
		public alertCtrl: AlertController
	) {}

	/**
	 * Metodo take picture que toma la foto y la guarda en la galeria del disposito
	 * Tambien guardar en una variable para mostrarla en la pagina principal
	 */
	takePicture(): void {
		this.cameraPlugin
			.getPicture({
				quality: 100,
				destinationType: this.cameraPlugin.DestinationType.DATA_URL,
				sourceType: this.cameraPlugin.PictureSourceType.CAMERA,
				encodingType: this.cameraPlugin.EncodingType.PNG,
				targetWidth: 500,
				targetHeight: 500,
				saveToPhotoAlbum: true
			})
			.then(
				(imageData) => {
					// imageData is either a base64 encoded string or a file URI
					// If it's base64:
					this.base64Image = 'data:image/jpeg;base64,' + imageData;
				},
				(error) => {
					let alert = this.alertCtrl.create({
						title: 'Error al ingresa',
						subTitle: 'ERROR!',
						buttons: [ 'Aceptar' ]
					});
					alert.present();
				}
			);
	}
}
