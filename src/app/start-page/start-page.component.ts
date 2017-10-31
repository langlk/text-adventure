import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  player: Player;

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
  }

  addPlayer(newPlayer: Player) {
    this.player = newPlayer;
    this.playerService.setPlayer(this.player);
    this.start();
  }

  start() {
    this.router.navigate(['page', 1]);
  }
}
