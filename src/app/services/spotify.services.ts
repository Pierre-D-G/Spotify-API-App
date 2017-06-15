import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private clientKey: string = environment.clientKey;
  private clientSecret: string = environment.clientSecret;
  private body: any;


  constructor(private _http: Http) { }

  getAuth = () => {

    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(this.clientKey + ":" + this.clientSecret));
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let params: URLSearchParams = new URLSearchParams();
    params.set('grant_type', 'client_credentials');
    let body = params.toString();

    return this._http.post('https://accounts.spotify.com/api/token', body, { headers: headers })
      .map(res => res.json());

  }
  searchMusic(str: string, type = 'artist', authToken: string) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + authToken);
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
    return this._http.get(this.searchUrl, {headers: headers})
      .map(res => res.json());
  }
}
