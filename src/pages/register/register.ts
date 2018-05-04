import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ActionProvider } from '../../providers/action/action';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-register',
	templateUrl: 'register.html'
})
export class RegisterPage {
	email: string;
	password: string;
	password2: string;

	validationPassword: string = ' ';

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public actionsProvider: ActionProvider,
		public alertCtrl: AlertController
	) {}

	Register(email: string, password: string, password2: string) {
		if (password == password2) {
			this.actionsProvider.registerUser(email, password).then(
				(authData) => {
					this.navCtrl.setRoot(HomePage);
				},
				(error) => {
					let alert = this.alertCtrl.create({
						title: 'Error al ingresar!!',
						subTitle: 'Por favor verifique sus datos',
						buttons: [ 'Aceptar' ]
					});
					alert.present();
				}
			);
		} else {
			let alert = this.alertCtrl.create({
				title: 'Error of password!',
				subTitle: 'Las contraseñas no coinciden',
				buttons: [ 'Aceptar' ]
			});
			alert.present();
		}
	}
}
