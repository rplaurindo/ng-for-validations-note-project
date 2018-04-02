import { Observable } from 'rxjs/Observable';

export interface IFormCanDeactivate {

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;

}
