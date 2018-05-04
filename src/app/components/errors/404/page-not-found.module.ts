import { NgModule } from '@angular/core';

import { SharedComponentsModule } from './../../../shared-components.module';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
  imports: [
    SharedComponentsModule,
    PageNotFoundRoutingModule
  ],
  providers: [
  ],
  declarations: [
    PageNotFoundComponent
  ]
})
export class PageNotFoundModule { }
