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
		this.musicService.getAlbums()
			.subscribe(resp => {
				this.albums = resp['albums'].items
			})
	}
	ngOnInit() {
	}

}
