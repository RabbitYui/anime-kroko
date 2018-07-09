import { Component, OnInit } from '@angular/core';
import {ShikimoriApiService} from '../services/shikimori-api.service';

@Component({
  selector: 'app-page-game',
  templateUrl: './page-game.component.html',
  styleUrls: ['./page-game.component.css']
})
export class PageGameComponent implements OnInit {

  animes = null;
  animeIndex = 0;

  constructor(private api: ShikimoriApiService) { }

  ngOnInit() {

    this.api.getAnimes().then(animes => {
      console.log(animes);
      this.animes = animes;
    });
  }

  next() {

    this.animeIndex++;
  }

}
