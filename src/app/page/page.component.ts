import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Player } from '../player.model';
import { Page } from '../page.model';
import { Option } from '../option.model';
import { PageService } from '../page.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  providers: [PageService]
})
export class PageComponent implements OnInit {
  sub;
  pageID: number;
  page: Page;
  player: Player;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private pageService: PageService,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.player = this.playerService.getPlayer();
    this.sub = this.route.params.subscribe(params => {
      this.pageID = params['id'];
      this.page = this.pageService.findPage(this.pageID);
    });
  }

  goTo(option: Option) {
    this.player.points += option.points;
    this.router.navigate(['page', option.page]);
  }

}
