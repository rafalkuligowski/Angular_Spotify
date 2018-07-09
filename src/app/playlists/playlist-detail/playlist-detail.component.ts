import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/model/playlist';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {

	playlist: Playlist = {
		id: 123,
		name: 'New hit',
		color: '#ff0000',
		favourite: true,
	};

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
  save() {
	  console.log('save')
  }

}
