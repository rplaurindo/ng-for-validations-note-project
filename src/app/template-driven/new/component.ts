import {
    Component,
    OnInit
} from '@angular/core';

import { Notifier } from 'ng-for-validations-note';


@Component({
    selector: 'app-template-driven-form',
    templateUrl: '../_form.html',
    styleUrls: ['../style.sass']
})
export class NewComponent implements OnInit {

    constructor(
        // private validator: Notifier
    ) { }

    ngOnInit() {
    }

    onSubmit() {
        // this.validator.notify();
    }

}
