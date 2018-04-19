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
    providers: [
    ],
    declarations: [
        FormValidationMessages.TemplateDrivenComponent,
    ],
    exports: [
        FormValidationMessages.TemplateDrivenComponent
    ]
})
export class FormValidationMessagesModule { }
