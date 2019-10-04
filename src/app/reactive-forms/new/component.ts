import {
    Component
    , OnInit
    , ViewChild
} from '@angular/core';
import {
    FormGroup
    , FormBuilder
    , Validators
} from '@angular/forms';

// import { NgForValidationsNote } from '@rplaurindo/ng-for-validations-note';
import { NgForValidationsNote } from 'projects/ng-for-validations-note';


@Component({
    selector: 'app-reactive-form-form',
    templateUrl: '../_form-template.html',
    styleUrls: ['../style.styl']
})
export class NewComponent implements OnInit {

    @ViewChild('validatorAsList', { static: false }) private validatorAsList: NgForValidationsNote.ListComponent;

    @ViewChild('uniqMessageValidator', { static: false }) private uniqMessageValidator: NgForValidationsNote.UniqComponent;

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: [null, [Validators.required, Validators.minLength(4)]],
            name2: [null, [Validators.required]]
        });
    }

    onSubmit() {
        // this.validator.notify();

        this.validatorAsList.validate(this.form);

        // this.uniqMessageValidator.validate(this.form);
    }

}
