import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrudsRoutingModule } from './cruds-routing.module';

import { CrudComponent } from './cruds.component';
import { CrudEditComponent } from './crud-edit/crud-edit.component';
import { CrudNewComponent } from './crud-new/crud-new.component';
import { CrudShowComponent } from './crud-show/crud-show.component';

import { CrudShowResolver } from './crud-show/crud-show.resolver';
import { CrudService } from '../../services/crud/crud.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrudsRoutingModule
  ],
  declarations: [
    CrudComponent,
    CrudEditComponent,
    CrudNewComponent,
    CrudShowComponent
  ],
  providers: [
    CrudService,
    CrudShowResolver
  ]
})
export class CrudsModule { }
