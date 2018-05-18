import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqComponent } from '.';

describe('UniqComponent', () => {
  let component: UniqComponent;
  let fixture: ComponentFixture<UniqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
