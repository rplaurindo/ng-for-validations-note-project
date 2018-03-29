import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';

@Injectable()
export class AuthService {

  private authenticated: Boolean = false;
  private authenticatedEmitter = new EventEmitter<Boolean>();

  constructor(private router: Router) {
  }

  authenticate(user: User) {
    // console.log('here');
    // if ...
    this.authenticated = true;
    // else {
      // this.authenticated = false;
      // }
    this.authenticatedEmitter.emit(this.authenticated);
  }

  authenticateEmitter() {
    return this.authenticatedEmitter;
  }

  isUserAuthenticated (): Boolean {
    return this.authenticated;
    // return false;
  }

}
