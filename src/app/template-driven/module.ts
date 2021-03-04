import { NgModule } from '@angular/core';

// import { Ng4ValidationsNoteModule } from '@actjs.on/ng4-validations-note';
import { Ng4ValidationsNoteModule } from 'projects/ng4-validations-note/ng4-validations-note';

import { RoutingModule } from './routing.module';

import { NewComponent } from './new/component';


@NgModule({
    imports: [
        RoutingModule
        , Ng4ValidationsNoteModule
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
