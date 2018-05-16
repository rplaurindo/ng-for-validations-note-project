import { NgModule } from '@angular/core';

import { SharedComponentsModule } from './../../../shared-components.module';
import { RoutingModule } from './routing.module';
import { PageNotFoundComponent } from '.';


@NgModule({
  imports: [
    SharedComponentsModule,
    RoutingModule
  ],
  providers: [
  ],
  declarations: [
    PageNotFoundComponent
  ]
})
export class Module { }
