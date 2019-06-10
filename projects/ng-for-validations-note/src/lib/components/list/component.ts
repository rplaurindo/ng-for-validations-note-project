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
    selector: 'lib-form-validation-list',
    templateUrl: './template.html',
    styleUrls: ['./style.sass']
})
export class ListComponent implements OnInit {

    @Input()
    messages: Object;

    @Input()
    nameTranslations: Object;

    canShow: Boolean = false;
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
            control: FormControl
        ;

        if (form) {
            controls = form.controls;
            this.errorMessages = [];
            for (const fieldName of Object.keys(form.controls)) {
                control = controls[fieldName];
                mappedErrorKey = this.notifier.getNextErrorFor(
                    control,
                    Services.Notifier.typeKeys(this.messages)
                );

                if (this.nameTranslations[fieldName] && mappedErrorKey) {
                    this.errorMessages.push(`\n${this.nameTranslations[fieldName]} ${this.messages[mappedErrorKey]}`);
                }
            }

            if (mappedErrorKey) {
                this.canShow = true;
            }
        }
    }

}
