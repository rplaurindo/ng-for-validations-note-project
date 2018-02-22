// Controller

import { ExampleService } from './../../services/example/example.service';

import { OnInit } from '@angular/core';
// stored in node_modules
import { Component } from '@angular/core';

// decorator
@Component({
  // tag name
  selector: 'app-example',
  // content
  templateUrl: './example.component.html',
  // stylecheet
  styleUrls: ['./example.component.sass']
})

// the "export" keyword enables to use the component as a HTML tag.
export class ExampleComponent implements OnInit {

  stringExamples: String[];

  constructor(private exampleService: ExampleService) {
    this.stringExamples = this.exampleService.getStringExamples();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
