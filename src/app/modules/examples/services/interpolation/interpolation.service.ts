// Model

import { Injectable } from '@angular/core';

// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';

// provides to be injectable (class should be added in providers)
@Injectable()
export class InterpolationService {

  // string[], String[]
  private readonly stringExamples: Array<String> = ['A', 'service', 'example', 'as', 'a', 'list.'];

  getStringExamples(): Array<String> {
    return this.stringExamples;
  }

}
