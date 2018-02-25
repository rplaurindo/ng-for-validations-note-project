// Presenter

import { ExampleService } from './../../services/example/example.service';

// stored in node_modules
import { Component, OnInit } from '@angular/core';

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
  mouseIsOver: Boolean = false;
  inputValue: String;

  constructor(private exampleService: ExampleService) {
    this.stringExamples = this.exampleService.getStringExamples();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  alertMsg(): void {
    alert('Event Example!');
  }

  onMouseOverOut(event: MouseEvent): void {
    this.mouseIsOver = !this.mouseIsOver;
  }

}
