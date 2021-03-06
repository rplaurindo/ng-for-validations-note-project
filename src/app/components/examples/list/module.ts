import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

// import { ListModule } from '@actjs.on/ng4-validations-note';
import { ListModule } from 'projects/ng4-validations-note/ng4-validations-note';

import { ListComponent } from './component';


@NgModule({
    imports: [
        BrowserModule
        , ListModule.forRoot()
    ]
    , declarations: [
        ListComponent
    ]
    , exports: [
        ListComponent
        , BrowserModule
        , ListModule
    ],
    providers: [

    ]
})
export class ListExampleModule { }
