import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Player } from '../player.model';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})

export class PlayerInfoComponent implements OnInit {
  @Output() newPlayer = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addPlayer(name: string, gender: string) {
    var player = new Player(name, gender);
    this.newPlayer.emit(player);
  }
}
