import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.sass']
})

export class EventComponent implements OnInit {

  mouseIsOver: Boolean = false;

  ngOnInit() {

  }

  alertMsg() {
    alert('Event Example!');
  }

  onMouseOverOut() {
    this.mouseIsOver = !this.mouseIsOver;
  }

  onChangeValue(currentValue: number) {
    // alert("Current value: " + currentValue)
    alert(currentValue);
  }

}
