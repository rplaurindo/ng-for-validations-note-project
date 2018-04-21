import {
  Component,
  OnInit,
  Output
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

import { CrudService } from './../../../../services/crud/crud.service';
import * as FormsValidation from './../../../../services/forms-validation';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './../reactive-forms-form.component.html',
  styleUrls: ['./../reactive-forms-form.component.sass']
})
export class NewComponent implements  OnInit {

  form: FormGroup;

  constructor(
    private crudService: CrudService,
    private formBuilder: FormBuilder,
    private validator: FormsValidation.TemplateDrivenService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {
    this.validator.emitValidity();
    if (this.form.valid) {
      this.crudService.create(this.form.value);
    }
  }

}
