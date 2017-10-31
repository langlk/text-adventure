import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable()
export class PlayerService {
  player: Player;

  constructor() { }

  setPlayer(newPlayer: Player) {
    this.player = newPlayer;
  }

  getPlayer() {
    return this.player;
  }
}
