// Angular imports
import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

// App imports

// module
import { ExamplesRoutingModule } from './examples/examples-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/errors/404/404-error.component';

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
        loadChildren: 'app/examples/examples.module#ExamplesModule',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        canLoad: [AuthGuard]
    },
    {
        // the precedence is important
        path: '**',
        component: PageNotFoundComponent
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
