import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import * as Cruds from '.';

import { FormCanDeactivateGuard } from './../../../guards/form-deactivate/form-can-deactivate.guard';


const crudsRoutes: Routes = [
    {
        path: '',
        component: Cruds.CrudsComponent,
        // necessary if you want to check only over children, but don't over parent
        children: [
            {
                path: 'novo',
                component: Cruds.NewComponent,
                canDeactivate: [FormCanDeactivateGuard]
            },
            {
                // seria ideal que houvesse uma forma de diferenciar rotas também por método HTTP, diferenciando-as, uma vez que, por exemplo, as rotas de read (GET) e destroy (DELETE) são idênticas.
                path: ':id',
                component: Cruds.ShowComponent,
                // preloading
                resolve: { exampleModel: Cruds.ShowResolver }
            },
            {
                path: ':id/editar',
                component: Cruds.EditComponent,
                canDeactivate: [FormCanDeactivateGuard]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(crudsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CrudsRoutingModule { }
