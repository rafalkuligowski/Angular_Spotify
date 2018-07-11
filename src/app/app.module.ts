import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaylistsModule } from './playlists/playlists.module';
import { MusicModule } from './music/music.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';

@NgModule({
	declarations: [
		AppComponent],
	imports: [
		AppRoutingModule,
		BrowserModule,
		PlaylistsModule,
		MusicModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(private auth:AuthService) {
		this.auth.getToken()
	}
 }
