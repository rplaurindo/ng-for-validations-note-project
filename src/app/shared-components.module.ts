import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as NgFormValidationsNotifier from 'ng-form-validations-notifier';


@NgModule({
    imports: [
        CommonModule,
        NgFormValidationsNotifier.Module
    ],
    declarations: [
    ],
    exports: [
        CommonModule,
        NgFormValidationsNotifier.Module
    ]
})
export class SharedComponentsModule { }
