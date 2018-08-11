import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { NewComponent } from './new/component';


const routes: Routes = [
    {
        path: 'novo',
        component: NewComponent
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
