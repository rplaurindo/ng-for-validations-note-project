import { OnDestroy } from '@angular/core';
// Presenter(Controller)

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CrudService } from './../../services/crud/crud.service';
import { ExampleModel } from '../../services/crud/example-model';

@Component({
  selector: 'app-crud',
  templateUrl: './cruds.component.html',
  styleUrls: ['./cruds.component.sass'],
  providers: [CrudService]
})
export class CrudComponent implements OnInit {

  private models: ExampleModel[];

  constructor(
    private crudService: CrudService,
    private router: Router
  ) { }

  ngOnInit() {
    this.models = this.crudService.getExampleModels();
  }

  onDestroy(exampleModel: ExampleModel) {
    this.models.splice(this.models.indexOf(exampleModel), 1);
    this.router.navigate(['/cruds']);
  }

}
