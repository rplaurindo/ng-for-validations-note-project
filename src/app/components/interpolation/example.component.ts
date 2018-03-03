import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.sass']
})

export class InterpolationComponent implements OnInit {

  private readonly stringExamples: String[] = ['A', 'interpolation', 'example', 'as', 'a', 'list'];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
