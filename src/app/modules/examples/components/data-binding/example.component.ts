// Presenter

import { DataBindingService } from './../../services/data-binding/example.service';

// stored in node_modules
import { Component, OnInit, Input, Output } from '@angular/core';

// decorator
@Component({
  // tag name
  selector: 'app-data-binding',
  // content
  templateUrl: './example.component.html',
  // stylecheet
  styleUrls: ['./example.component.sass']
})

// the "export" keyword enables to use the component as a HTML tag.
export class DataBindingComponent implements OnInit {

  stringExamples: String[];

  constructor(private dataBindingService: DataBindingService) {
    this.stringExamples = this.dataBindingService.getStringExamples();
  }

  ngOnInit() {

  }

}
