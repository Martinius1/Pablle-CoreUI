import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConfigEditComponent } from './dashboard-config-edit.component';

describe('DashboardConfigEditComponent', () => {
  let component: DashboardConfigEditComponent;
  let fixture: ComponentFixture<DashboardConfigEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardConfigEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConfigEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
