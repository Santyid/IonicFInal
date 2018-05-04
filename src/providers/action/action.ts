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

	/**
	 * Metodo el cual obtiene todos los post del Json
	 */
	getPosts() {
		return this.http.get<posts[]>(this.urlPost);
	}

	/**
	 * Metodo Login usuario el cual logea al usuario 
	 * @param email email del usuario
	 * @param password password del usuario
	 */
	loginUser(email: string, password: string) {
		return this.afAth.auth.signInWithEmailAndPassword(email, password);
	}

	/**
	 * Metodo para registrar un usuario el cual recibe los datos del usuario y los guarda 
	 * en la base de datos
	 * @param email email del usuario
	 * @param password password del usuario
	 */
	registerUser(email: string, password: string) {
		return this.afAth.auth.createUserWithEmailAndPassword(email, password).then((user) => {
			const id = this.db.createId();
			this.db.collection('user').doc(id).set({ id, email, password });
		});
	}
}
