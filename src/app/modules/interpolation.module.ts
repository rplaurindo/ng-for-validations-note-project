import { InterpolationComponent } from '../components/interpolation/example.component';

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
  declarations: [InterpolationComponent],
  exports: [InterpolationComponent],
  providers: []
})
export class InterpolationModule { }
