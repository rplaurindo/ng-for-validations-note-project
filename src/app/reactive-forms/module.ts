import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedComponentsModule } from '../shared-components.module';
import * as ReactiveForms from './components';
import { RoutingModule } from './routing.module';

// import * as NgFormValidationNotifier from 'ng-form-validations-notifier';
import * as NgFormValidationNotifier from 'dist/ng-form-validations-notifier';


@NgModule({
    imports: [
        ReactiveFormsModule,
        SharedComponentsModule,
        RoutingModule
    ],
    providers: [
        NgFormValidationNotifier.Services.Notifier
    ],
    declarations: [
        ReactiveForms.NewComponent
    ]
})
export class Module { }
