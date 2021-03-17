import { Injectable } from '@angular/core';
import {
    NgForm,
    FormControl,
    AbstractControl
} from '@angular/forms';
import {
    Subject,
    Subscription
} from 'rxjs';


@Injectable()
export class Notifier {

    private validationSubscription: Subject<void> = new Subject();

    // constructor(control: FormControl, validationTypes: Array<string>) {
    constructor() {

    }

    static getTypeKeysFrom(messages: object): Array<string> {
        const
            keys: Array<string> = [];

        Object.keys(messages).forEach(
            (k) => {
                keys.push(k);
            }
        );

        return keys;
    }

    resetForm(ngForm: NgForm) {
        const
            valuesCopy: object = this.copyValues(ngForm);

        ngForm.resetForm(valuesCopy);
    }

    // the control would can be passed by here, but for some reason the control still doesn’t exist in any default initialization event
    subscribe(callback: () => void): Subscription {
        return this.validationSubscription.subscribe(callback as any);
    }

    notify() {
        this.validationSubscription.next();
    }

    // https://angular.io/guide/form-validation
    getNextError4(control: AbstractControl, validationTypes: Array<string>): string {

        let error: string;

        let errorKeys: Array<string> = [];

        if (control.invalid) {
            errorKeys = Object.keys(control.errors as any);
            for (error of errorKeys) {
                if (validationTypes.indexOf(error) !== -1) {
                    return error;
                }
            }
        }

        return '';
    }

    private copyValues(ngForm: NgForm): object {
        const
            valuesMap: object = {};

        Object.keys(ngForm.controls).forEach(control => {
            (valuesMap as any)[control] = ngForm.controls[control].value;
        });

        return valuesMap;
    }

}
