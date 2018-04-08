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

  @Input()
    form: NgForm;

  messages: Array<string> = [];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    // console.log('Changes');
    // verificar se o formulário foi informado, caso sim, verificar se foi submetido
    if (this.foundMessageKeys) {
      this.messages = [];
      this.foundMessageKeys.forEach((key) => {
        this.messages.push(this.presetMessages[key]);
      });
    }
  }

  ngAfterContentChecked() {
    // console.log('ContentChecked');
  }

}
