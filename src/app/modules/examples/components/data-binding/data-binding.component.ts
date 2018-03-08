// stored in node_modules
import { Component, OnInit, Input, Output } from '@angular/core';

// decorator
@Component({
  // tag name
  selector: 'app-data-binding',
  // content
  templateUrl: './data-binding.component.html',
  // stylecheet
  styleUrls: ['./data-binding.component.sass']
})

// the "export" keyword enables to use the component as a HTML tag.
export class DataBindingComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

}
