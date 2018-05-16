import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
    HttpClientModule,
    HttpClient
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedComponentsModule } from './shared-components.module';

import { AppComponent } from './app.component';
import { HorizontalMenuComponent } from './components/horizontal-menu';
import { HomeComponent } from './components/home';


@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,
        SharedComponentsModule
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
