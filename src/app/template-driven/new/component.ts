import {
    Component,
    OnInit
} from '@angular/core';

import { Notifier } from 'ng-for-validations-note';

import { ModelTemplateExample } from '../model-template-example';


@Component({
    selector: 'app-template-driven-form',
    templateUrl: '../_form.html',
    styleUrls: ['../style.sass']
})
export class NewComponent implements OnInit {

    modelReference: ModelTemplateExample;

    constructor(
        private validator: Notifier
    ) {
        this.modelReference = {
            name: null,
            name2: null
        };
    }

    ngOnInit() {

    }

    onSubmit() {
        this.validator.notify();
    }

}
