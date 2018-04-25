import {
  Component,
  Input,
  OnInit,
  OnDestroy
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

import * as FormsValidation from './../../../services/forms-validation';
import { Subscribable } from 'rxjs/Observable';

@Component({
  selector: 'app-form-validation-msg',
  templateUrl: './../form-validation-messages.component.html',
  styleUrls: ['./../form-validation-messages.component.sass']
})
export class TemplateDrivenComponent implements OnInit,
                                                OnDestroy {

  canShow: Boolean = false;
  message: String;

  private validationSubscription: Subject<Object>;

  @Input()
  control: FormControl;

  @Input()
  messages: Object;

  constructor(
    private validator: FormsValidation.TemplateDrivenService,
  ) {}

  validationTypeKeys(): Array<string> {
    const
      keys: Array<string> = [];

    Object.keys(this.messages).forEach((k) => {
      keys.push(k);
    });

    return keys;
  }

  ngOnInit() {
    let
      error: string;

    this.validationSubscription = this.validator.getValidation();

    this.validationSubscription.subscribe(() => {
      error = this.validator.getValidationErrorFor(
        this.control,
        this.validationTypeKeys()
      );
      if (error) {
        this.canShow = true;
        this.message = this.messages[error];
      } else {
        this.message = '';
        this.canShow = false;
      }
    });

  }

  ngOnDestroy() {
    this.validationSubscription.unsubscribe();
  }

}
