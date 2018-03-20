import { Component, OnInit } from '@angular/core';

import { CrudService } from './../../../services/crud/crud.service';
import { ExampleModel } from '../../../services/crud/exampleModel';

@Component({
  selector: 'app-crud',
  templateUrl: './index.component.html',
  styleUrls: ['./crud.component.sass'],
  providers: [CrudService]
})
export class CrudComponent implements OnInit {

  private models: ExampleModel[];

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.models = this.crudService.getExampleModels();
  }

}
