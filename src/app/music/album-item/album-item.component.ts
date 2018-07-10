import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {

	//testowe dane
	albums: Album[] = [
		{
			id: '123',
			name: "Placki",
			artist: [],
			images: [
			{
				url: "www.www.ww"
				width: 300,
				hei
			}
			]
		}
	]
  constructor() { }

  ngOnInit() {
  }

}
