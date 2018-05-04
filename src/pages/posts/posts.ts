import { DetailPostPage } from './../detail-post/detail-post';
import { ActionProvider } from './../../providers/action/action';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { posts } from '../../app/posts.interface';

/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-posts',
	templateUrl: 'posts.html'
})
export class PostsPage {
	posts: posts[];

	constructor(public navCtrl: NavController, private actionProvider: ActionProvider) {
		actionProvider.getPosts().subscribe((content) => {
			this.posts = content;
			console.log(this.posts);
		});
	}

	/**
	 * Metodo que redirecciona a la pagina DetailPage y envia como parametro el post
	 * seleccionado
	 * @param post objeto post 
	 */
	goToSecondPage(post: posts): void {
		this.navCtrl.push('DetailPostPage', { currentItem: post });
	}
}
