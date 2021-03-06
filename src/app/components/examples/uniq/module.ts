import { NgModule } from '@angular/core';

// import { UniqModul } from '@actjs.on/ng4-validations-note';
import { UniqModule } from 'projects/ng4-validations-note/ng4-validations-note';

import { UniqComponent } from './component';


@NgModule({
    imports: [
        UniqModule.forRoot()
    ],
    declarations: [
        UniqComponent
    ],
    exports: [
        UniqModule
        , UniqComponent
    ],
    providers: [

    ]
})
export class ReactiveFormsExampleModule { }
