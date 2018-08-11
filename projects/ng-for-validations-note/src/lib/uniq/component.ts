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

import { Services } from '..';


@Component({
    selector: 'app-form-uniq-validation',
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

    @Input()
    nameTranslations: Object;

    constructor(
        private notifier: Services.Notifier
    ) {}

    ngOnInit() {
        let
            mappedErrorKey: string,
            controls: Object,
            control: FormControl;

        this.validationSubscription = this.notifier.getValidation().subscribe(
            (form: NgForm | FormGroup) => {

                if (form) {
                    controls = form.controls;
                    for (let k of Object.keys(controls)) {
                        control = controls[k];
                        mappedErrorKey = this.notifier.getValidationErrorFor(
                            control,
                            Services.Notifier.typeKeys(this.messages)
                        );
                        if (mappedErrorKey) {
                            this.canShow = true;
                            this.message = `
                                ${this.nameTranslations[k]} ${this.messages[mappedErrorKey]}
                            `;
                            break;
                        } else {
                            this.message = '';
                            this.canShow = false;
                        }
                    }
                }
            }
        );
    }

    ngOnDestroy() {
        this.validationSubscription.unsubscribe();
    }

}
