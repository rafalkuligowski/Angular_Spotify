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

		localStorage.removeItem("token")

		window.location.replace( url + '?' + p.toString() )
	}
	token = null;

	getToken() {
		this.token = JSON.parse(localStorage.getItem('token'))
		if (this.token) {
			return this.token;
		}

		const hash = window.location.hash.substr(1)
		window.location.hash = "";

		if(hash) {
			const p = new HttpParams({
				fromString: hash
			})
			this.token = p.get('access_token')

			if (this.token) {
				localStorage.setItem("token", JSON.stringify(this.token))
				return this.token;
			}
		}

			this.authorize()
			return;
	}

  constructor() { }
}
