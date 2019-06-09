import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { NgForValidationsNoteModule } from '../../../projects/ng-for-validations-note/src/public_api';

import { RoutingModule } from './routing.module';

import { NewComponent } from './new/component';


@NgModule({
    imports: [
        FormsModule,
        RoutingModule,

        NgForValidationsNoteModule.forRoot(),
    ],
    declarations: [
        NewComponent
    ],
    exports: [
        NgForValidationsNoteModule
    ],
    providers: [

    ]
})
export class TemplateDrivenModule { }
