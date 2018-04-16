import {
  Component,
  Input,
  OnInit,
  AfterContentChecked,
  AfterContentInit
} from '@angular/core';
import { NgForm } from '@angular/forms';

import * as FormsValidation from './../../../services/forms-validation';

@Component({
  selector: 'app-template-driven-validation-msg',
  templateUrl: './../form-validation-messages.component.html',
  styleUrls: ['./../form-validation-messages.component.sass'],
  providers: [FormsValidation.TemplateDrivenService]
})
export class TemplateDrivenComponent implements  OnInit,
                                                    AfterContentInit,
                                                    AfterContentChecked {

  canShow: Boolean = false;
  message: String;
  name: string;
  formControl: Object;

  @Input()
    element: HTMLFormElement;

  @Input()
    messages: Object;

  constructor(
    private validationService: FormsValidation.TemplateDrivenService,
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

  private setMessage() {
    this.message = this.messages[
      this.validationService.getErrorsListFor(
        this.name,
        this.form,
        this.validationTypeKeys()
      )
    ];
  }

  ngAfterContentInit() {
    this.name = this.element.getAttribute('name');
  }

  ngAfterContentChecked() {
    if (this.form.submitted) {
      this.formControl = this.form.controls[this.name];
      if (this.invalid()) {
        this.canShow = true;
        this.setMessage();
      } else {
        this.canShow = false;
      }
      this.validationService.resetForm(this.form);
    }

  }

}
