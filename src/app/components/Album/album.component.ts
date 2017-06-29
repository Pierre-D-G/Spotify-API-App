import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.services';

import { ActivatedRoute } from '@angular/router';

import { Artist } from '../../models/Artist';
import { Album } from '../../models/Album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  providers: [SpotifyService]
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Album[];
  constructor(private _spotifyService: SpotifyService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getAuth()
          .subscribe(res => {
            this._spotifyService.getAlbum(id, res.access_token)
              .subscribe(album => {
                console.log(album)
                this.album = album;
              });
          });
      });
  }

}
