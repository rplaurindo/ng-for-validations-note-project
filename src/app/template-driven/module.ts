import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedComponentsModule } from '../shared-components.module';
import { RoutingModule } from './routing.module';

import { NewComponent } from './new/component';


@NgModule({
    imports: [
        FormsModule,
        SharedComponentsModule,
        RoutingModule
    ],
    providers: [
    ],
    declarations: [
        NewComponent
    ]
})
export class TemplateDrivenModule { }
