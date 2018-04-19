import { NgModule } from '@angular/core';

import * as ReactiveForms from '.';

import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';
import { CrudService } from '../../services/crud/crud.service';
import { SharedComponentsModule } from '../../../shared-components.module';


@NgModule({
  imports: [
    SharedComponentsModule,
    ReactiveFormsRoutingModule
  ],
  providers: [
    CrudService
  ],
  declarations: [
    ReactiveForms.NewComponent,
    ReactiveForms.IndexComponent,
    ReactiveForms.ShowComponent,
    ReactiveForms.EditComponent
  ]
})
export class ReactiveFormsExampleModule { }
