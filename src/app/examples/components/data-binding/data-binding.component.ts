import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.sass']
})
export class DataBindingComponent implements OnInit {

  twoWayVar: String = 'I’m a value of data source variable component.';

  constructor() {}

  ngOnInit() {
  }

}
