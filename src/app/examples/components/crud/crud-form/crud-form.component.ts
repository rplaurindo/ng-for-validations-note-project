import { Component, OnInit, OnDestroy } from '@angular/core';
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
  // private formWasChanged: Boolean = false;

  // private name: String;

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService
  ) {}

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Object) => {
        this.modelReference = this.crudService.getExampleModel(+params['id']);

        if (this.modelReference === null) {
          this.modelReference = new ExampleModel();
        }

        // this.name = this.modelReference.getName();
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    this.modelReference.setName(form.value['name']);
  }

  // ngOnInput() {
  //   this.formWasChanged = true;
  // }

}
