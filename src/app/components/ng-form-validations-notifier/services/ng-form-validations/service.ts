import { Injectable } from '@angular/core';
import {
    NgForm,
    FormControl,
    FormGroup
} from '@angular/forms';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class NgFormValidations {

    private componentValidationSubscription: Subject<Object> = new Subject();
    private _emitValidity: Function;

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

    resetForm(ngForm: NgForm) {
        const
            valuesCopy: Object = this.copyValues(ngForm);

        ngForm.resetForm(valuesCopy);
    }

    getValidationErrorFor(
        control: FormControl,
        validationTypes: Array<string>
    ): string {
        if (control.invalid) {
        for (const error of Object.keys(control.errors)) {
            if (validationTypes.indexOf(error) !== -1) {
                return error;
                }
            }
        }

        return '';
    }

    // the control would can be passed by here, but for some reason the control still doesn’t exist in any default initialization event
    getValidationOverComponent(): Subject<Object> {
        return this.componentValidationSubscription;
    }

    // getValidationOverForm(): <Object> {
    //     // return this.validationSubscription;
    // }

    notify(form?: NgForm | FormGroup) {
        this.componentValidationSubscription.next({ form: form });
    }

}
