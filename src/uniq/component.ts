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
import { Subscription } from 'rxjs';

import { NgFormValidations } from '../services';


@Component({
    selector: 'app-form-validation',
    templateUrl: './component.html',
    styleUrls: ['./component.sass']
})
export class UniqComponent implements OnInit,
                                      OnDestroy {

    canShow: Boolean = false;
    message: string;
    errorMessages: Array<String> = [];

    private validationSubscription: Subscription;

    @Input()
    messages: Object;

    @Input()
    control: FormControl;

    constructor(private validator: NgFormValidations) {}

    private typeKeys(messages: Object): Array<string> {
        const
            keys: Array<string> = [];

        Object.keys(messages).forEach((k) => {
            keys.push(k);
        });

        return keys;
    }

    ngOnInit() {
        let
            mappedErrorKey: string,
            controls: Object,
            control: FormControl;

        this.validationSubscription = this.validator.getValidation().subscribe(
            (form: NgForm | FormGroup) => {

                if (this.control) {
                    mappedErrorKey = this.validator.getValidationErrorFor(
                        this.control,
                        this.typeKeys(this.messages)
                    );
                } else if (form) {
                    controls = form.controls;
                    for (let k of Object.keys(controls)) {
                        control = controls[k];
                        mappedErrorKey = this.validator.getValidationErrorFor(
                            control,
                            this.typeKeys(this.messages)
                        );
                        if (mappedErrorKey) {
                            break;
                        }
                    }
                }

                if (mappedErrorKey) {
                    this.canShow = true;
                    this.message = this.messages[mappedErrorKey];
                } else {
                    this.message = '';
                    this.canShow = false;
                }
            }
        );
    }

    ngOnDestroy() {
        this.validationSubscription.unsubscribe();
    }

}
