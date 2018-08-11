import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgForValidationsNoteModule } from 'ng-for-validations-note';


@NgModule({
    imports: [
        CommonModule,
        NgForValidationsNoteModule
    ],
    exports: [
        CommonModule,
        NgForValidationsNoteModule
    ]
})
export class SharedComponentsModule { }
