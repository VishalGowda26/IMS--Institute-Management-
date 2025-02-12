import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDisplayComponent } from './dashboard-display.component';

describe('DashboardDisplayComponent', () => {
  let component: DashboardDisplayComponent;
  let fixture: ComponentFixture<DashboardDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
