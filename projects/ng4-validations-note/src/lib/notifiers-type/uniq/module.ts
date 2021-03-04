import {
    NgModule
    , ModuleWithProviders
} from '@angular/core';
import {
    FormsModule
    , ReactiveFormsModule
} from '@angular/forms';

import { Notifier } from '../../services/notifier';

import { UniqComponent } from './component';


@NgModule({
    imports: [
        FormsModule
        , ReactiveFormsModule
    ],
    declarations: [
        UniqComponent
    ],
    exports: [
        UniqComponent
        , FormsModule
        , ReactiveFormsModule
    ]
})
export class UniqModule {

    static forRoot(): ModuleWithProviders<UniqModule> {
        return {
            ngModule: UniqModule
            , providers: [
                Notifier
            ]
        };
    }

}
