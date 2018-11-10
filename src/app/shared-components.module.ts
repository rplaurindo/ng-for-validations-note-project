import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { NgForValidationsNoteModule } from '../../projects/ng-for-validations-note/src/public_api';


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
