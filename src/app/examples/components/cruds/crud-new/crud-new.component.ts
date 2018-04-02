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

  private modelReference: ExampleModel;
  private formChanged: Boolean = false;

  constructor(
    private crudService: CrudService
  ) {}

  onInput() {
    this.formChanged = true;
  }

  canDeactivate(): boolean {
    if (this.formChanged) {
      return confirm(`Os dados preenchidos serão perdidos. Deseja Continuar?`);
    }
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.crudService.create(form.value);
  }

}
