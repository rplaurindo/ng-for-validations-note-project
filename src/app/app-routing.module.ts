import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home';


const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'reactive-forms',
        loadChildren: './reactive-forms/module#Module'
    },
    {
        path: 'template-driven',
        loadChildren: './template-driven/module#Module'
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        loadChildren: './components/errors/404/module#Module'
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
