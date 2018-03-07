// components and services
import { DataBindingComponent } from './examples/components/data-binding/example.component';
import { DataBindingService } from './examples/services/data-binding/example.service';

import { ManipulatingDomComponent } from './examples/components/manipulating-dom/manipulating-dom.component';

import { DirectivesComponent } from './examples/components/directives/directives.component';

import { InterpolationComponent } from './examples/components/interpolation/example.component';

import { EventComponent } from './examples/components/event/example.component';
import { EventChildComponent } from './examples/components/event-child/example.component';

// dependencie modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DataBindingComponent,
    InterpolationComponent,
    EventComponent,
    EventChildComponent,
    ManipulatingDomComponent,
    DirectivesComponent
  ],
  declarations: [
    DataBindingComponent,
    InterpolationComponent,
    EventComponent,
    EventChildComponent,
    ManipulatingDomComponent,
    DirectivesComponent
  ],
  providers: [DataBindingService]
})
export class ExamplesModule { }
