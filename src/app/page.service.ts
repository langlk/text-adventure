import { Injectable } from '@angular/core';
import { Page } from './page.model';
import { PAGES } from './pages';

@Injectable()
export class PageService {

  constructor() { }

  getPages() {
    return PAGES;
  }

  findPage(id: number) {
    for (var i = 0; i < PAGES.length; i++) {
      if (PAGES[i].id == id) {
        return PAGES[i];
      }
    }
  }
}
