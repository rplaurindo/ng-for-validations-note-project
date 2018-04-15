import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import { Cruds } from '.';
import * as Cruds from '.';

import { CrudsRoutingModule } from './cruds-routing.module';

import { CrudService } from '../../services/crud/crud.service';
import { FormValidationMessageComponent } from '../../../components/form-validation-message/form-validation-message.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrudsRoutingModule
  ],
  declarations: [
    Cruds.NewComponent,
    Cruds.IndexComponent,
    Cruds.ShowComponent,
    Cruds.EditComponent,
    FormValidationMessageComponent
  ],
  providers: [
    CrudService,
    Cruds.ShowResolver
  ]
})
export class CrudsModule { }
