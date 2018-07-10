import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../model/playlist';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

	playlists: Playlist[] = [
		{
			id: 123,
			name: 'New hit 123',
			color: '#ff0000',
			favourite: true,
		},
		{
			id: 234,
			name: 'New hit 234',
			color: '#00ff00',
			favourite: false,
		},
		{
			id: 456,
			name: 'New hit 567',
			color: '#0000ff',
			favourite: false,
		}
	];
  constructor() { }

  ngOnInit() {
  }

}
