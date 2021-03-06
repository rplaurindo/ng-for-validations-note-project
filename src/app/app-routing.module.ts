import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';


const appRoutes: Routes = [
    {
        path: ''
        , redirectTo: 'examples/over-control'
        , pathMatch: 'full'
    }
    , {
        path: 'examples',
        children: [
            {
                path: 'novo',
                component:
            }
        ]
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
