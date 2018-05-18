import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import * as Components from './components';


const routes: Routes = [
    {
        path: 'novo',
        component: Components.NewComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule { }
