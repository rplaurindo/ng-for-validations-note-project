// Presenter

// stored in node_modules
import { Component, Input,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy,
  OnChanges,
  AfterContentInit} from '@angular/core';

import { InterpolationService } from './../../services/interpolation/interpolation.service';

// decorator
@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.sass'],
  providers: [InterpolationService]
})
// the "export" keyword enables to use the component as a HTML tag.
export class InterpolationComponent implements OnInit,
                                               DoCheck,
                                               AfterContentChecked,
                                               AfterViewChecked,
                                               OnDestroy,
                                               OnChanges,
                                               AfterContentInit {

  stringExamples: Array<String>;

  // dependency injection
  constructor(private _interpolationService: InterpolationService) {
    this.stringExamples = this._interpolationService.getStringExamples();
  }

  // component events
  ngOnInit() {
  }

  ngDoCheck() {
  }

  ngAfterContentChecked() {
  }

  ngAfterViewChecked() {
  }

  // called when *ngIf="" receives true
  ngOnDestroy() {
  }

  ngOnChanges() {
  }

  ngAfterContentInit() {
  }

}
