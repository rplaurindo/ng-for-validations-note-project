import {
    Component,
    OnInit,
    Output
} from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators
} from '@angular/forms';

import { Notifier } from 'ng-form-validations-notifier/services';


@Component({
    selector: 'app-reactive-forms',
    templateUrl: '../component.html',
    styleUrls: ['../component.sass']
})
export class NewComponent implements  OnInit {

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private validator: Notifier
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: [null, [Validators.required, Validators.minLength(4)]],
            name2: [null, [Validators.required]]
        });
    }

    onSubmit() {
        this.validator.notify();
        // this.validator.notify(this.form);
    }

}
