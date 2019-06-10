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

import { Services } from '../../services/namespace';


@Component({
    selector: 'lib-form-uniq-validation',
    templateUrl: './template.html',
    styleUrls: ['./style.sass']
})
export class UniqComponent implements OnInit {

    @Input()
    messages: Object;

    @Input()
    control: FormControl;

    @Input()
    nameTranslations: Object;

    canShow: Boolean = false;
    message: string;
    errorMessages: Array<String> = [];

    constructor(
        private notifier: Services.Notifier
    ) { }

    ngOnInit() {

    }

    validate(form: NgForm | FormGroup) {
        let
            mappedErrorKey: string,
            controls: Object,
            control: FormControl;

        if (form) {
            controls = form.controls;
            for (let k of Object.keys(controls)) {
                control = controls[k];
                mappedErrorKey = this.notifier.getNextErrorFor(
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

}
