import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CrudService } from './../../../../services/crud/crud.service';
import { ExampleModel } from '../../../../services/crud/example-model';
import { IFormCanDeactivate } from '../../../../guards/form-deactivate/i-form-can-deactivate';


@Component({
  selector: 'app-cruds-form',
  templateUrl: './../cruds-form.component.html',
  styleUrls: ['./../cruds-form.component.sass']
})
export class EditComponent implements OnInit,
                                      OnDestroy,
                                      IFormCanDeactivate {

  modelReference: ExampleModel;
  paramsSubscription: Subscription;
  params: Object;
  formChanged: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService
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
    if (form.valid) {
      this.crudService.update(form.value);
    }
  }

}
