import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
    HttpClientModule,
    HttpClient
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HorizontalMenuComponent } from './components/horizontal-menu/component';
import { HomeComponent } from './components/home/component';
import { ReactiveFormsExampleModule } from './reactive-forms';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,

        ReactiveFormsExampleModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        HorizontalMenuComponent
    ],
    providers: [
        HttpClient
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
