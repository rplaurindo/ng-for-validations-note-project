import {
    Component,
    OnInit
} from '@angular/core';

// import { NgForValidationsNote } from '../../../../projects/ng-for-validations-note/src/public_api';
import { NgForValidationsNote } from 'ng-for-validations-note';
import { Services as NgForValidationsNoteServices } from 'ng-for-validations-note';


@Component({
    selector: 'app-template-driven-form',
    templateUrl: '../_form.html',
    styleUrls: ['../style.sass']
})
export class NewComponent implements OnInit {

    constructor(
        private validator: NgForValidationsNoteServices.Notifier
    ) { }

    ngOnInit() {
    }

    onSubmit() {
        this.validator.notify();
    }

}
