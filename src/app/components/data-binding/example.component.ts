// Presenter

import { DataBindingService } from './../../services/data-binding/example.service';

// stored in node_modules
import { Component, OnInit, Input } from '@angular/core';

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
  
  @Input() inputValue: String;

  constructor(private dataBindingService: DataBindingService) {
    this.stringExamples = this.dataBindingService.getStringExamples();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
