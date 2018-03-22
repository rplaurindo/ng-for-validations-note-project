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

  getExampleModels() {
    return this.models;
  }

  // proxy to remote create method
  createExampleModel(data: Object) {
    // ver qual é o último id (ordenar por id) para criar na sequência
    // this.models.push(new ExampleModel(...));
  }

  // proxy to remote get method
  getExampleModel(id: Number): ExampleModel {
    let model: any;
    for (model of this.models) {
      if (model.getId() === id) {
        this.cachedModel = model;
        return this.cachedModel;
      }
    }

    return null;
  }

  // proxy to remote update method
  updateExampleModel(attrs: Object) {
    this.cachedModel.setName(attrs['name']);
  }

}
