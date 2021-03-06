import { NgModule } from '@angular/core';

// import { OverControlModule } from '@actjs.on/ng4-validations-note';
import { OverControlModule } from 'projects/ng4-validations-note/ng4-validations-note';

import { OverControlComponent } from './component';


@NgModule({
    imports: [
        OverControlModule.forRoot()
    ],
    declarations: [
        OverControlComponent
    ],
    exports: [
        OverControlComponent
        , OverControlModule
    ],
    providers: [

    ]
})
export class TemplateDrivenModule { }
