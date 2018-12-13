import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { HomeComponent } from './components/home/component';

import { NewComponent } from './reactive-forms/new/component';


const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'reactive-forms',
        children: [
            {
                path: 'novo',
                component: NewComponent
            }
        ]
    },
    {
        path: 'template-driven',
        loadChildren: './template-driven/module#TemplateDrivenModule'
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        loadChildren: './components/errors/404/module#PageNotFoundErrorModule'
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
