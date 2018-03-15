// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Example Module imports
import { EventComponent } from './components/event/event.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { RouteParamsComponent } from './components/route-params/route-params.component';
import { RouteDataParamsComponent } from './components/route-data-params/route-data-params.component';


const ROOT_ROUTES: Routes = [
    {
        path: 'events',
        component: EventComponent
    },
    {
        path: 'data-bindings',
        component: DataBindingComponent
    },
    {
        path: 'route-params',
        component: RouteParamsComponent
    },
    {
        path: 'route-params/:data',
        component: RouteDataParamsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROOT_ROUTES, {})
    ],
    exports: [
        RouterModule
    ]
})
export class ExamplesRoutingModule { }
