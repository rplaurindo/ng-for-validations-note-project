import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-manipulating-dom',
  templateUrl: './manipulating-dom.component.html',
  styleUrls: ['./manipulating-dom.component.css']
})
export class ManipulatingDomComponent implements OnInit {

  // it works over component too
  @ViewChild('DOMReference') handlingDOMReference: ElementRef;

  constructor() {
  }

  ngOnInit() {
    console.log(this.handlingDOMReference.nativeElement.value);
  }

}
