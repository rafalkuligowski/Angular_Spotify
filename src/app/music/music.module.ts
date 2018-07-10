import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicSearchComponent } from './music-search/music-search.component';
import { MusicFormComponent } from './music-form/music-form.component';
import { MusicGridComponent } from './music-grid/music-grid.component';
import { MusicItemComponent } from './music-item/music-item.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { AlbumGridComponent } from './album-grid/album-grid.component';
import { AlbumItemComponent } from './album-item/album-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MusicSearchComponent, MusicFormComponent, MusicGridComponent, MusicItemComponent, SearchFormComponent, AlbumGridComponent, AlbumItemComponent]
})
export class MusicModule { }
