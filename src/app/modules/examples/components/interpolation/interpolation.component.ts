// Presenter

import { InterpolationService } from './../../services/interpolation/interpolation.service';

import { Component, Input,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy,
  OnChanges,
  AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.sass']
})

export class InterpolationComponent implements OnInit,
                                               DoCheck,
                                               AfterContentChecked,
                                               AfterViewChecked,
                                               OnDestroy,
                                               OnChanges,
                                               AfterContentInit {

  // can be passed by contructor as parameters
  private interpolationService: InterpolationService;
  stringExamples: Array<String>;

  constructor() {
    this.interpolationService = new InterpolationService();
    this.stringExamples = this.interpolationService.getStringExamples();
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
