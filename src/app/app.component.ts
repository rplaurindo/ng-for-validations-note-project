import { Component, OnInit, AfterContentInit } from '@angular/core';

import { AuthService } from './services/auth/auth.service';
import { User } from './services/auth/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [AuthService]
})
export class AppComponent implements OnInit,
                                     AfterContentInit {

  title = 'Examples';
  showMenu: Boolean;

  constructor (private authService: AuthService) {
  }

  ngOnInit () {
    this.authService.authenticatedEmitter.subscribe(
      authenticated => {
        this.showMenu = authenticated;
      }
    );
  }

  ngAfterContentInit() {
    this.authService.authenticate(new User());
  }

}
