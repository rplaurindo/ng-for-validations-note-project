import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { SharedComponentsModule } from '../shared-components.module';

import { RoutingModule } from './routing.module';

import { NewComponent } from './new/component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RoutingModule,

        SharedComponentsModule
    ],
    declarations: [
        NewComponent
    ],
    providers: [

    ]
})
export class TemplateDrivenModule { }
