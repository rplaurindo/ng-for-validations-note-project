import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedComponentsModule } from '../shared-components.module';
import * as TemplateDriven from './components';
import { RoutingModule } from './routing.module';

// import * as NgFormValidationNotifier from 'ng-form-validations-notifier';
import * as NgFormValidationNotifier from 'dist/ng-form-validations-notifier';


@NgModule({
    imports: [
        FormsModule,
        SharedComponentsModule,
        RoutingModule
    ],
    providers: [
        NgFormValidationNotifier.Services.Notifier
    ],
    declarations: [
        TemplateDriven.NewComponent
    ]
})
export class Module { }
