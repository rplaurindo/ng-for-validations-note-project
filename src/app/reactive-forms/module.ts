// index

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedComponentsModule } from '../shared-components.module';
import * as Components from './components';
import { RoutingModule } from './routing.module';


@NgModule({
    imports: [
        ReactiveFormsModule,
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
