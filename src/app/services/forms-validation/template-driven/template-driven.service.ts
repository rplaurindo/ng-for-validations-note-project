import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';


@Injectable()
export class TemplateDrivenService {

  private error: String = '';

  constructor() { }

  private mapValidationErrorFor(
                                ngForm: NgForm,
                                name: string,
                                validationTypes: Array<string>
                                ) {

    let
      errors: Object;

    if (ngForm.controls[name].invalid) {
      // Angular maps one error by time
      errors = ngForm.controls[name].errors;
      Object.keys(errors).forEach((error) => {
        if (validationTypes.indexOf(error) !== -1) {
          this.error = error;
        }
      });
    }

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

  getErrorsListFor(
                    formElementName: string,
                    ngForm: NgForm,
                    validationTypes: Array<string>
                    ): string {

    this.mapValidationErrorFor(ngForm,
                                formElementName,
                                validationTypes);

    return this.error.toString();
  }

}
