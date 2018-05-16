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
import { UsersMenuComponent } from './components/users-menu/users-menu.component';
import { HomeComponent } from './components/home/home.component';


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
        UsersMenuComponent
    ]
})
export class AppModule { }
