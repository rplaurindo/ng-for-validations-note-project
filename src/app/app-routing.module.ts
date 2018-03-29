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
import { ErrorComponent } from './components/errors/error.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'sign_in',
        component: LoginComponent
    },
    {
        path: '**',
        component: ErrorComponent
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
