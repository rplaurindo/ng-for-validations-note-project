import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
    HttpClientModule,
    HttpClient
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NgForValidationsNoteModule } from 'projects/ng-for-validations-note/src/public_api';

import { AppComponent } from './app.component';

import { HorizontalMenuComponent } from './components/horizontal-menu/component';
import { HomeComponent } from './components/home/component';
import { ReactiveFormsExampleModule } from './reactive-forms';


@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,

        NgForValidationsNoteModule.forRoot(),

        ReactiveFormsExampleModule
    ],
    providers: [
        HttpClient
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        HorizontalMenuComponent
    ]
})
export class AppModule { }
