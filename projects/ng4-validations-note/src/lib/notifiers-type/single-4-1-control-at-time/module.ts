import {
    NgModule
    , ModuleWithProviders
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {
    FormsModule
    , ReactiveFormsModule
} from '@angular/forms';

import { Notifier } from '../../services/notifier';

import { Single41ControlAtTimeComponent } from './component';


@NgModule({
    imports: [
        BrowserModule
        , CommonModule
        , FormsModule
        , ReactiveFormsModule
    ],
    declarations: [
        Single41ControlAtTimeComponent
    ],
    exports: [
        Single41ControlAtTimeComponent
        , BrowserModule
        , CommonModule
        , FormsModule
        , ReactiveFormsModule
    ]
})
export class Single41ControlAtTimeModule {

    static forRoot(): ModuleWithProviders<Single41ControlAtTimeModule> {
        return {
            ngModule: Single41ControlAtTimeModule
            , providers: [
                Notifier
            ]
        };
    }

}
