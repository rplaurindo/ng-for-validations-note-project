import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { Cruds } from '.';
import * as Cruds from '.';

import { CrudsRoutingModule } from './cruds-routing.module';

import { CrudService } from '../../services/crud/crud.service';
import { SharedComponentsModule } from '../../../shared-components.module';


@NgModule({
  imports: [
    FormsModule,
    SharedComponentsModule,
    CrudsRoutingModule
  ],
  declarations: [
    Cruds.NewComponent,
    Cruds.IndexComponent,
    Cruds.ShowComponent,
    Cruds.EditComponent
  ],
  providers: [
    CrudService,
    Cruds.ShowResolver
  ]
})
export class CrudsModule { }
