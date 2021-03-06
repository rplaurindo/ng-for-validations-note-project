import { NgModule } from '@angular/core';

// import { Ng4ValidationsNoteModule } from '@actjs.on/ng4-validations-note';
import {
    ListModule,
    UniqModule
} from 'projects/ng4-validations-note/ng4-validations-note';

import { NewComponent } from './new/component';


@NgModule({
    imports: [
        ListModule.forRoot()
        , UniqModule.forRoot()
    ],
    declarations: [
        NewComponent
    ],
    exports: [
        ListModule
        , UniqModule
        , NewComponent
    ],
    providers: [

    ]
})
export class ReactiveFormsExampleModule { }
