import {
  Component,
  Input,
  OnInit,
  OnChanges,
  AfterContentChecked
} from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.sass']
})
export class ValidationMessageComponent implements  OnInit,
  OnChanges,
  AfterContentChecked {

  @Input()
    canShow: Boolean = false;

  @Input()
    presetMessages: Object;

  @Input()
    foundMessageKeys: Array<string> = [];

  messages: Array<string> = [];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    // console.log('Changes')
    if (this.foundMessageKeys) {
      this.messages = [];
      this.foundMessageKeys.forEach((key) => {
        this.messages.push(this.presetMessages[key]);
      });
    }
  }

  ngAfterContentChecked() {
    // console.log('ContentChecked')
  }

}
