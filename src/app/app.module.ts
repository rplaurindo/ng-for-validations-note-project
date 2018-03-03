import { DataBindingModule } from './modules/data-binding.module';
import { InterpolationModule } from './modules/interpolation.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataBindingModule,
    InterpolationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
