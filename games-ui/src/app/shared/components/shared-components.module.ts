
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {BackLinkComponent} from './back-link/back-link.component';
import {LoadingComponent} from './loading/loading.component';
import {ErrorComponent} from './error/error.component';

@NgModule({
  declarations: [
    BackLinkComponent,
    LoadingComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  exports: [
    BackLinkComponent,
    LoadingComponent,
    ErrorComponent
  ]
})
export class SharedComponentsModule { }
