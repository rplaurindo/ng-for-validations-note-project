import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { CrudService } from './../../../services/crud/crud.service';
import { ExampleModel } from '../../../services/crud/example-model';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.sass']
})
export class CrudFormComponent implements OnInit, OnDestroy {

  private modelReference: Object;
  private paramsSubscription: Subscription;
  // private formWasChanged: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService
  ) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Object) => {
        this.modelReference = this.crudService.getExampleModel(+params['id']);

        if (this.modelReference === null) {
          this.modelReference = {};
        }
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  // ngOnInput() {
  //   this.formWasChanged = true;
  // }

}
