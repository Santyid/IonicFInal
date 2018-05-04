import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { posts } from '../../app/posts.interface';

/**
 * Generated class for the DetailPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-detail-post',
	templateUrl: 'detail-post.html'
})
export class DetailPostPage {
	//Variable posts para cargar el detalle del post
	posts: posts;
	/**
	 * Contructor que recibe los parametros enviados por la pagina PostPage
	 * @param navCtrl Recibe los parametros de la ventana pasada
	 * @param navParams 
	 */
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.posts = navParams.get('currentItem');
	}
}
