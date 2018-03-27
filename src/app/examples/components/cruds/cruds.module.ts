import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrudsRoutingModule } from './cruds-routing.module';

import { AuthService } from './../../../services/auth/auth.service';

import { CrudComponent } from './cruds.component';
import { CrudEditComponent } from './crud-edit/crud-edit.component';
import { CrudNewComponent } from './crud-new/crud-new.component';
import { CrudShowComponent } from './crud-show/crud-show.component';


@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    FormsModule,
    CrudsRoutingModule
  ],
  declarations: [
    CrudComponent,
    CrudEditComponent,
    CrudNewComponent,
    CrudShowComponent
  ],
  providers: [AuthService]
})
export class CrudsModule { }
