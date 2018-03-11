import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ErrorComponent } from './errors/error.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    ErrorComponent
  ],
  declarations: [
      ErrorComponent
  ],
  providers: []
})
export class ErrorsModule { }
