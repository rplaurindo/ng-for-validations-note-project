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

import { Notifier } from '../services';


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

    constructor(private notifier: Notifier) {}

    ngOnInit() {
        let
            mappedErrorKey: string,
            controls: Object,
            control: FormControl;

        this.validationSubscription = this.notifier.getValidation().subscribe(
            (form: NgForm | FormGroup) => {

                if (this.control) {
                    mappedErrorKey = this.notifier.getValidationErrorFor(
                        this.control,
                        Notifier.typeKeys(this.messages)
                    );
                } else if (form) {
                    controls = form.controls;
                    for (let k of Object.keys(controls)) {
                        control = controls[k];
                        mappedErrorKey = this.notifier.getValidationErrorFor(
                            control,
                            Notifier.typeKeys(this.messages)
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
