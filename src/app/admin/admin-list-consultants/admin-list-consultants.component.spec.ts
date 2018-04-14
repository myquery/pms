import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListConsultantsComponent } from './admin-list-consultants.component';

describe('AdminListConsultantsComponent', () => {
  let component: AdminListConsultantsComponent;
  let fixture: ComponentFixture<AdminListConsultantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListConsultantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListConsultantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
