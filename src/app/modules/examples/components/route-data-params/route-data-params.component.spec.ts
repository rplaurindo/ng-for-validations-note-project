import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDataParamsComponent } from './route-data-params.component';

describe('RouteDataParamsComponent', () => {
  let component: RouteDataParamsComponent;
  let fixture: ComponentFixture<RouteDataParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDataParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDataParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
