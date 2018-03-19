import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-child',
  templateUrl: './component-child.component.html',
  styleUrls: ['./component-child.component.sass']
})
export class ComponentChildComponent implements OnInit {

  // that decorator shares a variable with parent component
  @Input()
  propertyBindingValue: any = 0;

  // that decorator shares a variable with child component
  @Output()
  customEvent: EventEmitter<number> = new EventEmitter();

  ngOnInit() {

  }

  decrement() {
    this.propertyBindingValue--;
    this.customEvent.emit(this.propertyBindingValue);
  }

  increment() {
    this.propertyBindingValue++;
    this.customEvent.emit(this.propertyBindingValue);
  }

}
