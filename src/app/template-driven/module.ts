import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedComponentsModule } from '../shared-components.module';
import * as Components from './components';
import { RoutingModule } from './routing.module';


@NgModule({
    imports: [
        FormsModule,
        SharedComponentsModule,
        RoutingModule
    ],
    providers: [
    ],
    declarations: [
        Components.NewComponent
    ]
})
export class Module { }
