import { NgModule } from '@angular/core';

import { ListModule } from './notifiers-type/list/module';
import { OverControlModule } from './notifiers-type/over-control/module';
import { Single41ControlAtTimeModule } from './notifiers-type/single-4-1-control-at-time/module';


@NgModule({
    imports: [

    ],
    declarations: [

    ],
    exports: [
        ListModule
        , OverControlModule
        , Single41ControlAtTimeModule
    ]
})
export class Ng4ValidationsNoteModule { }
