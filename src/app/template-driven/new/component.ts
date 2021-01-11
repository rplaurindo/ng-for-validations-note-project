import {
    Component
    , OnInit
} from '@angular/core';

import { Notifier } from '@actjs.on/ng4-validations-note';

import { IModelTemplateExample } from '../i-model-template-example';


@Component({
    selector: 'app-template-driven-form',
    templateUrl: '../template.html',
    styleUrls: ['../style.styl']
})
export class NewComponent implements OnInit {

    modelReference: IModelTemplateExample;

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
