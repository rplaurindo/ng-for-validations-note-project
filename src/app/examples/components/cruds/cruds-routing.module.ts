import { NgModule } from '@angular/core';
// import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudComponent } from './cruds.component';
import { CrudEditComponent } from './crud-edit/crud-edit.component';
import { CrudNewComponent } from './crud-new/crud-new.component';
import { CrudShowComponent } from './crud-show/crud-show.component';


const crudsRoutes: Routes = [
    {
        path: '',
        component: CrudComponent,
        children: [
            {
                path: 'novo',
                component: CrudNewComponent
            },
            {
                // seria ideal que houvesse uma forma de diferenciar rotas também por método HTTP, diferenciando-as, uma vez que, por exemplo, as rotas de read (GET) e destroy (DELETE) são idênticas.
                path: ':id',
                component: CrudShowComponent,
                // resolve: { cruds: CrudShowResolver }
            },
            {
                path: ':id/editar',
                component: CrudEditComponent
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
