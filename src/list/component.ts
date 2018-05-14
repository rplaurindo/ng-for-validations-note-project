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
    selector: 'app-form-validation-list',
    templateUrl: './component.html',
    styleUrls: ['./component.sass']
})
export class ListComponent implements OnInit,
                                            OnDestroy {

    canShow: Boolean = false;
    errorMessages: Array<String> = [];

    private validationSubscription: Subscription;

    @Input()
    messages: Object;

    @Input()
    nameTranslations: Object;

    constructor(private validator: NgFormValidations) {}

    typeKeys(messages: Object): Array<string> {
        const
            keys: Array<string> = [];

        Object.keys(messages).forEach((k) => {
            keys.push(k);
        });

        return keys;
    }

    ngOnInit() {
        let
            mappedErrorKey: string;

        this.validationSubscription = this.validator.getValidation().subscribe(
            (form: NgForm | FormGroup) => {
                let
                    controls: Object,
                    control: FormControl;

                if (form) {
                    controls = form.controls;
                    this.errorMessages = [];
                    for (let k of Object.keys(form.controls)) {
                        control = controls[k];
                        mappedErrorKey = this.validator.getValidationErrorFor(
                            control,
                            this.typeKeys(this.messages)
                        );

                        if (this.nameTranslations[k] && mappedErrorKey) {
                            this.errorMessages.push(`
                                ${this.nameTranslations[k]} ${this.messages[mappedErrorKey]}
                            `);
                        }
                    }

                    if (mappedErrorKey) {
                        this.canShow = true;
                    }
                }

            }
        );
    }

    ngOnDestroy() {
        this.validationSubscription.unsubscribe();
    }

}
