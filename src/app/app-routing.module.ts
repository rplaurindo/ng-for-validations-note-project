// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// App imports

// module
import { ExamplesRoutingModule } from './modules/examples/examples-routing.module';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/errors/error.component';

const ROOT_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROOT_ROUTES, {
            // debugging purposes only
            // enableTracing: true
        }),
        ExamplesRoutingModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
