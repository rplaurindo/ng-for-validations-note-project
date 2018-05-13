import {
    Component,
    Input,
    OnInit,
    OnDestroy
} from '@angular/core';
import {
    FormControl,
    FormGroup,
    NgForm
} from '@angular/forms';

import { NgFormValidations } from '../../services/ng-form-validations';


@Component({
    selector: 'app-form-validation-msgs',
    templateUrl: './component.html',
    styleUrls: ['./component.sass']
})
export class ValidationComponent implements OnInit {

    canShow: Boolean = false;
    message: String;
    errorMessages: Array<String> = [];

    @Input()
    control: FormControl;

    @Input()
    messages: Object;

    constructor(
        private validator: NgFormValidations,
    ) {}

    validationTypeKeys(): Array<string> {
        const
        keys: Array<string> = [];

        Object.keys(this.messages).forEach((k) => {
            keys.push(k);
        });

        return keys;
    }

    ngOnInit() {
        let
            error: string;

        this.validator.getValidationOverComponent().subscribe((form: NgForm | FormGroup) => {
            // console.log(this.control)
            // if (this.control) {
                error = this.validator.getValidationErrorFor(
                    this.control,
                    this.validationTypeKeys()
                );
            // } else {
                // iterar sobre controls...
            // }

            // console.log('here')
            this.errorMessages = [];
            if (error) {
                this.canShow = true;
                // this.message = this.messages[error];
                this.errorMessages.push(this.messages[error]);
            } else {
                // this.message = '';
                this.errorMessages = [];
                this.canShow = false;
            }
        });

        // colocar pra emitir

    }

}
