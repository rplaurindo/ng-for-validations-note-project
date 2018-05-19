import {
    Component,
    OnInit,
    ElementRef
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// import { Notifier } from 'ng-form-validations-notifier/services';
import * as NgFormValidationsNotifier from 'dist/ng-form-validations-notifier';

@Component({
    selector: 'app-template-driven-form',
    templateUrl: '../form.html',
    styleUrls: ['../form.sass']
})
export class NewComponent implements OnInit {

    constructor(
        private http: HttpClient,
        private validator: NgFormValidationsNotifier.Services.Notifier
    ) { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        this.validator.notify();
    }

}
