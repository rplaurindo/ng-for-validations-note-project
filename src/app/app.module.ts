// testar se pode haver outro AppModule encapsulado em outra pasta, ou se seria melhor ter um ExamplesModule em uma pasta modules para ser importado em src/main.ts

import { ErrorsModule } from './modules/errors.module';
import { ExamplesModule } from './modules/examples.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ExamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
