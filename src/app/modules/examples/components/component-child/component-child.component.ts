import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-child',
  templateUrl: './component-child.component.html',
  styleUrls: ['./component-child.component.sass']
})

export class ComponentChildComponent implements OnInit {

  // shares a variable with child component
  @Input()
  propertyBindingValue: number = 0;

  // shares a variable with parent component
  @Output()
  customEvent: EventEmitter<number> = new EventEmitter();

  ngOnInit() {

  }

  decrement() {
    this.propertyBindingValue--;
    // console.log(this.propertyBindingValue);
    this.customEvent.emit(this.propertyBindingValue);
  }

  increment() {
    this.propertyBindingValue++;
    // console.log(this.propertyBindingValue);
    this.customEvent.emit(this.propertyBindingValue);
  }

}
