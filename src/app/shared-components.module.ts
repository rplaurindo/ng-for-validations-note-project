import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormValidationMessageComponent } from './components/form-validation-message/form-validation-message.component';


@NgModule({
    // Modules
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    // Modules and Components
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormValidationMessageComponent
    ],
    // Components, Pipes and Directives
    declarations: [
        FormValidationMessageComponent
    ],
    // Injectable class
    providers: []
})
export class SharedComponentsModule { }
