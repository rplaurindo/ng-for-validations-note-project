import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-params',
  templateUrl: './route-params.component.html',
  styleUrls: ['./route-params.component.sass']
})
export class RouteParamsComponent implements OnInit {

  twoWayVar: Number = 1;
  paramsSubscription: Subscription;
  queryParamsSubscription: Subscription;
  params: Object;
  queryParams: Object;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(
      (params: any) => {
        this.params = params;
      }
    );

    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: any) => {
        this.queryParams = params;
      }
    );
  }

  ngOnDetroy() {
    this.paramsSubscription.unsubscribe();
    this.queryParamsSubscription.unsubscribe();
  }

}
