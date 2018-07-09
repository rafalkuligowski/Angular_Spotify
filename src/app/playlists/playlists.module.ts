import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists/playlists.component';
import { ItemListComponent } from './item-list/item-list.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { PlaylistItemComponent } from './playlist-item/playlist-item.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';

import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
	CommonModule,
	FormsModule
  ],
  declarations: [PlaylistsComponent, ItemListComponent, PlaylistListComponent, PlaylistItemComponent, PlaylistDetailComponent],
  exports:[PlaylistsComponent]
})
export class PlaylistsModule { }
