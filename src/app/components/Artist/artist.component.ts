import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.services';

import { ActivatedRoute } from '@angular/router';

import { Artist } from '../../models/Artist';
import { Album } from '../../models/Album';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
  providers: [SpotifyService]
})
export class ArtistComponent implements OnInit {

  id: string;
  artist: Artist[];
  albums: Album[];
  constructor(private _spotifyService: SpotifyService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getAuth()
          .subscribe(res => {
            this._spotifyService.getArtist(id, res.access_token)
              .subscribe(artist => {
                this.artist = artist;
              });
          });
      });
  }
}

