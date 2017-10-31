import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartPageComponent } from './start-page/start-page.component';
import { PageComponent } from './page/page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StartPageComponent
  },
  {
    path: 'page/:id',
    component: PageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
