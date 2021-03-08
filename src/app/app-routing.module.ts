import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import {
    ListExampleComponent
    , OverControlAsTemplateDrivenExampleComponent
    , OverControlExampleComponent
    , Single41ControlAtTimeComponent
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
                    {
                        path: 'reactive-form'
                        , component: OverControlExampleComponent
                    }
                    , {
                        path: 'template-driven'
                        , component: OverControlAsTemplateDrivenExampleComponent
                    }
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
