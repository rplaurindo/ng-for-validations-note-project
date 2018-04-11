import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { EventComponent } from './components/event/event.component';
import { ManipulatingDomComponent } from './components/manipulating-dom/manipulating-dom.component';
import { RouteParamsComponent } from './components/route-params/route-params.component';


const examplesRoutes: Routes = [
    {
        path: '',
        children: [
            // lazy loading
            {
                path: 'cruds',
                loadChildren: 'app/examples/components/cruds/cruds.module#CrudsModule'
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
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(examplesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ExamplesRoutingModule { }
