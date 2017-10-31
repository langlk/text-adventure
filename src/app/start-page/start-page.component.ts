import { Component, OnInit } from '@angular/core';

import { Player } from '../player.model';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  player: Player;
  constructor() { }

  ngOnInit() {
  }

  addPlayer(newPlayer: Player) {
    this.player = newPlayer;
    alert("Welcome, " + this.player.name);
  }
}
