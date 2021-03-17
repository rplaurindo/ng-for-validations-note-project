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

// import { Ng4ValidationsNote } from '@actjs.on/ng4-validations-note';
import { Ng4ValidationsNote } from 'projects/ng4-validations-note/ng4-validations-note';


@Component({
    selector: 'app-form-validation-as-list',
    templateUrl: './template.html',
    styleUrls: ['./style.styl']
})
export class ListExampleComponent implements OnInit {

    @ViewChild('validatorAsList', { static: false }) private validatorAsList!: Ng4ValidationsNote.ListComponent;

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.form = this.formBuilder.group({
            name: [null, [Validators.required, Validators.minLength(4)]],
            name2: [null, [Validators.required]]
        });
    }

    ngOnInit() {

    }

    onSubmit() {
        this.validatorAsList.validate(this.form);
    }

}
