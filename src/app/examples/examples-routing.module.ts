// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ModuleWithProviders } from '@angular/core';

// Example Module imports
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EventComponent } from './components/event/event.component';
import { EventSubscribeComponent } from './components/event-subscribe/event-subscribe.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { ManipulatingDomComponent } from './components/manipulating-dom/manipulating-dom.component';
import { RouteParamsComponent } from './components/route-params/route-params.component';
import { RedirectingComponent } from './components/redirecting/redirecting.component';


const exampleRoutes: Routes = [
    {
        path: 'data-bindings',
        component: DataBindingComponent
    },
    {
        path: 'events',
        component: EventComponent
    },
    {
        path: 'event-subscribe',
        component: EventSubscribeComponent
    },
    {
        path: 'interpolations',
        component: InterpolationComponent
    },
    {
        path: 'manipulating-dom',
        component: ManipulatingDomComponent
    },
    {
        path: 'redirecting',
        component: RedirectingComponent
    },
    {
        path: 'route-params/:data',
        component: RouteParamsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(exampleRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ExamplesRoutingModule { }
