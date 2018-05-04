import { AddPicturePage } from './../add-picture/add-picture';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostsPage } from './../posts/posts';
import { RegisterPage } from './../register/register';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	tab2Root = 'AddPicturePage';
	tab3Root = 'PostsPage';

	constructor(public navCtrl: NavController) {}
}
