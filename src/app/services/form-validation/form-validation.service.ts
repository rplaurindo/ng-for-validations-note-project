import { NgForm } from '@angular/forms';
import { Injectable, ElementRef } from '@angular/core';


@Injectable()
export class FormValidationService {

  private errors: Array<string> = [];
  private formHasError: Boolean = false;
  private foundControlKeys: Object = {};

  constructor() { }

  private mapValidationErrorsFor(
                                ngForm: NgForm,
                                name: string,
                                validationTypes: Array<string>
                                ) {

    let
      errors: Object;

    if (ngForm.controls[name].invalid) {
      errors = ngForm.controls[name].errors;
      Object.keys(errors).forEach((error) => {
          if (validationTypes.indexOf(error) !== -1 &&
            this.errors.indexOf(error) === -1) {
            this.errors.push(error);
          }
        }
      );
    }

  }

  getErrorsListFor(
                    formElementName: string,
                    ngForm: NgForm,
                    validationTypes: Array<string>
                    ): Array<string> {

    this.mapValidationErrorsFor(ngForm,
                                formElementName,
                                validationTypes);

    return this.errors;
  }

}
