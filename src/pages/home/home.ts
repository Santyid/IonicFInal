import { PostsPage } from './../posts/posts';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	constructor(public navCtrl: NavController) {}
	goToSecondPage(): void {
		this.navCtrl.push('PostsPage');
	}
}
