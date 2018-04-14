import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterContentInit,
  AfterViewInit,
  AfterContentChecked,
  AfterViewChecked
} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { CrudService } from './../../../services/crud/crud.service';
import { ExampleModel } from '../../../services/crud/example-model';
import { IFormCanDeactivate } from '../../../../guards/form-deactivate/i-form-can-deactivate';
import { FormValidationService } from '../../../../services/form-validation/form-validation.service';


@Component({
  selector: 'app-crud-form',
  templateUrl: './../cruds-form.component.html',
  styleUrls: ['./../cruds-form.component.sass']
})
export class EditComponent implements OnInit,
                                          AfterContentInit,
                                          AfterViewInit,
                                          AfterContentChecked,
                                          AfterViewChecked,
                                          OnDestroy,
                                          IFormCanDeactivate {

  modelReference: ExampleModel;
  paramsSubscription: Subscription;
  params: Object;
  formChanged: Boolean = false;
  // @ViewChild('formReference') form: ElementRef;
  // form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService,
    private validationService: FormValidationService
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

        // console.log(new NgForm(this.form.nativeElement))
        // console.log(this.form)
        // this.form.form.patchValue(this.modelReference);
        // this.form.setValue(this.modelReference);

      }
    );
  }

  ngAfterContentInit() {
  }

  ngAfterViewInit() {
  }

  ngAfterContentChecked() {
  }

  ngAfterViewChecked() {
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
