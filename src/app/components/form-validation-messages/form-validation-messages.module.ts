import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import * as FormValidationMessages from '.';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        FormValidationMessages.TemplateDrivenComponent
    ],
    declarations: [
        FormValidationMessages.TemplateDrivenComponent
    ],
    providers: [
    ]
})
export class FormValidationMessagesModule { }
