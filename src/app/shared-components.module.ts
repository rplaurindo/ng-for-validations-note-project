import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ReactiveFormsModule,
    FormsModule
} from '@angular/forms';

import { FormValidationMessagesModule } from './components/form-validation-messages/form-validation-messages.module';


@NgModule({
    // Modules
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormValidationMessagesModule
        // FormsModule
    ],
    // Modules and Components
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormValidationMessagesModule
    ],
    // Components, Pipes and Directives
    declarations: [
    ],
    // Injectable class
    providers: []
})
export class SharedComponentsModule { }
