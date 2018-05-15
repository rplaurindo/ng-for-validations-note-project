import { NgModule } from '@angular/core';

import * as ReactiveForms from '.';

import { RoutingModule } from './routing.module';
import { CrudService } from '../../../services/crud/crud.service';
import { SharedComponentsModule } from '../../../shared-components.module';


@NgModule({
  imports: [
    SharedComponentsModule,
    RoutingModule
  ],
  providers: [
    CrudService,
    ReactiveForms.ShowResolver
  ],
  declarations: [
    ReactiveForms.NewComponent,
    ReactiveForms.IndexComponent,
    ReactiveForms.ShowComponent,
    ReactiveForms.EditComponent
  ]
})
export class ReactiveFormsExample { }
