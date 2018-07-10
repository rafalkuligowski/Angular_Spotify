import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	
	authorize() {
		const url = 'https://accounts.spotify.com/authorize';
		const p = new HttpParams({
			fromObject: {
				client_id: '4486acd94c4a463fb6ed96637dac73e8',
				response_type: "token",
				redirect_uri: "http://localhost:4200/"
			}
		});
		console.log( url + '?' + p.toString())
	}
	token = null;

	getToken() {
		if (!this.token) {
			this.authorize()
			return;
		}
	}

  constructor() { }
}
