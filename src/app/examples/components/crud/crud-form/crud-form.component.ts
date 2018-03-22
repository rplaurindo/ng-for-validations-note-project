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
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    // falta o create. Talvez tenha de mudar aqui para verificar se o modalReference
    // está null, caso sim é para se fazer this.models.push(new ExampleModel(form.value))
    // mas ver como seria o acesso. A própria classe poderia guardar um array com
    // suas instâncias ao invés do component index
    // talvez tenha de usar um subscribe para filtrar a lista de objetos no componente
    // de index
    this.modelReference.setName(form.value['name']);
  }

}
