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
	password: string = '';
	password2: string;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public actionsProvider: ActionProvider,
		public alertCtrl: AlertController
	) {}

	/**
	 * Metodo Register el cual registra a un usuario y valida que las contraseñas y 
	 * el email sean correctos para llevar acabo el registro
	 * @param email email del usuari
	 * @param password password del usuario
	 * @param password2 password2 del usuario
	 */
	Register(email: string, password: string, password2: string) {
		if (password == password2) {
			this.actionsProvider.registerUser(email, password).then(
				(authData) => {
					this.navCtrl.setRoot(HomePage);
				},
				(error) => {
					let alert = this.alertCtrl.create({
						title: 'Error al ingresar!!',
						subTitle: 'Por favor verifique su email',
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
