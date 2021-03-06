import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import {
    ListExampleComponent,
    OverControlExampleComponent
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
                component: OverControlExampleComponent
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
