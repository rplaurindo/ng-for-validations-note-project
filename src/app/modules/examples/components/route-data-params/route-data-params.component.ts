import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-data-params',
  templateUrl: './route-data-params.component.html',
  styleUrls: ['./route-data-params.component.sass']
})
export class RouteDataParamsComponent implements OnInit {

  private params: Object;

  constructor(private route: ActivatedRoute) {
    this.params = this.route.snapshot.params;
  }

  ngOnInit() {
    console.log(this.params);
  }

}
