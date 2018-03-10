import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ErrorComponent } from './errors/error.component';

@NgModule({
  imports: [
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
