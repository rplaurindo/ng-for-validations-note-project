import {
  Component,
  OnInit,
  ElementRef
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { CrudService } from './../../../services/crud/crud.service';
import { ExampleModel } from '../../../services/crud/example-model';
import { IFormCanDeactivate } from '../../../../guards/form-deactivate/i-form-can-deactivate';
import { FormValidationService } from '../../../../services/form-validation/form-validation.service';


@Component({
  selector: 'app-crud-form',
  templateUrl: './../crud-form.component.html',
  styleUrls: ['./crud-new.component.sass']
})
export class CrudNewComponent implements  OnInit,
                                          IFormCanDeactivate {
                                          // IFormValidation {

  modelReference: ExampleModel;
  formChanged: Boolean = false;
  messageKeys: Array<string>;

  constructor(
    private crudService: CrudService,
    private validationService: FormValidationService,
    private http: HttpClient
  ) { }

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

  getJSON() {
    this.http.get(`https://viacep.com.br/ws/28085500/json`).subscribe((r) => {
      console.log(r);
    })
  }

  onSubmit(form: NgForm) {
    this.getJSON();
    if (form.valid) {
      this.crudService.create(form.value);
    }
  }

}
