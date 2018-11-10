import {
    Component,
    OnInit,
    ElementRef
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { NgForValidationsNote } from '../../../../projects/ng-for-validations-note/src/public_api';


@Component({
    selector: 'app-template-driven-form',
    templateUrl: '../form.html',
    styleUrls: ['../form.sass']
})
export class NewComponent implements OnInit {

    constructor(
        private http: HttpClient,
        private validator: NgForValidationsNote.Services.Notifier
    ) { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        this.validator.notify(form);
    }

}
