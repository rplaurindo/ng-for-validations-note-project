import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulatingDomComponent } from './manipulating-dom.component';

describe('ManipulatingDomComponent', () => {
  let component: ManipulatingDomComponent;
  let fixture: ComponentFixture<ManipulatingDomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManipulatingDomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManipulatingDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
