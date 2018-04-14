import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudNewComponent } from './crud-new.component';

describe('CrudNewComponent', () => {
  let component: CrudNewComponent;
  let fixture: ComponentFixture<CrudNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
