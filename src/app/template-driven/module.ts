import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { SharedComponentsModule } from '../shared-components.module';
import { NgForValidationsNoteModule } from '../../../projects/ng-for-validations-note/src/public_api';

import { RoutingModule } from './routing.module';

import { NewComponent } from './new/component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RoutingModule,

        SharedComponentsModule,

        // NgForValidationsNoteModule
    ],
    declarations: [
        NewComponent
    ],
    providers: [

    ]
})
export class TemplateDrivenModule { }
