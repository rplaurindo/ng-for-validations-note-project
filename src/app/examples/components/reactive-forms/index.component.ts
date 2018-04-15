import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { CrudService } from './../../services/crud/crud.service';

import { ExampleModel } from '../../services/crud/example-model';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  models: ExampleModel[];

  constructor(
    private crudService: CrudService,
    private router: Router
  ) { }

  ngOnInit() {
    this.models = this.crudService.getExampleModels();
  }

  onDestroy(exampleModel: ExampleModel) {
    let
      answer: Boolean = false;

    if (confirm(`Tem certeza?`)) {
      answer = this.crudService.destroy(exampleModel);
      if (answer) {
        this.router.navigate([`/examples/cruds`]);
      } else {
        alert(`O registro não pôde ser excluído`);
      }
    }

  }

}
