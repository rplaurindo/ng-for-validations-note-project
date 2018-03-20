import { Injectable } from '@angular/core';

import { ExampleModel } from './exampleModel';

@Injectable()
export class CrudService {

  private models: ExampleModel[] = [
    new ExampleModel(1, 'Model 01'),
    new ExampleModel(2, 'Model 02'),
    new ExampleModel(3, 'Model 03')
  ];

  constructor() { }

  getExampleModel(id: Number) {
    this.models.forEach((model) => {
      if (model.getId() === id) {
        return model;
      }
    });
    return null;
  }

  getExampleModels() {
    return this.models;
  }

}
