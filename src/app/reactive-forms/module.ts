import { NgModule } from '@angular/core';

// import { Ng4ValidationsNoteModule } from '@actjs.on/ng4-validations-note';
import { Ng4ValidationsNoteModule } from 'projects/ng4-validations-note/ng4-validations-note';

import { NewComponent } from './new/component';


@NgModule({
    imports: [
        Ng4ValidationsNoteModule
    ],
    declarations: [
        NewComponent
    ],
    exports: [
        Ng4ValidationsNoteModule
        , NewComponent
    ],
    providers: [

    ]
})
export class ReactiveFormsExampleModule { }
