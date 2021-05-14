import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './system-pages/home-page/home-page.component';
import {GamesListComponent} from './games-list/games-list.component';
import {GamesDetailsComponent} from './games-detail/games-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'games-list',
    component: GamesListComponent
  },
  {
    path: 'game',
    component: GamesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
