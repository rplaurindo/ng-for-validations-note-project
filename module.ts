import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import * as Components from './src';
import * as Services from './src/services';


@NgModule({
    imports: [
        // CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    // add locally to component providers will create a new instance breaking the singleton pattern
    providers: [
        Services.NgFormValidations
    ],
    declarations: [
        Components.UniqComponent,
        Components.ListComponent
    ],
    exports: [
        Components.UniqComponent,
        Components.ListComponent
    ]
})
export class Module { }
