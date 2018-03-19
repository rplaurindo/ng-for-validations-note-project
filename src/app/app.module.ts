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
  // modules
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    // FormsModule,
    ExamplesModule
  ],
  // modules and components
  exports: [],
  // components
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    HorizontalMenuComponent
  ],
  // services
  providers: []
})
export class AppModule { }
