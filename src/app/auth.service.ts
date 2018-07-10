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
		window.location.replace( url + '?' + p.toString() )
	}
	token = null;

	getToken() {
		const hash = window.location.hash.substr(1)
		if(hash) {
			const p = new HttpParams({
				fromString: hash
			})
			this.token = p.get('access_token')
		}

		if (!this.token) {
			this.authorize()
			return;
		}
		return this.token;
	}

  constructor() { }
}
