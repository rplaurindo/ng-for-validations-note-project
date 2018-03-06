import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventChildComponent } from './example.component';

describe('ExampleComponent', () => {
  let component: EventChildComponent;
  let fixture: ComponentFixture<EventChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
