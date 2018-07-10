import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../model/album';

@Component({
  selector: 'app-album-grid',
  templateUrl: './album-grid.component.html',
  styleUrls: ['./album-grid.component.css']
})
export class AlbumGridComponent implements OnInit {

	@Input()
	albums: Album[] =[
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
			artist:	[
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
  constructor() { }

  ngOnInit() {
  }

}
