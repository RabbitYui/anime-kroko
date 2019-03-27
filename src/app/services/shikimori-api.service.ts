import { Injectable } from '@angular/core';
import {Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ShikimoriApiService {

  host = 'https://shikimori.org';

  constructor(
    private http: HttpClient,
  ) { }

  get(url: string, params = null): Promise<any> {

    const urlParams = [];

    if (params) {

      Object.keys(params).forEach(key => {
        urlParams.push(`${key}=${params[key]}`);
      });
      url += '?' + urlParams.join('&');
    }

    return this.http.jsonp(this.host + url, 'callback')
      .toPromise()
      .then(response => response)
      .catch((response: any) => {
        console.error(response);
      });
  }

  getAnimes() {

    const params = {
      limit: 100,
      order: 'popularity'
    };

    return this.get(`/api/animes`, params);
  }

  getAnimeItem(id) {
    return this.get(`/api/animes/` + id);
  }

}
