import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.sass']
})
export class EventComponent implements OnInit {

  mouseIsOver: boolean = false;
  initialValue: Number = 0;

  constructor() { }

  ngOnInit() {
  }

  alertMsg() {
    alert(`Event Example!`);
  }

  onChangeValue(currentValue: number) {
    alert(`Current value: ${currentValue}`);
  }

}
