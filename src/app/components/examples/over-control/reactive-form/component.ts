import {
    Component
    , OnInit
} from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';

// import { Ng4ValidationsNote } from '@actjs.on/ng4-validations-note';
import { Ng4ValidationsNote } from 'projects/ng4-validations-note/ng4-validations-note';


@Component({
    selector: 'app-form-validation-as-over-control',
    templateUrl: './template.html',
    styleUrls: ['./style.styl']
})
export class OverControlExampleComponent implements OnInit {

    form: FormGroup;

    constructor(
        private validator: Ng4ValidationsNote.Notifier
        , private formBuilder: FormBuilder
    ) {

        this.form = this.formBuilder.group({
            name: new FormControl('',
                {
                    validators: [Validators.required, Validators.minLength(4)]
                    , updateOn: 'blur'
                }
            )
            , name2: new FormControl('',
                {
                    validators: [ Validators.required]
                    , updateOn: 'blur'
                }
            )
        });

    }

    ngOnInit() {

    }

    onSubmit() {
        this.validator.notify();
    }

}
