import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventSubscribeService {

  eventEmitter: EventEmitter<String> = new EventEmitter();

  private readonly items: Array<String> = ['Angular2', 'nodeJS', 'Ruby on Rails', 'Django'];

  constructor() { }

  addItem(item: String) {
    this.items.push(item);
    this.eventEmitter.emit(item);
  }

}
