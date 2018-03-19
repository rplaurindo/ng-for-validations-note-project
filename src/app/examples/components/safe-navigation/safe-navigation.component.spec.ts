import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeNavigationComponent } from './safe-navigation.component';

describe('SafeNavigationComponent', () => {
  let component: SafeNavigationComponent;
  let fixture: ComponentFixture<SafeNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
