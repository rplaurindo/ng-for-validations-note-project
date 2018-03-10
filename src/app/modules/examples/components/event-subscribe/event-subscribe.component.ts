import { Component, OnInit } from '@angular/core';

import { EventSubscribeService } from './../../services/event-subscribe/event-subscribe.service';

@Component({
  selector: 'app-event-subscribe',
  templateUrl: './event-subscribe.component.html',
  styleUrls: ['./event-subscribe.component.sass'],
  providers: [EventSubscribeService]
})
export class EventSubscribeComponent implements OnInit {

  items: Array<String>;

  constructor(private eventSubscribeService: EventSubscribeService) {
    this.items = eventSubscribeService.getItems();
  }

  ngOnInit() {
    this.eventSubscribeService.eventEmitter.subscribe(
      item => {
        alert('Item ' + item + ' added.')
      }
    );
  }

  // proxy
  onAddItem(item: String) {
    this.eventSubscribeService.addItem(item);
  }

}
