import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Album } from '../../model/album';

@Component({
	selector: 'app-music-search',
	templateUrl: './music-search.component.html',
	styleUrls: ['./music-search.component.css']
})
export class MusicSearchComponent implements OnInit {
	albums: Album[]
	
	constructor(private musicService: MusicService) {
		this.search("batman");

		this.musicService.getAlbums()
			.subscribe(
				albums => (this.albums = albums)
			);
	}
	search(query) {
		this.musicService
		.getAlbums(query)
		.subscribe(
			albums => (this.albums = albums)
		);		
	}
	ngOnInit() {
	}

}
