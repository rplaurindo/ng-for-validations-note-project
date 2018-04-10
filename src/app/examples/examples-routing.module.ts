// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Example Components imports
import { EventComponent } from './components/event/event.component';
import { ManipulatingDomComponent } from './components/manipulating-dom/manipulating-dom.component';
import { RouteParamsComponent } from './components/route-params/route-params.component';
import { AuthGuard } from '../guards/auth-guards/auth.guard';


const exampleRoutes: Routes = [
    // lazy loading
    {
        path: 'cruds',
        loadChildren: 'app/examples/components/cruds/cruds.module#CrudsModule',
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
    },
    {
        path: 'events',
        component: EventComponent
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
        RouterModule.forChild(exampleRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ExamplesRoutingModule { }
