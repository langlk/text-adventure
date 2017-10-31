import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Player } from '../player.model';
import { Page } from '../page.model';
import { PageService } from '../page.service';

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private pageService: PageService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.pageID = params['id'];
      this.page = this.pageService.findPage(this.pageID);
    });
  }

  goTo(id: number) {
    this.router.navigate(['page', id]);
  }

}
