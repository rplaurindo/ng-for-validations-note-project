import { NgModule } from '@angular/core';
// import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudComponent } from './cruds.component';
import { CrudNewComponent } from './crud-new/crud-new.component';
import { CrudShowComponent } from './crud-show/crud-show.component';
import { CrudEditComponent } from './crud-edit/crud-edit.component';

import { AuthGuard } from '../../../guards/auth-guards/auth.guard';
import { FormCanDeactivateGuard } from '../../../guards/form-deactivate/form-can-deactivate.guard';

import { CrudShowResolver } from './crud-show/crud-show.resolver';


const crudsRoutes: Routes = [
    {
        path: '',
        component: CrudComponent,
        // necessary if you want to check only over children, but don't over parent
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'novo',
                component: CrudNewComponent,
                canDeactivate: [FormCanDeactivateGuard]
            },
            {
                // seria ideal que houvesse uma forma de diferenciar rotas também por método HTTP, diferenciando-as, uma vez que, por exemplo, as rotas de read (GET) e destroy (DELETE) são idênticas.
                path: ':id',
                component: CrudShowComponent,
                resolve: { exampleModel: CrudShowResolver }
            },
            {
                path: ':id/editar',
                component: CrudEditComponent,
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
