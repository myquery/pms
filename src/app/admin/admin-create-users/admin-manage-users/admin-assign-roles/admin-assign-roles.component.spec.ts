import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssignRolesComponent } from './admin-assign-roles.component';

describe('AdminAssignRolesComponent', () => {
  let component: AdminAssignRolesComponent;
  let fixture: ComponentFixture<AdminAssignRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAssignRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssignRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
