import {
  Component,
  OnInit,
  ElementRef
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { CrudService } from '../../../../services/crud/crud.service';
import { ExampleModel } from '../../../../services/crud/example-model';

import { NgFormValidations } from '../../../../services/ng-form-validations';

@Component({
  selector: 'app-cruds-form',
  templateUrl: '../cruds-form.component.html',
  styleUrls: ['../cruds-form.component.sass']
})
export class NewComponent implements OnInit {

  modelReference: ExampleModel;
  formChanged: Boolean = false;
  messageKeys: Array<string>;

  constructor(
    private crudService: CrudService,
    private http: HttpClient,
    private validator: NgFormValidations
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
    });
  }

  onSubmit(form: NgForm) {
    this.getJSON();
    this.validator.emitValidity();
    if (form.valid) {
      this.crudService.create(form.value);
    }
  }

}
