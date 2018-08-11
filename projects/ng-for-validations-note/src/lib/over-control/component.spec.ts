import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverControlComponent } from './component';

describe('OverControlComponent', () => {
    let component: OverControlComponent;
    let fixture: ComponentFixture<OverControlComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OverControlComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OverControlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
