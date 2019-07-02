import {
    Component,
    Input,
    OnInit,
    OnDestroy
} from '@angular/core';

import { Subscription } from 'rxjs';

import { Notifier } from '../../services';


@Component({
    selector: 'lib-form-validation',
    templateUrl: './template.html',
    styleUrls: ['./style.sass']
})
export class OverControlComponent implements OnInit,
                                             OnDestroy {

    @Input()
    messages: object;

    @Input()
    control: any;

    canShow: boolean;
    message: string;
    errorMessages: Array<string> = [];

    private validationSubscription: Subscription;

    constructor(
        private notifier: Notifier
    ) {
        this.canShow = false;
    }

    ngOnInit() {
        let
            mappedErrorKey: string;

        this.validationSubscription = this.notifier.subscribe(
            () => {
                if (this.control) {
                    mappedErrorKey = this.notifier.getNextErrorFor(
                        this.control,
                        Notifier.typeKeys(this.messages)
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
