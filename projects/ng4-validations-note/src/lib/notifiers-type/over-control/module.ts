import {
    NgModule
    , ModuleWithProviders
} from '@angular/core';

import { Notifier } from '../../services/notifier';

import { OverControlComponent } from './component';


@NgModule({
    imports: [

    ],
    declarations: [
        OverControlComponent
    ],
    exports: [
        OverControlComponent
    ]
})
export class OverControlModule {

    static forRoot(): ModuleWithProviders<OverControlModule> {
        return {
            ngModule: OverControlModule
            , providers: [
                Notifier
            ]
        };
    }

}
