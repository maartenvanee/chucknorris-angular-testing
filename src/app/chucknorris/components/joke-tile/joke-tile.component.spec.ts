import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeTileComponent } from './joke-tile.component';

describe('JokeTileComponent', () => {
    let component: JokeTileComponent;
    let fixture: ComponentFixture<JokeTileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [JokeTileComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(JokeTileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
