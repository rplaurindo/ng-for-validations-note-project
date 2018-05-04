import {
  Injectable,
  EventEmitter
} from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
// import { Subscribable } from 'rxjs/Observable';

import { User } from './user';


@Injectable()
export class AuthService {

  private user: User;
  private userIsAuthenticated: Boolean = false;
  private authSubscription: Promise<Boolean>;
  private _accomplish: Function;

  constructor() {
    this.authSubscription = new Promise(
      accomplish => {
        this._accomplish = accomplish;
      }
    );
  }

  private setUser(attrs: Object) {
    if (!this.user) {
      this.user = new User(attrs);
    }
  }

  private unsetUser() {
    this.user = null;
  }

  signOut() {
    this.unsetUser();
    this.userIsAuthenticated = false;
    this._accomplish(this.userIsAuthenticated);
  }

  isUserAuthenticated(): Boolean {
    return this.userIsAuthenticated;
  }

  getUserAuth(): Promise<Boolean> {
    return this.authSubscription;
  }

  signIn(attrs: Object = {}) {
    this.setUser(attrs);
    // if ...
    // this.userIsAuthenticated = true;
    this.userIsAuthenticated = true;
    // else {
    // this.authenticated = false;
    // }

    this._accomplish(this.userIsAuthenticated);
  }

}
