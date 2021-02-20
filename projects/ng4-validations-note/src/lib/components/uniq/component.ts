import {
    Component,
    Input,
    OnInit
} from '@angular/core';
import {
    FormControl,
    FormGroup,
    NgForm
} from '@angular/forms';

import { Notifier } from '../../services/notifier';


@Component({
    selector: 'lib-form-uniq-validation',
    templateUrl: './template.html',
    styleUrls: ['./style.styl']
})
export class UniqComponent implements OnInit {

    @Input()
    messages: object;

    @Input()
    control: any;

    @Input()
    nameTranslations: object;

    displayed: boolean;

    message: string;

    errorMessages: Array<string> = [];

    constructor(
        private notifier: Notifier
    ) {
        this.displayed = false;
    }

    ngOnInit() {

    }

    validate(form: NgForm | FormGroup) {

        let mappedErrorKey: string;

        let controls: object;

        let control: FormControl;

        if (form) {
            controls = form.controls;
            for (const k of Object.keys(controls)) {
                control = controls[k];
                mappedErrorKey = this.notifier.getNextError4(
                    control,
                    Notifier.getTypeKeysFrom(this.messages)
                );
                if (mappedErrorKey) {
                    this.displayed = true;
                    this.message = `
                                ${this.nameTranslations[k]} ${this.messages[mappedErrorKey]}
                            `;
                    break;
                } else {
                    this.message = '';
                    this.displayed = false;
                }
            }
        }
    }

}
