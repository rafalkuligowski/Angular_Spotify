import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Playlist } from 'src/app/model/playlist';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
	
	@Input()
	playlist: Playlist;

  constructor() { }

  ngOnInit() {
  }

  mode = 'show'

  edit() {
	  this.mode = 'edit'
  }
  cancel() {
	  this.mode = 'show'
  }

  @Output()
  onSave = new EventEmitter<Playlist>()

  save(form) {
	const playlist = {
	...this.playlist,
	...form.value
	}
	this.onSave.emit(playlist)
	this.mode = 'show'
	}

}
