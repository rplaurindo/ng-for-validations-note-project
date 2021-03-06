import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

// import { ListModule } from '@actjs.on/ng4-validations-note';
import { ListModule } from 'projects/ng4-validations-note/ng4-validations-note';

import { ListExampleComponent } from './component';


@NgModule({
    imports: [
        BrowserModule
        , ListModule.forRoot()
    ]
    , declarations: [
        ListExampleComponent
    ]
    , exports: [
        ListExampleComponent
        , BrowserModule
        , ListModule
    ],
    providers: [

    ]
})
export class ListExampleModule { }
