import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { posts } from '../../app/posts.interface';

/*
  Generated class for the ActionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActionProvider {
	urlPost = 'http://jsonplaceholder.typicode.com/posts';

	constructor(public http: HttpClient) {}

	getPosts() {
		return this.http.get<posts[]>(this.urlPost);
	}
}
