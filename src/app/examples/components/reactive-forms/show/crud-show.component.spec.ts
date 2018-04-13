import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudShowComponent } from './crud-show.component';

describe('CrudShowComponent', () => {
  let component: CrudShowComponent;
  let fixture: ComponentFixture<CrudShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
