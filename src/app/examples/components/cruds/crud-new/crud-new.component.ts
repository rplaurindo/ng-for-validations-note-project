import {
  Component,
  OnInit
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { CrudService } from './../../../services/crud/crud.service';
import { ExampleModel } from '../../../services/crud/example-model';
import { IFormCanDeactivate } from '../../../../guards/form-deactivate/i-form-can-deactivate';
import { FormValidationService } from '../../../../services/form-validation/form-validation.service';
import { IFormValidation } from '../../../../services/form-validation/i-form-validation';


@Component({
  selector: 'app-crud-form',
  templateUrl: './../crud-form.component.html',
  styleUrls: ['./crud-new.component.sass']
})
export class CrudNewComponent implements  OnInit,
                                          IFormCanDeactivate,
                                          IFormValidation {

  modelReference: ExampleModel;
  formChanged: Boolean = false;
  messageKeys: Array<string>;

  constructor(
    private crudService: CrudService,
    private validationService: FormValidationService
  ) {}

  onInput() {
    this.formChanged = true;
  }

  canDeactivate(): boolean {
    if (this.formChanged) {
      return confirm(`Os dados preenchidos serão perdidos. Deseja Continuar?`);
    }
    return true;
  }

  ngOnInit() {
  }

  foundMessageKeysOf(propertyName: string): Array<string> {
    return this.validationService.foundMessageKeysOf(propertyName);
  }

  valid(propertyName: string, validationType: Array<string>): Boolean {
    return this.validationService.valid(propertyName, validationType);
  }

  onSubmit(form: NgForm) {
    this.validationService.buildValidationsMap(form);
    if (form.valid) {
      this.crudService.create(form.value);
    }
  }

}
