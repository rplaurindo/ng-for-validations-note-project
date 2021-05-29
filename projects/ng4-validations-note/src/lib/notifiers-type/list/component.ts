import {
    Component
    , Input
} from '@angular/core';
import {
    AbstractControl,
    FormGroup,
    NgForm
} from '@angular/forms';

import { Notifier } from '../../services/notifier';


@Component({
    selector: 'lib-list-form-validation',
    templateUrl: './template.html',
    styleUrls: ['./style.less']
})
export class ListComponent {

    @Input()
    messages!: object;

    @Input()
    nameTranslations!: object;

    displayed: boolean;

    errorMessages: Array<string> = [];

    constructor(
        private notifier: Notifier
    ) {
        this.displayed = false;
    }

    validate(form: NgForm | FormGroup) {

        let mappedErrorKey!: string;

        let controls: object;

        let control: AbstractControl;

        if (form) {
            controls = form.controls;
            this.errorMessages = [];
            for (const fieldName of Object.keys(form.controls)) {
                control = (controls as any)[fieldName];
                mappedErrorKey = this.notifier.getNextError4(
                    control,
                    Notifier.getTypeKeysFrom(this.messages)
                );

                if ((this.nameTranslations as any)[fieldName] && mappedErrorKey) {
                    this.errorMessages.push(`\n${(this.nameTranslations as any)[fieldName]} ${(this.messages as any)[mappedErrorKey]}`);
                }
            }

            if (mappedErrorKey) {
                this.displayed = true;
            }
        }
    }

}
