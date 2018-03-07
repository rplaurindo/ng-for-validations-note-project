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

  private readonly stringExamples: String[] = ['A', 'interpolation', 'example', 'as', 'a', 'list'];

  constructor() {
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
