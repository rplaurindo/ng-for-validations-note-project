import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import * as ReactiveForms from '.';

import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';


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
  ],
  providers: [
  ]
})
export class ReactiveFormsExampleModule { }
