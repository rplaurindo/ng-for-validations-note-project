import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-manipulating-dom',
  templateUrl: './manipulating-dom.component.html',
  styleUrls: ['./manipulating-dom.component.sass']
})
export class ManipulatingDomComponent implements OnInit {

  // it works over component too
  // Don’t use ElementRef to set anything in a Element to prevent XSS (Cross-Site Scripting) attack
  @ViewChild('DOMReference') handlingDOMReference: ElementRef;

  constructor() {
  }

  ngOnInit() {
    console.log(this.handlingDOMReference.nativeElement.value);
  }

}
