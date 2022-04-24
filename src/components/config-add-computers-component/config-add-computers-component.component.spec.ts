import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAddComputersComponentComponent } from './config-add-computers-component.component';

describe('ConfigAddComputersComponentComponent', () => {
  let component: ConfigAddComputersComponentComponent;
  let fixture: ComponentFixture<ConfigAddComputersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigAddComputersComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigAddComputersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
