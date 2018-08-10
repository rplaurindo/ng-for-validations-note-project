import { Injectable } from '@angular/core';
import {
    NgForm,
    FormControl,
    FormGroup
} from '@angular/forms';
import { Subject } from 'rxjs';


// @Injectable()
@Injectable({
    providedIn: 'root'
})
export class Notifier {

    private validationSubscription: Subject<Object> = new Subject();

    // constructor(control: FormControl, validationTypes: Array<string>) {
    constructor() {}

    private copyValues(ngForm: NgForm): Object {
        const
            valuesMap: Object = {};

        Object.keys(ngForm.controls).forEach(control => {
            valuesMap[control] = ngForm.controls[control].value;
        });

        return valuesMap;
    }

    static typeKeys(messages: Object): Array<string> {
        const
            keys: Array<string> = [];

        Object.keys(messages).forEach((k) => {
            keys.push(k);
        });

        return keys;
    }

    resetForm(ngForm: NgForm) {
        const
            valuesCopy: Object = this.copyValues(ngForm);

        ngForm.resetForm(valuesCopy);
    }

    // the control would can be passed by here, but for some reason the control still doesn’t exist in any default initialization event
    getValidation(): Subject<Object> {
        return this.validationSubscription;
    }

    notify(form?: NgForm | FormGroup) {
        this.validationSubscription.next(form);
    }

    getValidationErrorFor(
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

}
