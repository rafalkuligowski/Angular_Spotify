import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlaylistsComponent } from "./playlists/playlists/playlists.component";
import { MusicSearchComponent } from "./music/music-search/music-search.component";

const routes:Routes = [
	{
		path: '',
		redirectTo: 'playlist',
		pathMatch: 'full'
	},
	{
		path: 'playlist',
		component: PlaylistsComponent
	},
	{
		path: 'music',
		component: MusicSearchComponent
	}
]

@NgModule({
	imports:[
		RouterModule.forRoot(routes, {
			enableTracing: true,
			useHash: true
		})
	],
	exports: [
		RouterModule
	]	
})
export class AppRoutingModule {}