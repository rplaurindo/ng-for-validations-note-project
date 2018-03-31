import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../services/auth/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

  // AuthService deve estar definido como num provider
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(
    activatedRoute: ActivatedRouteSnapshot,
    routeState: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.authService.isUserAuthenticated()) {
      return true;
    }
    this.router.navigate([`/sign_in`]);
    return false;
  }

  private checkAccess() {
  }

}
