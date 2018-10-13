import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveDataTableComponent } from './leave-data-table.component';

describe('LeaveDataTableComponent', () => {
  let component: LeaveDataTableComponent;
  let fixture: ComponentFixture<LeaveDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
