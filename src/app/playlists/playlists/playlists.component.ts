import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../model/playlist';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

	playlists: Playlist[] = [
		{
			id: 123,
			name: 'New hits 123',
			color: '#ff0000',
			favourite: true,
		},
		{
			id: 234,
			name: 'New hits 234',
			color: '#00ff00',
			favourite: false,
		},
		{
			id: 456,
			name: 'New hits 567',
			color: '#0000ff',
			favourite: false,
		}
	];
	selected = null;

	save(playlist) {
		const index = this.playlists.findIndex(
			p => p.id ==playlist.id
		)
		this.playlists.splice(index,1,playlist)
		this.selected = playlist
	}

  constructor() { }

  ngOnInit() {
  }

}
