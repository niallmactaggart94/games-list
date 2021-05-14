
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {GamesListComponent} from './games-list.component';
import {GamesItemComponent} from './game-item/games-item.component';
import {FormsModule} from '@angular/forms';
import {SharedComponentsModule} from '../shared/components/shared-components.module';


@NgModule({
  declarations: [
    GamesListComponent,
    GamesItemComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SharedComponentsModule
  ],
  providers: [],
  exports: [
    CommonModule,
    GamesListComponent,
    GamesItemComponent
  ]
})
export class GamesListModule { }
