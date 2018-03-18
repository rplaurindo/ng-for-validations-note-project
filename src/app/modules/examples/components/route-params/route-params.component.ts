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
  private subscription: Subscription;
  private params: Object;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.params = params;
      }
    );
  }

}
