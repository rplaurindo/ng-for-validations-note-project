import { ErrorComponent } from './errors/error.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
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
