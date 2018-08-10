import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ReactiveFormsModule,
    FormsModule
} from '@angular/forms';

import * as Components from './components';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        Components.OverControlComponent,
        Components.UniqComponent,
        Components.ListComponent
    ],
    exports: [
        Components.OverControlComponent,
        Components.UniqComponent,
        Components.ListComponent
    ]
})
export class NgForValidationsNoteModule { }
