import { NgModule } from '@angular/core';

import { ListModule } from './notifiers-type/list/module';
import { OverControlModule } from './notifiers-type/over-control/module';
import { UniqModule } from './notifiers-type/uniq/module';


@NgModule({
    imports: [

    ],
    declarations: [

    ],
    exports: [
        ListModule
        , OverControlModule
        , UniqModule
    ]
})
export class Ng4ValidationsNoteModule { }
