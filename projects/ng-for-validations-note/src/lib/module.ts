import {
    NgModule
    , ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormsModule
    , ReactiveFormsModule
} from '@angular/forms';

import { Notifier } from './services/notifier';

import { ListComponent } from './components/list/component';
import { OverControlComponent } from './components/over-control/component';
import { UniqComponent } from './components/uniq/component';


@NgModule({
    imports: [
        CommonModule
        , FormsModule
        , ReactiveFormsModule
    ],
    declarations: [
        ListComponent
        , OverControlComponent
        , UniqComponent
    ],
    exports: [
        ListComponent
        , OverControlComponent
        , UniqComponent
    ]
})
export class NgForValidationsNoteModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgForValidationsNoteModule
            , providers: [
                Notifier
            ]
        };
    }

}
