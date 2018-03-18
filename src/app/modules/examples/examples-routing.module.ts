// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Example Module imports
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EventComponent } from './components/event/event.component';
import { EventSubscribeComponent } from './components/event-subscribe/event-subscribe.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { ManipulatingDomComponent } from './components/manipulating-dom/manipulating-dom.component';
import { RouteParamsComponent } from './components/route-params/route-params.component';


const ROOT_ROUTES: Routes = [
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
        path: 'route-params/:data',
        component: RouteParamsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROOT_ROUTES, {
            useHash: true
        })
    ],
    exports: [
        RouterModule
    ]
})
export class ExamplesRoutingModule { }
