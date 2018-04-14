import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import * as ReactiveForms from '.';

const reactiveFormsRoutes: Routes = [
    {
        path: '',
        component: ReactiveForms.IndexComponent,
        // necessary if you want to check only over children, but don't over parent
        children: [
            {
                path: 'novo',
                // component: ReactiveForms.NewComponent
            },
            {
                path: ':id',
                // component: ReactiveForms.ShowComponent
            },
            {
                path: ':id/editar',
                // component: ReactiveForms.EditComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(reactiveFormsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ReactiveFormsRoutingModule { }
