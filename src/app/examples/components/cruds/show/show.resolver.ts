import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Resolve
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ExampleModel } from '../../../../services/crud/example-model';
import { CrudService } from '../../../../services/crud/crud.service';


@Injectable()
export class ShowResolver implements Resolve<ExampleModel> {

    constructor(private crudService: CrudService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        const id: number = route.params[`id`];
        return this.crudService.getExampleModel(+id);
    }

}
