// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ModuleWithProviders } from '@angular/core';

// App imports

// module
import { ExamplesRoutingModule } from './examples/examples-routing.module';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/errors/404/404-error.component';


const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'sign_in',
        component: LoginComponent
    },
    {
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
        , ExamplesRoutingModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
