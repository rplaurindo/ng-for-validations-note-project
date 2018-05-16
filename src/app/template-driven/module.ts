import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import * as Cruds from '.';

import { CrudsRoutingModule } from './cruds-routing.module';

import { SharedComponentsModule } from '../../../shared-components.module';
import * as NgFormValidationNotifier from 'ng-form-validations-notifier';


@NgModule({
  imports: [
    FormsModule,
    SharedComponentsModule,
    CrudsRoutingModule
  ],
  providers: [
    NgFormValidationNotifier.Services.Notifier
  ],
  declarations: [
    Cruds.NewComponent
  ]
})
export class Module { }
