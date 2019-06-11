import {
    Component,
    OnInit
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { NgForValidationsNote } from '../../../../projects/ng-for-validations-note/src/public_api';


@Component({
    selector: 'app-template-driven-form',
    templateUrl: '../_form.html',
    styleUrls: ['../style.sass']
})
export class NewComponent implements OnInit {

    constructor(
        private validator: NgForValidationsNote.Services.Notifier
    ) { }

    ngOnInit() {
    }

    onSubmit() {
        this.validator.notify();
    }

}
