import {
    NgModule
    , ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { Notifier } from '../../services/notifier';

import { OverControlComponent } from './component';
// import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports: [
        // BrowserModule
        // , CommonModule
        CommonModule
    ],
    declarations: [
        OverControlComponent
    ],
    exports: [
        OverControlComponent
        // , BrowserModule
        , CommonModule
        , ReactiveFormsModule
        , FormsModule
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
