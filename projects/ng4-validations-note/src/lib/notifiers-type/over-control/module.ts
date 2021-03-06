import {
    NgModule
    , ModuleWithProviders
} from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { Notifier } from '../../services/notifier';

import { OverControlComponent } from './component';


@NgModule({
    imports: [

    ],
    declarations: [
        OverControlComponent
    ],
    exports: [
        ReactiveFormsModule
        , FormsModule
        , OverControlComponent
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
