import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Playlist } from '../../model/playlist';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
	
	@Input('items')
	playlists: Playlist[] = []


	@Input()
	selected = null
	

	@Output()
	selectedChange = new EventEmitter<Playlist>()

	select(playlist) {
		this.selected = playlist
		this.selectedChange.emit(playlist)
	}
  constructor() { }

  ngOnInit() {
  }

}
