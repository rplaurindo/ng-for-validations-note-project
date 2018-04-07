import { NgForm } from '@angular/forms';
import { Injectable, ElementRef } from '@angular/core';

import { IFormValidation } from './i-form-validation';


@Injectable()
export class FormValidationService implements IFormValidation {

  private errors: Object = {};
  private formHasError: Boolean = false;
  private foundControlKeys: Object = {};

  constructor() { }

  foundMessageKeysOf(element: HTMLElement): Array<string> {
    return this.foundControlKeys[element.getAttribute('name')];
  }

  valid(element: HTMLElement, validationTypes: Array<string>): Boolean {

    let
      hasAnyError: Boolean = false;

    if (Object.keys(this.errors).length && this.errors[element.getAttribute('name')]) {
      for (const error of Object.keys(this.errors[element.getAttribute('name')])) {
        if (validationTypes.indexOf(error) !== -1) {
          hasAnyError = true;
          break;
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
