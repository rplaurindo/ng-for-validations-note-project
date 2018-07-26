import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgForValidationsNote } from 'ng-for-validations-note';


@NgModule({
    imports: [
        CommonModule,
        NgForValidationsNote.Module
    ],
    declarations: [
    ],
    exports: [
        CommonModule,
        NgForValidationsNote.Module
    ]
})
export class SharedComponentsModule { }
