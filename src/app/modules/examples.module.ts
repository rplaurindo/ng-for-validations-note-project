// app modules
import { DataBindingComponent } from '../components/data-binding/example.component';
import { DataBindingService } from '../services/data-binding/example.service';

import { InterpolationComponent } from '../components/interpolation/example.component';

import { EventComponent } from '../components/event/example.component';

// dependencie modules
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
  exports: [DataBindingComponent, InterpolationComponent, EventComponent],
  declarations: [DataBindingComponent, InterpolationComponent, EventComponent],
  providers: [DataBindingService]
})
export class ExamplesModule { }
