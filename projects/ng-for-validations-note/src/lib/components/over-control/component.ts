import {
    Component,
    Input,
    OnInit,
    OnDestroy
} from '@angular/core';
import {
    FormControl
} from '@angular/forms';
import { Subscription } from 'rxjs';

import { Services } from '../../services/namespace';


@Component({
    selector: 'lib-form-validation',
    templateUrl: './template.html',
    styleUrls: ['./style.sass']
})
export class OverControlComponent implements OnInit,
                                             OnDestroy {

    @Input()
    messages: Object;

    @Input()
    control: FormControl;

    canShow: Boolean = false;
    message: string;
    errorMessages: Array<String> = [];

    private validationSubscription: Subscription;

    constructor(
        private notifier: Services.Notifier
    ) { }

    ngOnInit() {
        let
            mappedErrorKey: string;

        this.validationSubscription = this.notifier.subscribe(
            () => {
                if (this.control) {
                    mappedErrorKey = this.notifier.getNextErrorFor(
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
