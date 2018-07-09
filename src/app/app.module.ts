import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { IntroButtonsComponent } from './intro-buttons/intro-buttons.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageGameComponent } from './page-game/page-game.component';
import {ShikimoriApiService} from './services/shikimori-api.service';
import {JsonpModule} from '@angular/http';

const appRoutes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'game', component: PageGameComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    IntroButtonsComponent,
    PageHomeComponent,
    PageGameComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    ShikimoriApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
