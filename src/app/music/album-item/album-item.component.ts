import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../model/album';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  constructor() { }

  @Input()
  album

  ngOnInit() {
  }

}
