import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './../reactive-forms-form.component.html',
  styleUrls: ['./../reactive-forms-form.component.sass']
})
export class ReactiveFormsNewComponent implements  OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

}
