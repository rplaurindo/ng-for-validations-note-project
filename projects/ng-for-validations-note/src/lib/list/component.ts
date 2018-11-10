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

import { Services } from '../services/namespace';


@Component({
    selector: 'app-form-validation-list',
    templateUrl: './template.html',
    styleUrls: ['./style.sass']
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

    constructor(
        private notifier: Services.Notifier
    ) { }

    ngOnInit() {
        let
            mappedErrorKey: string;

        this.validationSubscription = this.notifier.getValidation().subscribe(
            (form: NgForm | FormGroup) => {
                let
                    controls: Object,
                    control: FormControl;

                if (form) {
                    controls = form.controls;
                    this.errorMessages = [];
                    for (let k of Object.keys(form.controls)) {
                        control = controls[k];
                        mappedErrorKey = this.notifier.getValidationErrorFor(
                            control,
                            Services.Notifier.typeKeys(this.messages)
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
