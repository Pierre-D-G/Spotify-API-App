import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './components/Search/search.component';
import { AboutComponent } from './components/About/about.component';
const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
      path:
      'home',
      component: SearchComponent
    },
    {
      path: 'about',
      component: AboutComponent
    }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
