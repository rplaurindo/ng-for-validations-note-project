import {
    Component
    , OnInit
} from '@angular/core';

import { Ng4ValidationsNote } from '@actjs.on/ng4-validations-note';
// import { Notifier } from 'projects/ng4-validations-note';

import { IModelTemplateExample } from '../i-model-template-example';


@Component({
    selector: 'app-template-driven-form',
    templateUrl: '../template.html',
    styleUrls: ['../style.styl']
})
export class NewComponent implements OnInit {

    modelReference: IModelTemplateExample;

    constructor(
        private validator: Ng4ValidationsNote.Notifier
    ) {
        this.modelReference = {
            name: undefined,
            name2: undefined
        };
    }

    ngOnInit() {

    }

    onSubmit() {
        this.validator.notify();
    }

}
