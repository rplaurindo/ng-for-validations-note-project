// Model

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// dependency injection
@Injectable()
export class ExampleService {

  // string[], Array<String>
  private readonly stringExamples: String[] = ['A', 'service', 'example', 'as', 'a', 'list'];

  getStringExamples(): String[] {
    return this.stringExamples;
  }

}
