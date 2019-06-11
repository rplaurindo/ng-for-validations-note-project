import {
    Component,
    OnInit,
    ViewChild
} from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators
} from '@angular/forms';

import { NgForValidationsNote } from '../../../../projects/ng-for-validations-note/src/public_api';


@Component({
    selector: 'app-reactive-form-form',
    templateUrl: '../_form.html',
    styleUrls: ['../style.sass']
})
export class NewComponent implements OnInit {

    @ViewChild('validatorAsList') private validatorAsList: NgForValidationsNote.Components.ListComponent;

    @ViewChild('uniqMessageValidator') private uniqMessageValidator: NgForValidationsNote.Components.UniqComponent;

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
        this.validator.notify();

        this.validatorAsList.validate(this.form);

        // this.uniqMessageValidator.validate(this.form);
    }

}
