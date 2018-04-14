import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListConsultantsDetailComponent } from './admin-list-consultants-detail.component';

describe('AdminListConsultantsDetailComponent', () => {
  let component: AdminListConsultantsDetailComponent;
  let fixture: ComponentFixture<AdminListConsultantsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListConsultantsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListConsultantsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
