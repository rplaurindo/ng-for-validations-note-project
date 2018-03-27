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

  getExampleModels(): Array<ExampleModel> {
    return this.models;
  }

  // proxy to remote create method
  create(data: Object): Boolean {
    let
      exampleModel: ExampleModel;

    const last: ExampleModel = this.models[this.models.length - 1];
    data['id'] = last.getId() + 1;
    exampleModel = new ExampleModel(data);
    this.models.push(new ExampleModel(data));

    return this.models.indexOf(exampleModel) !== -1;
  }

  // proxy to remote get method
  getExampleModel(id: number): ExampleModel {
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
  update(attrs: Object): Boolean {
    this.cachedModel.setName(attrs['name']);

    return this.cachedModel === attrs['name'];
  }

  destroy(exampleModel: ExampleModel): Boolean {
    // run that only after serve response
    this.models.splice(this.models.indexOf(exampleModel), 1);

    return this.models.indexOf(exampleModel) === -1;
  }

}
