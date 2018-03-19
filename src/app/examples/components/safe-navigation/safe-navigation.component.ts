import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safe-navigation',
  templateUrl: './safe-navigation.component.html',
  styleUrls: ['./safe-navigation.component.sass']
})

export class SafeNavigationComponent implements OnInit {

  jsLiteralObject: any = {
    hasContent: 'I’m a content.'
  };

  // map: Map<any, String> = new Map<any, String>();

  constructor() {
    // this.map.set('hasContent', 'I’m content.');
  }

  ngOnInit() {
  }

}
