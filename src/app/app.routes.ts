import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';

import { ExampleComponent } from './components/example/example.component';

// const routes: Routes = [

export const routes: Routes = [
    // home
    // {
    //     path: '',
    //     component: HomeComponent
    // },

    // Products
    {
        path: 'examples',
        // controller
        component: ExampleComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];

export const RoutingModule = RouterModule.forRoot(routes);
