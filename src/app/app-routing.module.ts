import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { ListComponent } from './components/examples/index';


const appRoutes: Routes = [
    {
        path: ''
        , redirectTo: 'examples/over-control'
        , pathMatch: 'full'
    }
    , {
        path: 'examples',
        children: [
            {
                path: 'list',
                component: ListComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
