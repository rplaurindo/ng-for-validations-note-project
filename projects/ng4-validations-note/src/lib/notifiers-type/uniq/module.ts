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

import { UniqComponent } from './component';


@NgModule({
    imports: [
        BrowserModule
        , CommonModule
        , FormsModule
        , ReactiveFormsModule
    ],
    declarations: [
        UniqComponent
    ],
    exports: [
        UniqComponent
        , BrowserModule
        , CommonModule
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
