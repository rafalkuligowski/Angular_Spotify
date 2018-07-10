import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from '../../model/playlist';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
	
	@Input('items')
	playlists: Playlist[] = []
	selected = null
	select(playlist) {
		this.selected = playlist
	}
  constructor() { }

  ngOnInit() {
  }

}
