import { NgModule } from '@angular/core';

import * as ReactiveForms from './components';

import { RoutingModule } from './routing.module';
import { SharedComponentsModule } from '../shared-components.module';

// import * as NgFormValidationNotifier from 'ng-form-validations-notifier';


@NgModule({
    imports: [
        SharedComponentsModule,
        RoutingModule
    ],
    providers: [
        // NgFormValidationNotifier.Services.Notifier
    ],
    declarations: [
        ReactiveForms.NewComponent
    ]
})
export class Module { }
