import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad
} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../services/auth/auth.service';


@Injectable()
export class AuthGuard implements CanActivate,
                                  CanActivateChild,
                                  CanLoad {

  // AuthService should be defined as a provider
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  private checkAccess(): boolean {
    return this.authService.isUserAuthenticated();
  }

  canActivate(
    activatedRoute: ActivatedRouteSnapshot,
    routeState: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    // create a "new AccessService().hasPermissionOf(routeState)" and check if user has permission to run a defined route.
    // hasPermissionOf should check activatedRoute.url and check if the user has permission to run this path
    if (this.checkAccess()) {
      return true;
    }
    this.router.navigate([`/sign_in`]);
    return false;
  }

  canActivateChild(
    activatedRoute: ActivatedRouteSnapshot,
    routeState: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.canActivate(activatedRoute, routeState);
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkAccess();
  }

}
