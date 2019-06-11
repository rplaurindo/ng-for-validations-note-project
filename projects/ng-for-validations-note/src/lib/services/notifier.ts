import { Injectable } from '@angular/core';
import {
    NgForm,
    FormControl
} from '@angular/forms';
import { Subject, Subscription } from 'rxjs';


@Injectable()
export class Notifier {

    private validationSubscription: Subject<void> = new Subject();

    // constructor(control: FormControl, validationTypes: Array<string>) {
    constructor() {

    }

    static typeKeys(messages: Object): Array<string> {
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
            valuesCopy: Object = this.copyValues(ngForm);

        ngForm.resetForm(valuesCopy);
    }

    // the control would can be passed by here, but for some reason the control still doesn’t exist in any default initialization event
    subscribe(callback: Function): Subscription {
        return this.validationSubscription.subscribe(callback as any);
    }

    notify() {
        this.validationSubscription.next();
    }

    getNextErrorFor(
        control: FormControl,
        validationTypes: Array<string>
    ): string {
        let
            error: string,
            errorKeys: Array<string> = [];

        if (control.invalid) {
            errorKeys = Object.keys(control.errors);
            for (let k = 0; k < errorKeys.length; k++) {
                error = errorKeys[k];
                if (validationTypes.indexOf(error) !== -1) {
                    return error;
                }
            }
        }

        return '';
    }

    private copyValues(ngForm: NgForm): Object {
        const
            valuesMap: Object = {};

        Object.keys(ngForm.controls).forEach(control => {
            valuesMap[control] = ngForm.controls[control].value;
        });

        return valuesMap;
    }

}
