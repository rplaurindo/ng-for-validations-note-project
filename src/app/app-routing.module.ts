// Angular imports
import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

// App imports

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

// Guards
import { AuthGuard } from './guards/auth-guards/auth.guard';


const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'sign_in',
        component: LoginComponent
    },
    {
        path: 'examples',
        // lazy loading
        loadChildren: 'app/examples/module#Examples',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        canLoad: [AuthGuard]
    },
    {
        path: '**',
        loadChildren: './components/errors/404/page-not-found.module#PageNotFoundModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            // debugging purposes only
            // enableTracing: true
            // useHash: true
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
