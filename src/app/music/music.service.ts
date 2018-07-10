import { Injectable, Inject } from '@angular/core';
import { Album } from '../model/album';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Injectable({
	providedIn: 'root'
})
export class MusicService {

	albums: Album[] = [
		{
			id: '11',
			name: 'test 1',
			artist:
				[{
					id: '22',
					name: 'Artist 1'
				}],
			images: [
				{
					url: 'przyklad',
					width: 300,
					height: 300
				}]
		},
		{
			id: '22',
			name: 'test 2',
			artist: [
				{
					id: '22',
					name: 'Artist 1'
				}
			],
			images: [
				{
					url: 'przyklad2',
					width: 300,
					height: 300
				}
			]
		}
	]

	getAlbums(query = 'cos') {
		const token = this.auth.getToken()
		if(!token) {
			return
		}
		this.http.get(this.url,{
			headers:{
				Authorization: 'Bearer '+token
			},
			params:{
				type: 'album',
				q: query
			}
		}).subscribe(resp => {
			console.log('odpowiedz', resp)
		})
		return this.albums

	}
	constructor(
		@Inject('SEARCH_URL') private url: string,
		private http:HttpClient,
		private auth: AuthService
	) { }
}
