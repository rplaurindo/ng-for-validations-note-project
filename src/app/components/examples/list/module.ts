import { NgModule } from '@angular/core';

// import { ListModule } from '@actjs.on/ng4-validations-note';
import { ListModule } from 'projects/ng4-validations-note/ng4-validations-note';

import { ListComponent } from './component';


@NgModule({
    imports: [
        ListModule.forRoot()
    ],
    declarations: [
        ListComponent
    ],
    exports: [
        ListModule
        , ListComponent
    ],
    providers: [

    ]
})
export class ReactiveFormsExampleModule { }
