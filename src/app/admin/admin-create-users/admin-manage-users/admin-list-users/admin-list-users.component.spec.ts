import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListUsersComponent } from './admin-list-users.component';

describe('AdminListUsersComponent', () => {
  let component: AdminListUsersComponent;
  let fixture: ComponentFixture<AdminListUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
