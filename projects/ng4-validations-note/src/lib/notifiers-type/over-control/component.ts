import {
    Component
    , Input
    , OnInit
    , OnDestroy
} from '@angular/core';

import { Subscription } from 'rxjs';

import { Notifier } from '../../services/notifier';


@Component({
    selector: 'lib-form-validation',
    templateUrl: './template.html',
    styleUrls: ['./style.less']
})
export class OverControlComponent implements OnInit,
                                             OnDestroy {

    @Input()
    messages!: object;

    @Input()
    control: any;

    displayed: boolean;

    message!: string;

    errorMessages: Array<string> = [];

    private validationSubscription!: Subscription;

    constructor(
        private notifier: Notifier
    ) {
        this.displayed = false;
    }

    ngOnInit() {
        let
            mappedErrorKey: string;

        this.validationSubscription = this.notifier.subscribe(
            () => {
                if (this.control) {
                    mappedErrorKey = this.notifier.getNextError4(
                        this.control,
                        Notifier.getTypeKeysFrom(this.messages)
                    );
                    if (mappedErrorKey) {
                        this.displayed = true;
                        this.message = (this.messages as any)[mappedErrorKey];
                    } else {
                        this.message = '';
                        this.displayed = false;
                    }
                }
            }
        );
    }

    ngOnDestroy() {
        this.validationSubscription.unsubscribe();
    }

}
