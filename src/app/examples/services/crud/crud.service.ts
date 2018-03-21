// Model

import { Injectable } from '@angular/core';

import { ExampleModel } from './example-model';

@Injectable()
export class CrudService {

  private models: ExampleModel[] = [
    new ExampleModel(1, 'Model 01'),
    new ExampleModel(2, 'Model 02'),
    new ExampleModel(3, 'Model 03')
  ];

  private cachedModel: ExampleModel;

  constructor() { }

  getExampleModel(id: Number): ExampleModel {
    let model: any;
    for (model of this.models) {
      if (model.getId() === id) {
        return model;
      }
    }

    return null;
  }

  getExampleModels() {
    return this.models;
  }

}
