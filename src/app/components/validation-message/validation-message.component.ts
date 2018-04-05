import {
  Component,
  OnInit,
  Input,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.sass']
})
export class ValidationMessageComponent implements  OnInit {

  @Input()
    showIf: Boolean = false;

  @Input()
    message: string;

  @Input()
    presetMessages: Object;

  @Input()
    foundMessageKeys: Array<string>;

  messages: Array<string> = [];

  constructor() { }

  private getMessages(): Array<string> {
    this.foundMessageKeys.forEach((key) => {
      this.messages.push(this.presetMessages[key]);
    });

    return this.messages;
  }

  ngOnInit() {
  }

}
