import {
    Component,
    OnInit
} from '@angular/core';

// import { } from '@rplaurindo/ng-for-validations-note';
import { NgForValidationsNote } from 'projects/ng-for-validations-note';

import { ModelTemplateExample } from '../model-template-example';


@Component({
    selector: 'app-template-driven-form',
    templateUrl: '../_form.html',
    styleUrls: ['../style.sass']
})
export class NewComponent implements OnInit {

    modelReference: ModelTemplateExample;

    constructor(
        private validator: NgForValidationsNote.Services.Notifier
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
