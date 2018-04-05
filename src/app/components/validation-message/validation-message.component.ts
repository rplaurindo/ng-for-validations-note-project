import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.sass']
})
export class ValidationMessageComponent implements OnInit {

  @Input()
    showIf: Boolean = false;

  @Input()
    message: string;

  constructor() { }

  ngOnInit() {
  }

}
