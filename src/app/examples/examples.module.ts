// Angular imports
import { NgModule } from '@angular/core';
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
import { RouteParamsComponent } from './components/route-params/route-params.component';
import { SharedComponentsModule } from '../shared-components.module';


@NgModule({
  imports: [
    SharedComponentsModule,
    FormsModule,
    ExamplesRoutingModule
  ],
  declarations: [
    CustomPipePipe,
    LightgrayBackgroundDirective,
    YellowBackgroundOnEventlistenerDirective,
    StructuralDirectiveDirective,
    EventComponent,
    ComponentChildComponent,
    ManipulatingDomComponent,
    DirectivesComponent,
    SafeNavigationComponent,
    NgContentExampleComponent,
    RouteParamsComponent
  ]
})
export class ExamplesModule { }
