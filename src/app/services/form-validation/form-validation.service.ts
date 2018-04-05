import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';


@Injectable()
export class FormValidationService {

  private errors: Object = {};
  private formHasError: Boolean = false;

  constructor() { }

  setIfFormHasError(value: boolean) {
    this.formHasError = value;
  }

  mapMessages() {

  }

  // valid(propertyName: string, validationType: string): Boolean {
  valid(propertyName: string, validationTypes: Array<string>): Boolean {

    let
      hasAnyError: Boolean = false;

    // usar também para mapear as mensagens que estão setadas com erro para o componente padrão exibí-las
    if (Object.keys(this.errors).length && this.errors[propertyName]) {
      for (const error of Object.keys(this.errors[propertyName])) {
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
        Object.keys(form.controls[controlKey].errors)
          .forEach((validationKey) => {
            this.errors[controlKey][validationKey] = form
              .controls[controlKey].errors[validationKey];
          });
      }
    });
  }

}
