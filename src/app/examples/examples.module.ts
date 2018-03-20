// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// app imports

// Modules
import { ExamplesRoutingModule } from './examples-routing.module';

// Pipes
import { CustomPipePipe } from './pipes/custom-pipe/custom-pipe.pipe';

// Directives
import { StructuralDirectiveDirective } from './directives/structural-directive/structural-directive.directive';
import { YellowBackgroundOnEventlistenerDirective } from './directives/yellow-background-on-eventlistener/yellow-background-on-eventlistener.directive';
import { LightgrayBackgroundDirective } from './directives/lightgray-background/lightgray-background.directive';

// Components
import { NgContentExampleComponent } from './components/ng-content-example/ng-content-example.component';
import { SafeNavigationComponent } from './components/safe-navigation/safe-navigation.component';
import { ManipulatingDomComponent } from './components/manipulating-dom/manipulating-dom.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { EventComponent } from './components/event/event.component';
import { ComponentChildComponent } from './components/component-child/component-child.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { EventSubscribeComponent } from './components/event-subscribe/event-subscribe.component';
import { RouteParamsComponent } from './components/route-params/route-params.component';
import { RedirectingComponent } from './components/redirecting/redirecting.component';
import { CrudComponent } from './components/crud/index/index.component';


@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    FormsModule,
    ExamplesRoutingModule
  ],
  exports: [
    DataBindingComponent,
    InterpolationComponent,
    EventComponent,
    ComponentChildComponent,
    ManipulatingDomComponent,
    DirectivesComponent,
    SafeNavigationComponent,
    NgContentExampleComponent,
    EventSubscribeComponent,
    RouteParamsComponent,
    RedirectingComponent
  ],
  declarations: [
    CustomPipePipe,
    LightgrayBackgroundDirective,
    YellowBackgroundOnEventlistenerDirective,
    DataBindingComponent,
    InterpolationComponent,
    EventComponent,
    ComponentChildComponent,
    ManipulatingDomComponent,
    DirectivesComponent,
    SafeNavigationComponent,
    NgContentExampleComponent,
    StructuralDirectiveDirective,
    EventSubscribeComponent,
    RouteParamsComponent,
    RedirectingComponent,
    CrudComponent
  ],
  providers: []
})
export class ExamplesModule { }
