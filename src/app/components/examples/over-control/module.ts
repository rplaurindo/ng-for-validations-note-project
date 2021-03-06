import { NgModule } from '@angular/core';

// import { OverControlModule } from '@actjs.on/ng4-validations-note';
import { OverControlModule } from 'projects/ng4-validations-note/ng4-validations-note';

import { OverControlExampleComponent } from './component';


@NgModule({
    imports: [
        OverControlModule.forRoot()
    ],
    declarations: [
        OverControlExampleComponent
    ],
    exports: [
        OverControlExampleComponent
        , OverControlModule
    ],
    providers: [

    ]
})
export class OverControlExampleModule { }
