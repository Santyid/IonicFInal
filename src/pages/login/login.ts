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
	email: string;
	password: string;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public actionsProvider: ActionProvider,
		public alertCtrl: AlertController
	) {}

	Login(email: string, password: string) {
		this.actionsProvider.loginUser(email, password).then(
			(authData) => {
				this.navCtrl.setRoot(HomePage);
			},
			(error) => {
				let alert = this.alertCtrl.create({
					title: 'error al ingresar, por favor verifique sus datos',
					subTitle: 'ERROR!',
					buttons: [ 'Aceptar' ]
				});
				alert.present();
			}
		);
	}
}
