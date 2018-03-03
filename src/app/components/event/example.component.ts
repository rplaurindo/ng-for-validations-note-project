import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.sass']
})

export class EventComponent implements OnInit {

  mouseIsOver: Boolean = false;

  alertMsg(): void {
    alert('Event Example!');
  }

  onMouseOverOut(event: MouseEvent): void {
    this.mouseIsOver = !this.mouseIsOver;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
