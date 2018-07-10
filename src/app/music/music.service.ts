import { Injectable, Inject } from '@angular/core';
import { Album } from '../model/album';

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

	getAlbums() {
		return this.albums;
	}
	constructor(
		@Inject('SEARCH_URL')
		private url: string
	) { }
}
