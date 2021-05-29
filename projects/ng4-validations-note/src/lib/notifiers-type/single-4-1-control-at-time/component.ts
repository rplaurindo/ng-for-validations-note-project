import {
    Component
    , Input
    , OnInit
} from '@angular/core';
import {
    AbstractControl,
    FormGroup,
    NgForm
} from '@angular/forms';

import { Notifier } from '../../services/notifier';


@Component({
    selector: 'lib-single-4-1-control-at-time-form-validation',
    templateUrl: './template.html',
    styleUrls: ['./style.less']
})
export class Single41ControlAtTimeComponent implements OnInit {

    @Input()
    messages!: object;

    @Input()
    control: any;

    @Input()
    nameTranslations!: object;

    displayed: boolean;

    message!: string;

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

        let control: AbstractControl;

        if (form) {
            controls = form.controls;
            for (const k of Object.keys(controls)) {
                control = (controls as any)[k];
                mappedErrorKey = this.notifier.getNextError4(
                    control,
                    Notifier.getTypeKeysFrom(this.messages)
                );
                if (mappedErrorKey) {
                    this.displayed = true;
                    this.message = `
                                ${(this.nameTranslations as any)[k]} ${(this.messages as any)[mappedErrorKey]}
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
