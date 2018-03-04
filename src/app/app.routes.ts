import { DataBindingComponent } from './components/data-binding/example.component';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ErrorComponent } from './modules/errors/error.component';

// const routes: Routes = [

export const routes: Routes = [
    // home
    // {
    //     path: '',
    //     component: HomeComponent
    // },

    // Products
    {
        path: 'data-binding',
        // controller
        component: DataBindingComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];

export const RoutingModule = RouterModule.forRoot(routes);
