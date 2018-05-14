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
import { Subscription } from 'rxjs/Subscription';

import { NgFormValidations } from '../services/ng-form-validations';


@Component({
    selector: 'app-form-validation',
    templateUrl: './component.html',
    styleUrls: ['./component.sass']
})
export class IndividualComponent implements OnInit,
                                            OnDestroy {

    canShow: Boolean = false;
    message: string;

    private validationSubscription: Subscription;

    @Input()
    control: FormControl;

    @Input()
    messages: Object;

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
            () => {
                mappedErrorKey = this.validator.getValidationErrorFor(
                    this.control,
                    this.typeKeys(this.messages)
                );

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
