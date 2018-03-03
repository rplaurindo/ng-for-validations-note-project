import { DataBindingComponent } from '../components/data-binding/example.component';
import { DataBindingService } from '../services/data-binding/example.service';

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
  declarations: [DataBindingComponent],
  exports: [DataBindingComponent],
  providers: [DataBindingService]
})
export class DataBindingModule { }
