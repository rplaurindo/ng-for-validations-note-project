import { NgModule } from '@angular/core';

// import { OverControlModule } from '@actjs.on/ng4-validations-note';
import { OverControlModule } from 'projects/ng4-validations-note/ng4-validations-note';

import { OverControlAsTemplateDrivenExampleComponent } from './component';


@NgModule({
    imports: [
        OverControlModule.forRoot()
    ],
    declarations: [
        OverControlAsTemplateDrivenExampleComponent
    ],
    exports: [
        OverControlAsTemplateDrivenExampleComponent
        , OverControlModule
    ],
    providers: [

    ]
})
export class OverControlAsTemplateDrivenExampleModule { }
