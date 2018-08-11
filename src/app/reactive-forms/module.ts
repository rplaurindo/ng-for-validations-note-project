import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedComponentsModule } from '../shared-components.module';
import { RoutingModule } from './routing.module';

import { NewComponent } from './new/component';


@NgModule({
    imports: [
        ReactiveFormsModule,
        SharedComponentsModule,
        RoutingModule
    ],
    providers: [
    ],
    declarations: [
        NewComponent
    ]
})
export class ReactiveFormsExampleModule { }
