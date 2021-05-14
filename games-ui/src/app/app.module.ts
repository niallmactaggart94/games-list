import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SystemPagesModule} from './system-pages/system-pages.module';
import {LayoutModule} from './layout/layout.module';
import {GamesListModule} from './games-list/games-list.module';
import {HttpClientModule} from '@angular/common/http';
import {GamesDetailModule} from './games-detail/games-detail.module';
import {SharedComponentsModule} from './shared/components/shared-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SystemPagesModule,
    LayoutModule,
    GamesListModule,
    GamesDetailModule,
    SharedComponentsModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
