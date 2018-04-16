import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import * as FormValidationMessages from '.';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        FormValidationMessages.TemplateDrivenComponent,
        FormValidationMessages.ReactiveFormsComponent
    ],
    declarations: [
        FormValidationMessages.TemplateDrivenComponent,
        FormValidationMessages.ReactiveFormsComponent

    ],
    providers: [
    ]
})
export class FormValidationMessagesModule { }
