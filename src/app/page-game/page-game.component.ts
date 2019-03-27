import { Component, OnInit } from '@angular/core';
import {ShikimoriApiService} from '../services/shikimori-api.service';

@Component({
  selector: 'app-page-game',
  templateUrl: './page-game.component.html',
  styleUrls: ['./page-game.component.css']
})
export class PageGameComponent implements OnInit {

  animeList = null;
  animeIndex = 0;
  animeItem = null;

  constructor(private api: ShikimoriApiService) { }

  ngOnInit() {

    this.api.getAnimes().then(animes => {
      this.animeList = animes;
      this.api.getAnimeItem(animes[0].id).then(animeitem => {
        this.animeItem = animeitem;
      });
    });
  }

  next() {

    this.animeIndex++;
    this.api.getAnimeItem(this.animeList[this.animeIndex].id).then(animeitem => {
      this.animeItem = animeitem;
    });

  }

}
