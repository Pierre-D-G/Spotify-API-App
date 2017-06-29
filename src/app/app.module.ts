import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';

import { SpotifyService } from './services/spotify.services';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Navigation/navbar.component';
import { AboutComponent } from './components/About/about.component';
import { SearchComponent } from './components/Search/search.component';
import { ArtistComponent } from './components/Artist/artist.component';
import { AlbumComponent } from './components/Album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
