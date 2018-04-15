import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './../reactive-forms-form.component.html',
  styleUrls: ['./../reactive-forms-form.component.sass']
})
export class NewComponent implements  OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null]
    });
  }

}
