import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-redirecting',
  templateUrl: './redirecting.component.html',
  styleUrls: ['./redirecting.component.sass']
})
export class RedirectingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(
      () => {
        this.router.navigate(['/data-bindings']);
      },
      3000
    );
  }

}
