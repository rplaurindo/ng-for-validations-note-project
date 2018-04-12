import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

// import { CrudComponent } from './cruds.component';
// import { CrudNewComponent } from './crud-new/crud-new.component';
// import { CrudShowComponent } from './crud-show/crud-show.component';
// import { CrudEditComponent } from './crud-edit/crud-edit.component';

// import { AuthGuard } from '../../../guards/auth-guards/auth.guard';
// import { FormCanDeactivateGuard } from '../../../guards/form-deactivate/form-can-deactivate.guard';

// import { CrudShowResolver } from './crud-show/crud-show.resolver';


const reactiveFormsRoutes: Routes = [
    {

    }
];

@NgModule({
    imports: [
        RouterModule.forChild(reactiveFormsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ReactiveFormsRoutingModule { }
