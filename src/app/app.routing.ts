import { ErrorComponent } from './modules/errors/error.component';
import { InterpolationComponent } from './modules/examples/components/interpolation/interpolation.component';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// const routes: Routes = [

export const routes: Routes = [
    // home
    // {
    //     path: '',
    //     component: HomeComponent
    // },

    // Products
    {
        path: 'interpolation',
        // controller
        component: InterpolationComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];

export const RoutingModule = RouterModule.forRoot(routes);
