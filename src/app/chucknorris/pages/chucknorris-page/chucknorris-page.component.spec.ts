import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChucknorrisPageComponent } from './chucknorris-page.component';

describe('ChucknorrisPageComponent', () => {
    let component: ChucknorrisPageComponent;
    let fixture: ComponentFixture<ChucknorrisPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChucknorrisPageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChucknorrisPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
