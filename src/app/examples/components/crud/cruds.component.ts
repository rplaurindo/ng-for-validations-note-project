// Presenter(Controller)

import { Component, OnInit } from '@angular/core';

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

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.models = this.crudService.getExampleModels();
  }

}
