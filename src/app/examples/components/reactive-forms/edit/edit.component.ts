import {
  Component,
  Input,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { CrudService } from './../../../../services/crud/crud.service';
import { ExampleModel } from '../../../../services/crud/example-model';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './../reactive-forms-form.component.html',
  styleUrls: ['./../reactive-forms-form.component.sass']
})
export class EditComponent implements OnInit,
                                      OnDestroy {

  modelReference: ExampleModel;
  paramsSubscription: Subscription;
  params: Object;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Object) => {
        this.params = params;
        this.modelReference = this.crudService.getExampleModel(+params[`id`]);

        if (this.modelReference === null) {
          this.modelReference = new ExampleModel();
        }

        // update all or part of the whole
        // this.form.setValue(this.modelReference);
        // this.form.form.patchValue(this.modelReference);
        this.form = this.formBuilder.group({
          name: [this.modelReference.getName(), [Validators.required, Validators.minLength(4)]]
        });
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  onSubmit() {
    if (this.form.valid) {
      this.crudService.update(this.form.value);
    }
  }

}
