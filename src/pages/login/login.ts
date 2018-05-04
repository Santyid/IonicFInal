import { RegisterPage } from './../register/register';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ActionProvider } from '../../providers/action/action';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	email: string = '';
	password: string;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public actionsProvider: ActionProvider,
		public alertCtrl: AlertController
	) {}

	goToRegister() {
		this.navCtrl.push('RegisterPage');
	}

	Login(email: string, password: string) {
		if (email == '') {
			let alert = this.alertCtrl.create({
				title: 'Error al ingresar!!',
				subTitle: 'Por favor ingrese un correo',
				buttons: [ 'Aceptar' ]
			});
			alert.present();
		} else {
			this.actionsProvider.loginUser(email, password).then(
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
		}
	}
}
