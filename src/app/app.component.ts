import { Component, OnInit } from '@angular/core';

import { Player } from './player.model';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  player: Player;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.player = this.playerService.getPlayer();
  }
}
