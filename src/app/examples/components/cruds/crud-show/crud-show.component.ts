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
export class CrudShowComponent implements OnInit,
                                          OnDestroy {

  private modelReference: ExampleModel;
  private paramsSubscription: Subscription;
  // private params: Object;

  constructor(
    // private crudService: CrudService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.paramsSubscription = this.route.params.subscribe(
    //   (params: Object) => {
    //     // this.params = params;
    //     // + used to cast
    //     this.modelReference = this.crudService.getExampleModel(+params['id']);
    //   }
    // );

    this.paramsSubscription = this.route.data.subscribe(
      (data: {exampleModel: ExampleModel}) => {
        // console.log(data)
        // this.params = params;
        // + used to cast
        // this.modelReference = this.crudService.getExampleModel(+params['id']);
        console.log(data.exampleModel);
        this.modelReference = data.exampleModel;
      }
    );

  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
