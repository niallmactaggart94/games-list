
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {FormsModule} from '@angular/forms';
import {GamesDetailsComponent} from './games-detail.component';
import {SharedComponentsModule} from '../shared/components/shared-components.module';


@NgModule({
  declarations: [
    GamesDetailsComponent,
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
    GamesDetailsComponent,

  ]
})
export class GamesDetailModule { }
