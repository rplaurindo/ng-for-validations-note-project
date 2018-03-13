// Angular imports
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// App imports
import { AppComponent } from './app.component';

import { ErrorComponent } from './modules/errors/error.component';
import { InterpolationComponent } from './modules/examples/components/interpolation/interpolation.component';

const ROOT_ROUTES: Routes = [
    // home
    {
        path: '',
        component: InterpolationComponent
    },
    // {
    //     path: 'interpolation',
    //     // controller
    //     component: InterpolationComponent
    // },
    {
        path: '**',
        component: ErrorComponent
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROOT_ROUTES);
