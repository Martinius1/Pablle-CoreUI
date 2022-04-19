import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerTableComponent } from './computer-table.component';

describe('ComputerTableComponent', () => {
  let component: ComputerTableComponent;
  let fixture: ComponentFixture<ComputerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
