// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ModuleWithProviders } from '@angular/core';

// Example Module imports
import { CrudComponent } from './components/crud/cruds.component';
import { CrudEditFormComponent } from './components/crud/crud-edit-form/crud-edit-form.component';
import { CrudNewFormComponent } from './components/crud/crud-new-form/crud-new-form.component';
import { CrudShowComponent } from './components/crud/crud-show/crud-show.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EventComponent } from './components/event/event.component';
import { EventSubscribeComponent } from './components/event-subscribe/event-subscribe.component';
import { ManipulatingDomComponent } from './components/manipulating-dom/manipulating-dom.component';
import { RedirectingComponent } from './components/redirecting/redirecting.component';
import { RouteParamsComponent } from './components/route-params/route-params.component';


const exampleRoutes: Routes = [
    {
        path: 'cruds',
        component: CrudComponent,
        children: [
            { path: 'novo', component: CrudNewFormComponent },
            {
                path: ':id', component: CrudShowComponent,
                // resolve: { cruds: CrudShowResolver }
            },
            {
                path: ':id/editar', component: CrudEditFormComponent
            }
        ]
    },
    {
        path: 'data-bindings',
        component: DataBindingComponent
    },
    {
        path: 'events',
        component: EventComponent
    },
    {
        path: 'event-subscribe',
        component: EventSubscribeComponent
    },
    {
        path: 'manipulating-dom',
        component: ManipulatingDomComponent
    },
    {
        path: 'redirecting',
        component: RedirectingComponent
    },
    {
        path: 'route-params/:data',
        component: RouteParamsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(exampleRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ExamplesRoutingModule { }
