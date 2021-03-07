import {
    Component
    , OnInit
} from '@angular/core';

// import { Ng4ValidationsNote } from '@actjs.on/ng4-validations-note';
import { Ng4ValidationsNote } from 'projects/ng4-validations-note/ng4-validations-note';

import { IModelTemplateExample } from './i-model-template-example';


@Component({
    selector: 'app-form-validation',
    templateUrl: './template.html',
    styleUrls: ['./style.styl']
})
export class OverControlAsTemplateDrivenExampleComponent implements OnInit {

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
