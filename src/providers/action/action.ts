import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { posts } from '../../app/posts.interface';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

/*
  Generated class for the ActionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActionProvider {
	urlPost = 'http://jsonplaceholder.typicode.com/posts';

	constructor(
		public http: HttpClient,
		private db: AngularFirestore,
		public afAth: AngularFireAuth
	) {}

	getPosts() {
		return this.http.get<posts[]>(this.urlPost);
	}

	loginUser(email: string, password: string) {
		return this.afAth.auth.signInWithEmailAndPassword(email, password);
	}
}
