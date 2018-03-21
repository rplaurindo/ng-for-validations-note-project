// Model

import { Injectable } from '@angular/core';

import { ExampleModel } from './example-model';

@Injectable()
export class CrudService {

  private models: ExampleModel[] = [
    new ExampleModel({id: 1, name: 'Model 01'}),
    new ExampleModel({id: 2, name: 'Model 02'}),
    new ExampleModel({id: 3, name: 'Model 03'})
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
