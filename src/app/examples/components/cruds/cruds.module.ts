import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrudsRoutingModule } from './cruds-routing.module';

// import { Cruds } from '.';
import * as Cruds from '.';

import { CrudService } from '../../services/crud/crud.service';
import { FormValidationMessageComponent } from '../../../components/form-validation-message/form-validation-message.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrudsRoutingModule
  ],
  declarations: [
    FormValidationMessageComponent,
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
