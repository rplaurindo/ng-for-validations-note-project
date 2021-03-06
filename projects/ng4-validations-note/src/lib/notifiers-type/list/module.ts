import {
    NgModule
    , ModuleWithProviders
} from '@angular/core';
import {
    FormsModule
    , ReactiveFormsModule
} from '@angular/forms';

import { Notifier } from '../../services/notifier';

import { ListComponent } from './component';


@NgModule({
    imports: [
        FormsModule
        , ReactiveFormsModule
    ],
    declarations: [
        ListComponent
    ],
    exports: [
        ListComponent
        , FormsModule
        , ReactiveFormsModule
    ]
})
export class ListModule {

    static forRoot(): ModuleWithProviders<ListModule> {
        return {
            ngModule: ListModule
            , providers: [
                Notifier
            ]
        };
    }

}
