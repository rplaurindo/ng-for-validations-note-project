import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { SharedComponentsModule } from '../shared-components.module';

import { NewComponent } from './new/component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,

        SharedComponentsModule
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
