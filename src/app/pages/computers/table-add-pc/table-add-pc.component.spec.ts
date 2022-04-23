import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAddPcComponent } from './table-add-pc.component';

describe('TableAddPcComponent', () => {
  let component: TableAddPcComponent;
  let fixture: ComponentFixture<TableAddPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAddPcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAddPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
