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

// import { NgForValidationsNote } from '../../../../projects/ng-for-validations-note/src/public_api';
import { NgForValidationsNote } from 'ng-for-validations-note';
import { Notifier } from 'ng-for-validations-note';


@Component({
    selector: 'app-reactive-form-form',
    templateUrl: '../_form.html',
    styleUrls: ['../style.sass']
})
export class NewComponent implements OnInit {

    @ViewChild('validatorAsList', { static: true }) private validatorAsList: NgForValidationsNote.Components.ListComponent;

    @ViewChild('uniqMessageValidator', { static: true }) private uniqMessageValidator: NgForValidationsNote.Components.UniqComponent;

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

        this.validatorAsList.validate(this.form);

        // this.uniqMessageValidator.validate(this.form);
    }

}
