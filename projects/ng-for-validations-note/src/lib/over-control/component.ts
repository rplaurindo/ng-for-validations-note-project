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
    selector: 'app-form-validation',
    templateUrl: './component.html',
    styleUrls: ['./component.sass']
})
export class OverControlComponent implements OnInit,
                                             OnDestroy {

    canShow: Boolean = false;
    message: string;
    errorMessages: Array<String> = [];

    private validationSubscription: Subscription;

    @Input()
    messages: Object;

    @Input()
    control: FormControl;

    constructor(
        private notifier: Services.Notifier
    ) {}

    ngOnInit() {
        let
            mappedErrorKey: string;

        this.validationSubscription = this.notifier.getValidation().subscribe(
            () => {
                if (this.control) {
                    mappedErrorKey = this.notifier.getValidationErrorFor(
                        this.control,
                        Services.Notifier.typeKeys(this.messages)
                    );
                    if (mappedErrorKey) {
                        this.canShow = true;
                        this.message = this.messages[mappedErrorKey];
                    } else {
                        this.message = '';
                        this.canShow = false;
                    }
                }
            }
        );
    }

    ngOnDestroy() {
        this.validationSubscription.unsubscribe();
    }

}
