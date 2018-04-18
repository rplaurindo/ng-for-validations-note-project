import { Injectable } from '@angular/core';
import {
  NgForm,
  FormControl,
  FormGroup
} from '@angular/forms';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class TemplateDrivenService {

  // it should cames before instance variable declarations
  private static validationObserver: Subject<Object> = new Subject();

  // constructor(control: FormControl, validationTypes: Array<string>) {
  constructor() { }

  getValidationErrorFor(
    control: FormControl,
    validationTypes: Array<string>
  ): string {
    if (control.invalid) {
      for (const error of Object.keys(control.errors)) {
        if (validationTypes.indexOf(error) !== -1) {
          return error;
        }
      }
    }

    return '';
  }

  private copyValues(ngForm: NgForm): Object {
    const
      valuesMap: Object = {};

    Object.keys(ngForm.controls).forEach(control => {
      valuesMap[control] = ngForm.controls[control].value;
    });

    return valuesMap;
  }

  resetForm(ngForm: NgForm) {
    const
      valuesCopy: Object = this.copyValues(ngForm);

    ngForm.resetForm(valuesCopy);
  }

  // the control would can be passed by here, but for some reason the control still doesn’t exist in any default initialization event
  subscribeOverValidation(callback) {
    TemplateDrivenService.validationObserver.subscribe(callback);
  }

  unsubscribeOverValidation() {
    TemplateDrivenService.validationObserver.unsubscribe();
  }

  emitValidity(form: NgForm | FormGroup = null) {
    TemplateDrivenService.validationObserver.observers
      .forEach(o => o.next({form: form}));
  }

}
