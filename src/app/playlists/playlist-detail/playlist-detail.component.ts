import { Component, OnInit, Input } from '@angular/core';
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
  save(form) {
	  console.log('save', form.value)
  }

}
