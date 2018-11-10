import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ReactiveFormsModule,
    FormsModule
} from '@angular/forms';

import { Services } from './services/namespace';

import * as Components from './components';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        Components.ListComponent,
        Components.OverControlComponent,
        Components.UniqComponent
    ],
    exports: [
        Components.ListComponent,
        Components.OverControlComponent,
        Components.UniqComponent
    ],
    providers: [
        Services.Notifier
    ]
})
export class NgForValidationsNoteModule { }
