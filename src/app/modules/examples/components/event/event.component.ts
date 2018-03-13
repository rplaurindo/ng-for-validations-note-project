import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.sass']
})
export class EventComponent implements OnInit {

  mouseIsOver: Boolean = false;

  initialValue: number = 0;

  ngOnInit() {

  }

  alertMsg() {
    alert('Event Example!');
  }

  onMouseOverOut() {
    this.mouseIsOver = !this.mouseIsOver;
  }

  onChangeValue(currentValue: number) {
    alert("Current value: " + currentValue);
  }

}
