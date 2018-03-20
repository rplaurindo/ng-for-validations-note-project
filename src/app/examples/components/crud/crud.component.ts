import { Component, OnInit } from '@angular/core';

import { CrudService } from './../../services/crud/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './index.component.html',
  styleUrls: ['./crud.component.sass'],
  providers: [CrudService]
})
export class CrudComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
