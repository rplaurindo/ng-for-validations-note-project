import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import * as ReactiveForms from '.';

import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';
import { FormValidationMessageComponent } from '../../../components/form-validation-message/form-validation-message.component';
import { CrudService } from '../../services/crud/crud.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsRoutingModule
  ],
  declarations: [
    ReactiveForms.NewComponent,
    ReactiveForms.IndexComponent,
    ReactiveForms.ShowComponent,
    ReactiveForms.EditComponent,
    FormValidationMessageComponent
  ],
  providers: [
    CrudService
  ]
})
export class ReactiveFormsExampleModule { }
