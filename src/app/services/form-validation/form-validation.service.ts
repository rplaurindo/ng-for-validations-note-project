import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';


@Injectable()
export class FormValidationService {

  private errors: Object = {};
  private formHasError: Boolean = false;
  private foundControlKeys: Object = {};

  constructor() { }

  foundMessageKeysOf(propertyName: string): Array<string> {
    return this.foundControlKeys[propertyName];
  }

  valid(propertyName: string, validationTypes: Array<string> | string): Boolean {

    let
      hasAnyError: Boolean = false;

    if (validationTypes instanceof Array) {
      if (Object.keys(this.errors).length && this.errors[propertyName]) {
        for (const error of Object.keys(this.errors[propertyName])) {
          if (validationTypes.indexOf(error) !== -1) {
            hasAnyError = true;
            break;
          }
        }
      }
    }

    return !this.formHasError || !hasAnyError;
  }

  buildValidationsMap(form: NgForm) {

    if (form.submitted) {
      if (form.valid) {
        this.formHasError = false;
      } else {
        this.formHasError = true;
      }
    }

    // iterates over controls
    Object.keys(form.controls).forEach((controlKey) => {
      // iterates over errors
      if (!form.controls[controlKey].valid) {
        this.errors[controlKey] = {};
        this.foundControlKeys[controlKey] = [];
        Object.keys(form.controls[controlKey].errors)
          .forEach((validationKey) => {
            this.errors[controlKey][validationKey] = form
              .controls[controlKey].errors[validationKey];
            this.foundControlKeys[controlKey].push(validationKey);
          });
      }
    });
  }

}
