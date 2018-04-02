import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../services/auth/auth.service';


@Injectable()
export class AuthGuard implements CanActivateChild {

  // AuthService should be defined as a provider
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivateChild(
    activatedRoute: ActivatedRouteSnapshot,
    routeState: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    // create a "new AccessService().have_user_permission()" and check if user has permission to run a defined route.
    if (this.authService.isUserAuthenticated()) {
      return true;
    }
    this.router.navigate([`/sign_in`]);
    return false;
  }

}
