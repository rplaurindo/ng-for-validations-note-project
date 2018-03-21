// Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// App imports
import { AppRoutingModule } from './app-routing.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { ErrorComponent } from './components/errors/error.component';
import { HomeComponent } from './components/home/home.component';
import { HorizontalMenuComponent } from './components/horizontal-menu/horizontal-menu.component';


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
    HomeComponent,
    ErrorComponent,
    HorizontalMenuComponent
  ],
  // Services
  providers: []
})
export class AppModule { }
