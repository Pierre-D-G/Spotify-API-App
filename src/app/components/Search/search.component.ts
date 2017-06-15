import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.services';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [SpotifyService]
})
export class SearchComponent {
  searchStr: string;

  constructor(private _spotifyService: SpotifyService) {

  }
  searchMusic() {
    this._spotifyService.getAuth()
      .subscribe(res => this._spotifyService.searchMusic(this.searchStr, 'artist', res.access_token)
        .subscribe( res => {
          console.log(res.artists)
        })
        )
  };
  getAuth() {
    this._spotifyService.getAuth().subscribe(res => {
      console.log('Success')
      console.log(res);
    })
  };
}
