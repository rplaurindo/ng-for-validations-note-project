import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class FormValidationService {

  private validations: Object = {};
  private error: Boolean = false;

  constructor() { }

  setError(value: boolean) {
    this.error = value;
  }

  valid(propertyName: string, validationType: string): Boolean {
    return !this.error || (this.validations[propertyName] &&
      !this.validations[propertyName][validationType]);
  }

  buildValidationsMap(form: NgForm) {

    if (form.submitted) {
      if (form.valid) {
        this.error = false;
      } else {
        this.error = true;
      }
    }

    // iterates over controls
    Object.keys(form.controls).forEach((controlKey) => {
      // iterates over errors
      if (!form.controls[controlKey].valid) {
        this.validations[controlKey] = {};
        Object.keys(form.controls[controlKey].errors)
          .forEach((validationKey) => {
            this.validations[controlKey][validationKey] = form
              .controls[controlKey].errors[validationKey];
          });
      }
    });
  }

}
