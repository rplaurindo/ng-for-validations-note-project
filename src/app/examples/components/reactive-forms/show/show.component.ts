import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { CrudService } from './../../../services/crud/crud.service';
import { ExampleModel } from '../../../services/crud/example-model';


@Component({
  selector: 'app-reactive-forms-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.sass']
})
export class ShowComponent implements OnInit,
                                          OnDestroy {

  modelReference: ExampleModel;
  paramsSubscription: Subscription;

  constructor(
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
