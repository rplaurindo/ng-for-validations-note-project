import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import * as Components from './components';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    // don't add providers in a shared module
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
