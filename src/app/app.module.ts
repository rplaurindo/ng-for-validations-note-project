// Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// App imports
import { AppRoutingModule } from './app-routing.module';
import { ExamplesModule } from './examples/examples.module';

import { AuthGuard } from './guards/auth-guards/auth.guard';

import { AuthService } from './services/auth/auth.service';

import { AppComponent } from './app.component';
import { ErrorComponent } from './components/errors/error.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HorizontalMenuComponent } from './components/horizontal-menu/horizontal-menu.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  bootstrap: [AppComponent],
  // Modules
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    // FormsModule,
    ExamplesModule
  ],
  // Modules and Components
  exports: [],
  // Components, Pipes and Directives
  declarations: [
    AppComponent,
    ErrorComponent,
    AccessDeniedComponent,
    HomeComponent,
    HeaderComponent,
    HorizontalMenuComponent,
    LoginComponent
  ],
  // Services
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AppModule { }
