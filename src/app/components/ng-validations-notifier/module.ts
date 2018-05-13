import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import * as Components from '.';
import { NgFormValidations } from '../../services/ng-form-validations';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        NgFormValidations
    ],
    // add locally to component providers will create a new instance breaking the singleton pattern
    declarations: [
        Components.ValidationComponent,
    ],
    exports: [
        Components.ValidationComponent
    ]
})
export class NgFormValidationNotifierModule { }
