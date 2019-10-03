import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

// import { NgForValidationsNoteModule } from '@rplaurindo/ng-for-validations-note';
import { NgForValidationsNoteModule } from 'projects/ng-for-validations-note';

import { NewComponent } from './new/component';


@NgModule({
    imports: [
        ReactiveFormsModule

        , NgForValidationsNoteModule.forRoot()
    ],
    declarations: [
        NewComponent
    ],
    exports: [
        NgForValidationsNoteModule
        , NewComponent
    ],
    providers: [

    ]
})
export class ReactiveFormsExampleModule { }
