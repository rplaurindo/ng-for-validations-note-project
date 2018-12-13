import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { SharedComponentsModule } from '../shared-components.module';
import { NgForValidationsNoteModule } from '../../../projects/ng-for-validations-note/src/public_api';

import { NewComponent } from './new/component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,

        SharedComponentsModule

        // use it if in AppModule use NgForValidationsNoteModule.forRoot()
        // NgForValidationsNoteModule
    ],
    declarations: [
        NewComponent
    ],
    exports: [
    ],
    providers: [

    ]
})
export class ReactiveFormsExampleModule { }
