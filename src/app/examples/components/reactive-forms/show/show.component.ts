import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { CrudService } from './../../../services/crud/crud.service';
import { ExampleModel } from '../../../services/crud/example-model';


@Component({
  selector: 'app-crud-show',
  templateUrl: './crud-show.component.html',
  styleUrls: ['./crud-show.component.sass']
})
export class ShowComponent implements OnInit,
                                          OnDestroy {

  modelReference: ExampleModel;
  paramsSubscription: Subscription;
  // private params: Object;

  constructor(
    // private crudService: CrudService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.paramsSubscription = this.route.data.subscribe(
      (data: {exampleModel: ExampleModel}) => {
        this.modelReference = data.exampleModel;
      }
    );

  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
