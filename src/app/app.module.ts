import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HorizontalMenuComponent } from './components/horizontal-menu/component';
import { HomeComponent } from './components/home/component';

import { ReactiveFormsExampleModule } from './reactive-forms/module';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,

        ReactiveFormsExampleModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        HorizontalMenuComponent
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
