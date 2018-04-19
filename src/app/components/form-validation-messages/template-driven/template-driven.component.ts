import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import {
  Component,
  Input,
  OnInit,
  OnDestroy
} from '@angular/core';
import { FormControl } from '@angular/forms';

import * as FormsValidation from './../../../services/forms-validation';

@Component({
  selector: 'app-form-validation-msg',
  templateUrl: './../form-validation-messages.component.html',
  styleUrls: ['./../form-validation-messages.component.sass'],
  providers: [FormsValidation.TemplateDrivenService]
})
export class TemplateDrivenComponent implements OnInit,
                                                OnDestroy {

  canShow: Boolean = false;
  message: String;

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

    this.validator.subscribeOverValidation(() => {
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
    this.validator.unsubscribeOverValidation();
  }

}
