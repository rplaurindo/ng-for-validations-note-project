import { Observable } from 'rxjs';

export interface IFormCanDeactivate {

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;

}
