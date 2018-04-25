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
  private authSubscription: Subject<Boolean> = new Subject();

  // private static observer: Observer<boolean>;
  // static observable: Observable<boolean> = new Observable(
  //   observer => {
  //     AuthService.observer = observer;
  //   }
  // );

  constructor() { }

  private setUser(attrs: Object) {
    if (!this.user) {
      this.user = new User(attrs);
    }
  }

  private unsetUser() {
    this.user = null;
  }

  private multicast() {
    this.authSubscription.observers.forEach(
      subscriber => {
        subscriber.next(this.userIsAuthenticated);
      }
    );
  }

  signOut() {
    this.unsetUser();
    this.userIsAuthenticated = false;
    this.multicast();
  }

  isUserAuthenticated(): Boolean {
    return this.userIsAuthenticated;
  }

  getUserAuth(): Subject<Boolean> {
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

    this.multicast();
  }

}
