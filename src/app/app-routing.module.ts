import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import {
    ListExampleComponent
    , Single41ControlAtTimeComponent
    // OverControlExampleComponent
} from './components/examples/index';


const appRoutes: Routes = [
    {
        path: ''
        , redirectTo: 'examples/list'
        , pathMatch: 'full'
    }
    , {
        path: 'examples',
        children: [
            {
                path: 'list',
                component: ListExampleComponent
            }
            , {
                path: 'over-control',
                children: [
                    // {
                    //     path: 'reactive-form'
                    //     , component:
                    // }
                    // , {
                    //     path: 'template-driven'
                    //     , component:
                    // }
                ]
            }
            , {
                path: 'single-4-1-control-at-time',
                component: Single41ControlAtTimeComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
            // , { enableTracing: true }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
