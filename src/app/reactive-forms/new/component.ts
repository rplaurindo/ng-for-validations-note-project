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

import { NgForValidationsNote } from '../../../../projects/ng-for-validations-note/src/public_api';


@Component({
    selector: 'app-reactive-form-form',
    templateUrl: '../form.html',
    styleUrls: ['../form.sass']
})
export class NewComponent implements  OnInit {

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private validator: NgForValidationsNote.Services.Notifier
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: [null, [Validators.required, Validators.minLength(4)]],
            name2: [null, [Validators.required]]
        });
    }

    onSubmit() {
        // report form to make uniq component has effect
        // console.log(this.form);
        this.validator.notify(this.form);
    }

}
