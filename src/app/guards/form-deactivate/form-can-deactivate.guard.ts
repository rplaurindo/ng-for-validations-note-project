import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { IFormCanDeactivate } from './i-form-can-deactivate';


@Injectable()
export class FormCanDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
  canDeactivate(
    component: IFormCanDeactivate,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
