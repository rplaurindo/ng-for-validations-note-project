import {
  Component,
  Input,
  OnInit,
  OnDestroy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { CrudService } from './../../../services/crud/crud.service';
import { ExampleModel } from '../../../services/crud/example-model';
import { IFormCanDeactivate } from '../../../../guards/form-deactivate/i-form-can-deactivate';


@Component({
  selector: 'app-crud-form',
  templateUrl: './../crud-form.component.html',
  styleUrls: ['./crud-edit.component.sass'],
})
export class CrudEditComponent implements OnInit, OnDestroy, IFormCanDeactivate {

  private modelReference: ExampleModel;
  private paramsSubscription: Subscription;
  private params: Object;
  private formChanged: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService
  ) {}

  onInput() {
    this.formChanged = true;
  }

  canDeactivate() {
    if (this.formChanged) {
      return confirm(`Os dados preenchidos serão perdidos. Deseja Continuar?`);
    }
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Object) => {
        this.params = params;
        this.modelReference = this.crudService.getExampleModel(+params[`id`]);

        if (this.modelReference === null) {
          // render model not found page instead
          this.modelReference = new ExampleModel();
        }
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    this.crudService.update(form.value);
  }

}
