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
		path: 'playlist/:id',
		component: PlaylistsComponent
		
	},
	{
		path: 'music',
		component: MusicSearchComponent
	},
	{
		path: "**",
		redirectTo: "music",
		pathMatch: "full"
	}
]

@NgModule({
	imports:[
		RouterModule.forRoot(routes, {
			enableTracing: true,
		})
	],
	exports: [
		RouterModule
	]	
})
export class AppRoutingModule {}