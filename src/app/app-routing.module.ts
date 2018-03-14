// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// App imports
import { AppComponent } from './app.component';

import { ErrorComponent } from './modules/errors/error.component';

import { EventComponent } from './modules/examples/components/event/event.component';
import { InterpolationComponent } from './modules/examples/components/interpolation/interpolation.component';
import { DataBindingComponent } from './modules/examples/components/data-binding/data-binding.component';


const ROOT_ROUTES: Routes = [
    {
        path: '',
        component: InterpolationComponent
    },
    {
        path: 'events',
        component: EventComponent
    },
    {
        path: 'data-bindings',
        component: DataBindingComponent
    }
    // {
    //     path: 'interpolation',
    //     // controller
    //     component: InterpolationComponent
    // },
    // {
    //     path: '**',
    //     component: ErrorComponent
    // }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROOT_ROUTES, {
            // debugging purposes only
            // enableTracing: true
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
