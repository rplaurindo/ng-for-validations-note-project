import {
  Injectable,
  EventEmitter
} from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { User } from './user';


@Injectable()
export class AuthService {

  private static userIsAuthenticated: Boolean = false;
  private static user: User;
  private static subject: Subject<Boolean> = new Subject();

  // private static observer: Observer<Boolean>;
  // static observable: Observable<Boolean> = new Observable(
  //   observer => {
  //     AuthService.observer = observer;
  //   }
  // );

  constructor() { }

  getUserAuthSubject() {
    return AuthService.subject;
  }

  isUserAuthenticated(): Boolean {
    return AuthService.userIsAuthenticated;
  }

  private static setUser(attrs: Object) {
    if (!AuthService.user) {
      AuthService.user = new User(attrs);
    }
  }

  private static unsetUser() {
    AuthService.user = null;
  }

  private multicast() {
    AuthService.subject.observers.forEach(
      subscriber => {
        subscriber.next(AuthService.userIsAuthenticated);
      }
    );
  }

  signIn(attrs: Object = {}) {
    AuthService.setUser(attrs);
    // if ...
    AuthService.userIsAuthenticated = true;
    // else {
    // this.authenticated = false;
    // }

    this.multicast();
  }

  signOut() {
    AuthService.unsetUser();
    AuthService.userIsAuthenticated = false;
    this.multicast();
  }

}
