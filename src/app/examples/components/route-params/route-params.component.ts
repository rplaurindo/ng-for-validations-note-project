import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-route-params',
  templateUrl: './route-params.component.html',
  styleUrls: ['./route-params.component.sass']
})
export class RouteParamsComponent implements OnInit {

  private inputData: Number = 1;
  private paramsSubscription: Subscription;
  private queryParamsSubscription: Subscription;
  private params: Object;
  private queryParams: Object;

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
