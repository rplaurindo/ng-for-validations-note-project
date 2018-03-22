import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { CrudService } from './../../../services/crud/crud.service';
import { ExampleModel } from '../../../services/crud/example-model';

@Component({
  selector: 'app-crud-show',
  templateUrl: './crud-show.component.html',
  styleUrls: ['./crud-show.component.sass']
})
export class CrudShowComponent implements OnInit, OnDestroy {

  private modelReference: ExampleModel;
  private paramsSubscription: Subscription;
  // private params: Object;

  constructor(
    // private router: Router,
    private crudService: CrudService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Object) => {
        // this.params = params;
        // + used to cast
        this.modelReference = this.crudService.getExampleModel(+params['id']);
      }
    );

  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
