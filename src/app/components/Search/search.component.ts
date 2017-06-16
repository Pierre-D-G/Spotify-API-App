import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.services';
import { FormControl } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [SpotifyService]
})
export class SearchComponent implements OnInit {
  searchStr: string;
  results: any[] = [];
  query: FormControl = new FormControl();

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
    this.query.valueChanges
      .debounceTime(1000)
      .distinctUntilChanged()
      .subscribe(query => this._spotifyService.getAuth()
        .subscribe(res => this._spotifyService.searchMusic(query, 'artist', res.access_token).subscribe(
          res => {
            console.log(res.artists)
          })
        ));
  }
}
