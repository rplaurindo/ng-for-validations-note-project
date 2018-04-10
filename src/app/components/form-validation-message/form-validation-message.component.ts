import {
  Component,
  Input,
  OnInit,
  AfterContentChecked,
  AfterContentInit
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormValidationService } from '../../services/form-validation/form-validation.service';


@Component({
  selector: 'app-form-validation-message',
  templateUrl: './form-validation-message.component.html',
  styleUrls: ['./form-validation-message.component.sass']
})
export class FormValidationMessageComponent implements  OnInit,
                                                    AfterContentInit,
                                                    AfterContentChecked {

  canShow: Boolean = false;
  messagesToShow: Array<string> = [];
  name: string;
  formControl: Object;

  @Input()
    element: HTMLFormElement;

  @Input()
    messages: Object;

  constructor(
    private validationService: FormValidationService,
    private form: NgForm
  ) { }

  validationTypeKeys(): Array<string> {
    const
      keys: Array<string> = [];

    Object.keys(this.messages).forEach((k) => {
      keys.push(k);
    });

    return keys;
  }

  ngOnInit() {
  }

  private copyControl(control: Object): Object {
    const
      copy: Object = {};

    Object.keys(control).forEach((k) => {
      copy[k] = control[k];
    });

    return copy;
  }

  private invalid(): boolean {
    if (this.formControl && this.formControl['errors']) {
      return true;
    }
    return false;
  }

  private setMessages() {
    this.messagesToShow = [];
    this.validationService.getErrorsListFor(
      this.name,
      this.form,
      this.validationTypeKeys()
    ).forEach((k) => {
      this.messagesToShow.push(this.messages[k]);
    });
  }

  ngAfterContentInit() {
    this.name = this.element.getAttribute('name');
  }

  ngAfterContentChecked() {
    if (this.form.submitted) {
      this.formControl = this.form.controls[this.name];

      if (this.invalid()) {
        this.canShow = true;
        this.setMessages();
      } else {
        this.canShow = false;
      }

      this.validationService.resetForm(this.form);
    }

  }

}
