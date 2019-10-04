import {
    Component
    , OnInit
} from '@angular/core';

// import { Notifier } from '@rplaurindo/ng-for-validations-note';
import { Notifier } from 'projects/ng-for-validations-note';

import { ModelTemplateExample } from '../model-template-example';


@Component({
    selector: 'app-template-driven-form',
    templateUrl: '../_form-template.html',
    styleUrls: ['../style.styl']
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
