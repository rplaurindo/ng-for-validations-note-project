import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { CrudService } from './../../../services/crud/crud.service';
import { ExampleModel } from '../../../services/crud/example-model';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.sass']
})
export class CrudFormComponent implements OnInit, OnDestroy {

  private modelReference: ExampleModel;
  private paramsSubscription: Subscription;
  private params: Object;

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService
  ) {}

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Object) => {
        this.params = params;
        this.modelReference = this.crudService.getExampleModel(+params['id']);

        if (this.modelReference === null) {
          this.modelReference = new ExampleModel();
        }
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    if (this.params['id']) {
      this.crudService.updateExampleModel(form.value);
    } else {
      this.crudService.createExampleModel(form.value);
    }
  }

}
