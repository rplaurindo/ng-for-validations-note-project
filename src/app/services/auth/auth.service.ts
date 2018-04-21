import {
  Injectable,
  EventEmitter
} from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
// import { Subscriber } from 'rxjs/Subscriber';

import { User } from './user';


@Injectable()
export class AuthService {

  private userIsAuthenticated: boolean = false;
  private user: User;
  private subject: Subject<boolean> = new Subject();

  // private static observer: Observer<boolean>;
  // static observable: Observable<boolean> = new Observable(
  //   observer => {
  //     AuthService.observer = observer;
  //   }
  // );

  constructor() { }

  getUserAuthSubject() {
    return this.subject;
  }

  isUserAuthenticated(): boolean {
    return this.userIsAuthenticated;
  }

  private setUser(attrs: Object) {
    if (!this.user) {
      this.user = new User(attrs);
    }
  }

  private unsetUser() {
    this.user = null;
  }

  private multicast() {
    this.subject.observers.forEach(
      subscriber => {
        subscriber.next(this.userIsAuthenticated);
      }
    );
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

  signOut() {
    this.unsetUser();
    this.userIsAuthenticated = false;
    this.multicast();
  }

}
