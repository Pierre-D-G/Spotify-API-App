import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;
  private clientId: string = environment.clientId;
  private clientSecret: string = environment.clientSecret;
  private body: any;


  constructor(private _http: Http) { }


  // Get access token from Spotify to use API
  getAuth = () => {

    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(this.clientId + ":" + this.clientSecret));
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let params: URLSearchParams = new URLSearchParams();
    params.set('grant_type', 'client_credentials');
    let body = params.toString();

    return this._http.post('https://accounts.spotify.com/api/token', body, { headers: headers })
      .map(res => res.json());

  }

  // Get search results for a query
  searchMusic(query: string, type = 'artist', authToken: string) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + authToken);

    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + query + '&offset=0&limit=20&type=' + type + '&market=US';

    return this._http.get(this.searchUrl, { headers: headers })
      .map(res => res.json());
  }

  // Get data about artist that has been chosen to view
  getArtist(id: string, authToken: string) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + authToken);

    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;

    return this._http.get(this.artistUrl, { headers: headers })
      .map(res => res.json());
  }

  // Get the albums about the artist that has been chosen
  getAlbums(id: string, authToken: string) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + authToken);

    this.albumsUrl = 'https://api.spotify.com/v1/artists/' + id + '/albums?market=US&album_type=single';

    return this._http.get(this.albumsUrl, { headers: headers })
      .map(res => res.json());
  }

  // Get Tracks in ablum selected
   getAlbum(id: string, authToken: string) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + authToken);

    this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;

    return this._http.get(this.albumUrl, { headers: headers })
      .map(res => res.json());
  }
}
