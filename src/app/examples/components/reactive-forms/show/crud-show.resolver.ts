import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Resolve
} from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ExampleModel } from '../../../services/crud/example-model';
import { CrudService } from '../../../services/crud/crud.service';


@Injectable()
export class CrudShowResolver implements Resolve<ExampleModel> {

    constructor(private crudService: CrudService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        let id: number = route.params[`id`];
        return this.crudService.getExampleModel(+id);
    }

}
