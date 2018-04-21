import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import * as FormValidationMessages from '.';
import * as FormsValidationServices from './../../services/forms-validation';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        FormsValidationServices.TemplateDrivenService
    ],
    // add locally to component providers will create a new instance breaking the singleton pattern
    declarations: [
        FormValidationMessages.TemplateDrivenComponent,
    ],
    exports: [
        FormValidationMessages.TemplateDrivenComponent
    ]
})
export class FormValidationMessagesModule { }
