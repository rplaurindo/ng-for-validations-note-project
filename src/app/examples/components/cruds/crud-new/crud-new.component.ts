import {
  Component,
  OnInit
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { CrudService } from './../../../services/crud/crud.service';
import { ExampleModel } from '../../../services/crud/example-model';
import { IFormCanDeactivate } from '../../../../guards/form-deactivate/i-form-can-deactivate';


@Component({
  selector: 'app-crud-form',
  templateUrl: './../crud-form.component.html',
  styleUrls: ['./crud-new.component.sass'],
})
export class CrudNewComponent implements  OnInit,
                                          IFormCanDeactivate {

  modelReference: ExampleModel;
  formChanged: Boolean = false;
  validations: Object = {};
  formSubmitted: Boolean = false;
  error: Boolean = false;

  constructor(
    private crudService: CrudService
  ) {}

  onInput() {
    this.formChanged = true;

    this.formSubmitted = false;
  }

  canDeactivate(): boolean {
    if (this.formChanged) {
      return confirm(`Os dados preenchidos serão perdidos. Deseja Continuar?`);
    }
    return true;
  }

  ngOnInit() {
  }

  valid(elementName: string, validationType: string): Boolean {
    return !this.error || (this.validations[name] &&
      !this.validations[elementName][validationType]);
  }

  onSubmit(form: NgForm) {
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

    if (form.valid) {
      this.crudService.create(form.value);
      this.error = !this.error;
    } else {
      this.error = !this.error;
    }
  }

}
