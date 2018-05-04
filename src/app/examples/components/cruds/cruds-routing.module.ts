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
    component: Cruds.IndexComponent,
    // to render components as children (in "router-outlet" component if it is used)
    children: [
      {
        path: 'novo',
        component: Cruds.NewComponent,
        canDeactivate: [FormCanDeactivateGuard]
      },
      // the order matters, so be careful and define the sub-route before a route that has parameter, otherwise cause it will interpreted as a parameter
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
