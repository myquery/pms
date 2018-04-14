import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListApprovedComponent } from './admin-list-approved.component';

describe('AdminListApprovedComponent', () => {
  let component: AdminListApprovedComponent;
  let fixture: ComponentFixture<AdminListApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
