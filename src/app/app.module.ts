import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { PlayerService } from './player.service';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    PlayerInfoComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
