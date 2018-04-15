// Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  HttpClientModule,
  HttpClient
} from '@angular/common/http';

// App imports
import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from './guards/auth-guards/auth.guard';
import { FormCanDeactivateGuard } from './guards/form-deactivate/form-can-deactivate.guard';

import { AuthService } from './services/auth/auth.service';

import { AppComponent } from './app.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HorizontalMenuComponent } from './components/horizontal-menu/horizontal-menu.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/errors/404/404-error.component';


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    AccessDeniedComponent,
    HomeComponent,
    HeaderComponent,
    HorizontalMenuComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    FormCanDeactivateGuard,
    HttpClient
  ]
})
export class AppModule { }
