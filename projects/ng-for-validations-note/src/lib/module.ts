import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ReactiveFormsModule,
    FormsModule
} from '@angular/forms';

import { ListComponent } from './list/component';
import { OverControlComponent } from './over-control/component';
import { UniqComponent } from './uniq/component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        ListComponent,
        OverControlComponent,
        UniqComponent
    ],
    exports: [
        ListComponent,
        OverControlComponent,
        UniqComponent
    ]
})
export class NgForValidationsNoteModule { }
