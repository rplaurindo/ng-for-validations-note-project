import { NgModule } from '@angular/core';

// import { Single41ControlAtTimeModule } from '@actjs.on/ng4-validations-note';
import { Single41ControlAtTimeModule } from 'projects/ng4-validations-note/ng4-validations-note';

import { Single41ControlAtTimeComponent } from './component';


@NgModule({
    imports: [
        Single41ControlAtTimeModule.forRoot()
    ],
    declarations: [
        Single41ControlAtTimeComponent
    ],
    exports: [
        Single41ControlAtTimeModule
        , Single41ControlAtTimeComponent
    ],
    providers: [

    ]
})
export class ReactiveFormsExampleModule { }
