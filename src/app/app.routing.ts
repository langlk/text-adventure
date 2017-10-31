import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StartPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
