import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConfigNewComponent } from './dashboard-config-new.component';

describe('DashboardConfigNewComponent', () => {
  let component: DashboardConfigNewComponent;
  let fixture: ComponentFixture<DashboardConfigNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardConfigNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConfigNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
