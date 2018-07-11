import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicSearchComponent } from './music-search/music-search.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { AlbumGridComponent } from './album-grid/album-grid.component';
import { AlbumItemComponent } from './album-item/album-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
	CommonModule,
	HttpClientModule,
	ReactiveFormsModule
  ],
  declarations: [MusicSearchComponent, SearchFormComponent, AlbumGridComponent, AlbumItemComponent],
  exports: [MusicSearchComponent],
  providers:[
	  {
		  provide: 'SEARCH_URL',
		  useValue: 'https://api.spotify.com/v1/search'
	  }
  ]
})
export class MusicModule { }
