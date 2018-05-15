import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ReactiveFormsModule,
    FormsModule
} from '@angular/forms';

import { NgFormValidationNotifierModule } from 'ng-form-validations-notifier';


@NgModule({
    // Modules
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgFormValidationNotifierModule
        // FormsModule
    ],
    // Injectable class
    providers: [
    ],
    // Components, Pipes and Directives
    declarations: [
    ],
    // Modules and Components
    exports: [
        CommonModule,
        ReactiveFormsModule,
        NgFormValidationNotifierModule
    ]
})
export class SharedComponentsModule { }
