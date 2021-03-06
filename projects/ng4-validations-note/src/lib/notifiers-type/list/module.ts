import {
    NgModule
    , ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormsModule
    , ReactiveFormsModule
} from '@angular/forms';

import { Notifier } from '../../services/notifier';

import { ListComponent } from './component';


@NgModule({
    imports: [
        CommonModule
        , FormsModule
        , ReactiveFormsModule
    ],
    declarations: [
        ListComponent
    ],
    exports: [
        ListComponent
        , CommonModule
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
