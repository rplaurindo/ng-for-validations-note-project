import { SafeNavigationComponent } from './examples/components/safe-navigation/safe-navigation.component';
// components and services
import { DataBindingComponent } from './examples/components/data-binding/data-binding.component';
import { DataBindingService } from './examples/services/data-binding/data-binding.service';

import { ManipulatingDomComponent } from './examples/components/manipulating-dom/manipulating-dom.component';

import { DirectivesComponent } from './examples/components/directives/directives.component';

import { InterpolationComponent } from './examples/components/interpolation/interpolation.component';

import { EventComponent } from './examples/components/event/event.component';
// import { ComponentChildComponent } from './examples/components/component-child/component-child.component';

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
    // ComponentChildComponent,
    ManipulatingDomComponent,
    DirectivesComponent,
    SafeNavigationComponent
  ],
  declarations: [
    DataBindingComponent,
    InterpolationComponent,
    EventComponent,
    // ComponentChildComponent,
    ManipulatingDomComponent,
    DirectivesComponent,
    SafeNavigationComponent
  ],
  providers: [DataBindingService]
})
export class ExamplesModule { }
