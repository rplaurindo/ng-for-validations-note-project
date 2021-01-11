import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Ng4ValidationsNoteModule } from '@rplaurindo/ng4-validations-note';
// import { Ng4ValidationsNoteModule } from 'projects/ng4-validations-note';

import { RoutingModule } from './routing.module';

import { NewComponent } from './new/component';


@NgModule({
    imports: [
        FormsModule
        , RoutingModule

        , Ng4ValidationsNoteModule.forRoot(),
    ],
    declarations: [
        NewComponent
    ],
    exports: [
        Ng4ValidationsNoteModule
    ],
    providers: [

    ]
})
export class TemplateDrivenModule { }
