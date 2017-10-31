import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from '../player.model';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  player: Player;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addPlayer(newPlayer: Player) {
    this.player = newPlayer;
    alert("Welcome, " + this.player.name);
    this.start();
  }

  start() {
    this.router.navigate(['page', 1]);
  }
}
