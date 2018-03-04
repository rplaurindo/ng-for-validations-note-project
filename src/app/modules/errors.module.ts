import { ErrorComponent } from './errors/error.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
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
