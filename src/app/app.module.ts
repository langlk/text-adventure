import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { PlayerInfoComponent } from './player-info/player-info.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    PlayerInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
