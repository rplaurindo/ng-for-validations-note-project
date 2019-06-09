import { NgModule } from '@angular/core';

import { RoutingModule } from './routing.module';

import { PageNotFoundComponent } from './component';


@NgModule({
    imports: [
        RoutingModule
    ],
    declarations: [
        PageNotFoundComponent
    ],
    exports: [
        PageNotFoundComponent
    ],
    providers: [

    ]
})
export class PageNotFoundErrorModule { }
